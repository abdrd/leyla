#! usr/bin/env node
import readline from "readline"
import chalk from "chalk"
import { parse } from "node-html-parser"
import { readFileSync } from "fs"
import { getHTMLNodes } from "./parse-html"
import { createQuerySelectors } from "./create-selectors"
import { writeToJSFile } from "./write-file"

const Leyla = () => {
    const prompt = readline.createInterface({
        input: process.stdin,
        output: process.stdout,
    })

    prompt.question(chalk.blue("HTML file: "), html => {
        prompt.question(chalk.blue("Javascript file: "), js => {
            if (!html.includes(".html")) html = html + ".html"
            if (!js.includes(".js")) js = js + ".js"

            prompt.close()

            const nodes = getHTMLNodes(
                parse(readFileSync(html, { encoding: "utf-8" }))
            )
            const selectors = createQuerySelectors(nodes)
            writeToJSFile(selectors, js)

            console.log(chalk.green("Done!"))
        })
    })
}

Leyla()
