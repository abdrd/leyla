import readline from "readline"
import chalk from "chalk"
import { parse, HTMLElement } from "node-html-parser"
import { readFileSync } from "fs"
import { getHTMLNodes } from "./parse-html"

const Leyla = () => {
    let htmlFile = ""
    let javascriptFile = ""

    const prompt = readline.createInterface({
        input: process.stdin,
        output: process.stdout,
    })

    prompt.question(chalk.blue("HTML file: "), html => {
        htmlFile = html
        prompt.question(chalk.blue("Javascript file: "), js => {
            javascriptFile = js
            prompt.close()

            console.log("js: ", javascriptFile, "html: ", htmlFile)

            // parse html
            console.log(
                getHTMLNodes(
                    parse(readFileSync(htmlFile, { encoding: "utf-8" }))
                )
            )
            // create querySelectors
            // write to js file
        })
    })
}

Leyla()
