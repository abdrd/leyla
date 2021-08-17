import { HTMLNode } from "./parse-html"
import camelCase from "camelcase"

// represents a line of javascript querySelector
// e.g.     const submitBtn = document.querySelector("#submit-btn")
export type Selector = {
    // name is the variable name
    name: string
    selector: string
}

let selectors: Array<Selector> = []

export const createQuerySelectors = (
    nodes: Array<HTMLNode>
): Array<Selector> => {
    nodes.forEach(node => {
        let s = { selector: "", name: "" }
        if (node.id) {
            s = {
                selector: `document.querySelector("#${node.id}")`,
                name: generateSelectorName(node.tag, node.id),
            }

            if (checkDuplicate(selectors, s)) selectors.push(s)
        }
        if (node.classList.length > 0) {
            for (const c of node.classList) {
                s = {
                    selector: `document.querySelectorAll(".${c}")`,
                    name: generateSelectorName(node.tag, c),
                }

                if (checkDuplicate(selectors, s)) selectors.push(s)
            }
        }
    })

    return selectors
}

const generateSelectorName = (
    tagName: string,
    id?: string,
    className?: string
): string => {
    const LOCALE = { locale: "en-US" }

    let res = ""
    if (id) {
        res += camelCase([id, tagName], LOCALE)
    }
    if (className) {
        res += camelCase([className, tagName], LOCALE)
    }

    return res
}

const checkDuplicate = (selectors: Array<Selector>, s: Selector) => {
    for (const se of selectors) {
        if (se.name === s.name) return false
    }

    return true
}
