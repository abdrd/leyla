export type HTMLNode = {
    tag: string
    classList: Array<string>
    id: string
}

let result: Array<HTMLNode> = []
export const getHTMLNodes = (node: any): Array<HTMLNode> => {
    //const html = parse(readFileSync(htmlFileName, { encoding: "utf-8" }))
    if (node.childNodes) {
        if (node.rawTagName) {
            result.push({
                tag: node.rawTagName,
                classList: Array.from(node.classList._set),
                id: node.id,
            })
        }
    }
    for (const child of node.childNodes) getHTMLNodes(child)
    
    return result
}
