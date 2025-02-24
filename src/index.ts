#!/usr/bin/env node

import { intro, outro, select } from "@clack/prompts"
import color from "picocolors"
import { createPost, manageTemplates, setStartingDay } from "./command.js"
import TemplateManager from "./utils/templateManager.js"
import { ACTIONS } from "./config/constants.js"

const templateManager = new TemplateManager()

async function main() {
    intro(color.bold(color.cyan(`\n  ${color.underline("🚀 Welcome to Social Coder!")} 🖥️  `)))

    while (true) {
        const action = String(
            await select({
                message: "What would you like to do?",
                options: ACTIONS,
            })
        )

        switch (action) {
            case "createPost":
                await createPost(templateManager)
                break
            case "setStartingDay":
                await setStartingDay(templateManager)
                break
            case "manageTemplates":
                await manageTemplates(templateManager)
                break
            case "exit":
                outro(color.bold(color.cyan(`👋 ${color.underline("See you next time!")}`)))
                process.exit(0)
            default:
                console.error(color.red("Invalid Action"))
        }
    }
}

main().catch((err) => {
    console.error(color.red("Failed to execute CLI"), err)
    process.exit(1)
})
