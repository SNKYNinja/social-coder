import fs from "fs"
import path from "path"
import os from "os"

const CONFIG_DIR = path.join(os.homedir(), ".config", "social-coder")
const TEMPLATES_DIR = path.join(CONFIG_DIR, "templates")
const CONFIG_FILE = path.join(CONFIG_DIR, "config.json")

if (!fs.existsSync(TEMPLATES_DIR)) {
    fs.mkdirSync(TEMPLATES_DIR, { recursive: true })
}

// Default config structure
interface Config {
    startDay: number
    startTimestamp: number
}

export default class TemplateManager {
    private loadConfig(): Config {
        if (!fs.existsSync(CONFIG_FILE)) {
            const defaultConfig: Config = { startDay: 1, startTimestamp: Date.now() }
            this.saveConfig(defaultConfig)
            return defaultConfig
        }

        return JSON.parse(fs.readFileSync(CONFIG_FILE, "utf-8"))
    }

    private saveConfig(config: Config): void {
        fs.writeFileSync(CONFIG_FILE, JSON.stringify(config, null, 4), "utf-8")
    }

    getAvailableTemplates(): string[] {
        return fs
            .readdirSync(TEMPLATES_DIR)
            .filter((file) => file.endsWith(".txt"))
            .map((file) => path.basename(file, ".txt"))
    }

    getTemplateContent(templateName: string): string | null {
        const templatePath = path.join(TEMPLATES_DIR, `${templateName}.txt`)
        if (fs.existsSync(templatePath)) {
            return fs.readFileSync(templatePath, "utf-8")
        }
        return null
    }

    setStartingDay(day: number): void {
        if (isNaN(day) || day < 1) {
            throw new Error("Invalid day. Please enter a valid positive number.")
        }

        const newConfig: Config = { startDay: day, startTimestamp: Date.now() }
        this.saveConfig(newConfig)
    }

    getCurrentDay(): number {
        const config = this.loadConfig()
        const diffDays = Math.floor((Date.now() - config.startTimestamp) / (1000 * 60 * 60 * 24))
        return config.startDay + diffDays
    }

    fillTemplate(templateName: string, data: Record<string, string | number>): string {
        const content = this.getTemplateContent(templateName)
        if (!content) {
            throw new Error(`Template ${templateName} not found.`)
        }

        return content.replace(/\{(\w+)\}/g, (_, key) => data[key]?.toString() || `{${key}}`).trim()
    }
}
