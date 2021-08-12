import readline from "readline"
import chalk from "chalk"
import { parse, HTMLElement } from "node-html-parser"
import { readFileSync } from "fs"
import { getHTMLNodes } from "./parse-html"

const Leyla = () => {
    const prompt = readline.createInterface({
        input: process.stdin,
        output: process.stdout,
    })

    prompt.question(chalk.blue("HTML file: "), html => {
        prompt.question(chalk.blue("Javascript file: "), js => {
            prompt.close()

            console.log("js: ", js, "html: ", html)

            // parse html
            console.log(
                getHTMLNodes(parse(readFileSync(html, { encoding: "utf-8" })))
            )
            // create querySelectors
            // write to js file
        })
    })
}

Leyla()
