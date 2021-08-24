import chalk from "chalk"
import fs from "fs"
import { Selector } from "./create-selectors"

export const writeToJSFile = (
    selectors: Array<Selector>,
    jsFile: string
): void => {
    let toPrepend = ""
    for (const s of selectors) toPrepend += `const ${s.name} = ${s.selector}\n`

    // * file exists
    if (fs.existsSync(jsFile)) {
        const fileContent = fs.readFileSync(jsFile, { encoding: "utf-8" })
        fs.writeFileSync(jsFile, toPrepend + "\n" + fileContent, {
            encoding: "utf-8",
        })
    } /* file doesn't exist */ else {
        console.log(
            chalk.yellow(
                "specified javascript file doesn't exist. creating it..."
            )
        )
        fs.writeFileSync(jsFile, toPrepend + "\n", {
            encoding: "utf-8",
        })
    }
}
