import { text, select, note } from "@clack/prompts"
import clipboardy from "clipboardy"
import TemplateManager from "./utils/templateManager.js"
import { exec } from "child_process"
import path from "path"

const platformOptions = [
    { value: "LeetCode", label: "LeetCode" },
    { value: "Codeforces", label: "Codeforces" },
    { value: "Codechef", label: "Codechef" },
    { value: "GeeksForGeeks", label: "GeeksForGeeks" },
    { value: "CodingNinja", label: "CodingNinja" },
]

export async function createPost(templateManager: TemplateManager) {
    const templates = templateManager.getAvailableTemplates()
    if (templates.length === 0) {
        console.error("No templates found. Please add templates to the templates folder.")
        return
    }

    const templateName = String(
        await select({
            message: "Choose a template:",
            options: templates.map((name) => ({ value: name, label: name })),
        })
    )

    const problemName = String(await text({ message: "Problem Title:" }))
    const platform = String(await select({ message: "Platform:", options: platformOptions }))
    const insight = String(await text({ message: "Enter Insights:" }))

    const day = templateManager.getCurrentDay()
    const filledTemplate = templateManager.fillTemplate(templateName, {
        day,
        name: problemName,
        platform,
        insight,
    })

    clipboardy.writeSync(filledTemplate)
    note(filledTemplate, "Post copied to clipboard!")
}

export async function manageTemplates(templateManager: TemplateManager) {
    const action = await select({
        message: "What do you want to do?",
        options: [
            { value: "preview", label: "Preview template" },
            { value: "open", label: "Open templates folder" },
        ],
    })

    if (action === "preview") {
        const templates = templateManager.getAvailableTemplates()
        if (templates.length === 0) {
            console.log("No templates found!")
            return
        }
        const selectedTemplate = String(
            await select({
                message: "Select a template to preview:",
                options: templates.map((name) => ({ value: name, label: name })),
            })
        )

        const templateContent = templateManager.getTemplateContent(selectedTemplate)
        note(templateContent, "Template Content:")
    } else if (action === "open") {
        const templatesDir = templateManager.getTemplatesDir()
        const openCommand = process.platform === "win32" ? "start" : process.platform === "darwin" ? "open" : "xdg-open"
        exec(`${openCommand} "${templatesDir}"`)
    }
}

export async function setStartingDay(templateManager: TemplateManager) {
    const customDay = await text({ message: "Enter starting day:", placeholder: "1" })
    if (customDay && !isNaN(Number(customDay))) {
        templateManager.setStartingDay(Number(customDay))
        note("Starting day set successfully!")
    } else {
        console.error("Invalid input. Please enter a valid number.")
    }
}
