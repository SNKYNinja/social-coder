import { text, select, note } from "@clack/prompts"
import clipboardy from "clipboardy"
import TemplateManager from "../utils/templateManager.js"

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

    const problemName = String(await text({ message: "Problem Title:", placeholder: "Two Sum" }))
    const platform = String(await select({ message: "Platform:", options: platformOptions }))
    const insight = String(await text({ message: "Enter Insights:", placeholder: "Key learning points" }))

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
    const templates = templateManager.getAvailableTemplates()
    if (templates.length === 0) {
        console.log("No templates found. Add templates in ~/.config/social-coder/templates.")
        return
    }

    const selectedTemplate = String(
        await select({
            message: "Select a template to preview:",
            options: templates.map((name) => ({ value: name, label: name })),
        })
    )

    const templateContent = templateManager.getTemplateContent(selectedTemplate)
    console.log("\nTemplate Content:")
    console.log(templateContent)
}

export async function setStartingDay(templateManager: TemplateManager) {
    const customDay = await text({ message: "Enter starting day:", placeholder: "1" })
    if (customDay && !isNaN(Number(customDay))) {
        templateManager.setStartingDay(Number(customDay))
        console.log("Starting day set successfully!")
    } else {
        console.error("Invalid input. Please enter a valid number.")
    }
}
