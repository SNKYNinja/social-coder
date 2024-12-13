#!/usr/bin/env node

import * as p from "@clack/prompts";
import color from "picocolors";
import clipboardy from "clipboardy";
import { setTimeout } from "timers/promises";

let currentDay = 1;

async function setDay() {
    const day = await p.text({
        message: "Day of the coding challenge:",
        validate: (input) => {
            if (isNaN(input)) {
                return "Day should be a number!";
            }
            if (parseInt(input) < 1) {
                return "Day should be greater than 0!";
            }
        },
    });
    currentDay = day;
    const s = p.spinner();
    s.start("Updating day...");
    await setTimeout(1000);
    s.stop("Day updated successfully!");
    p.note(`Challenge Day: ${color.bold(color.yellow(currentDay))}`, color.green("➜"));
}

async function addQuestion() {
    const title = await p.text({
        message: "Enter the question title:",
        validate: (input) => {
            if (!input || input.trim() === '') {
                return "Title cannot be empty!";
            }
        }
    });

    const platform = await p.select({
        message: "Choose the platform:",
        options: [
            { value: "LeetCode", label: "LeetCode" },
            { value: "Codeforces", label: "Codeforces" },
        ],
    });

    const insight = await p.text({
        message: "Insight/Note about the question:",
        validate: (input) => {
            if (!input || input.trim() === '') {
                return "Insight cannot be empty!";
            }
        }
    });

    const s = p.spinner();
    s.start("Adding question...");
    await setTimeout(1000);
    s.stop("Question added successfully!");
    p.note(`New question: ${color.bold(title)}`, color.green("➜"));
    return new Question(title, platform, insight);
}

class Question {
    constructor(title, platform, insight) {
        this.title = title;
        this.platform = platform;
        this.insight = insight;
    }
}

function generateTemplate(questions, socialPlatform) {
    questions = questions.map((q, i) => 
        `📚 Problem${questions.length > 1 ? ` ${i + 1}`: ""}: ${q.title}\n🌐 Platform: ${q.platform}\n🌟 Key Insight: ${q.insight}`
    );
    const templates = {
        LinkedIn: `🚀 Day ${currentDay}/100 – #DrGViswanathan Coding Challenge ✅\n\n${questions.join(`\n\n`)}\n\n💻 #TeamSentinels #100DaysOfCode #DrGViswanathan #VITBhopal #VITBhopalLion #LeetCode`,
        Twitter: `🚀 Day ${currentDay} – LeetCode Grind – Coding Challenge ✅\n\n${questions.join(`\n\n`)}\n\n💻 #100DaysOfCode #LeetCode #JobHunt #CodingJourney #DevLife`
    };

    return templates[socialPlatform];
}

async function main() {
    console.clear();
    
    const title = color.bold(color.cyan(`\n  ${color.underline("🚀 Welcome to Social Coder!")} 🖥️  `));
    
    p.intro(title);

    const questions = [];

    while (true) {
        const action = await p.select({
            message: "What would you like to do?",
            options: [
                { value: "add", label: `Add Question ${color.dim(`(${questions.length})`)}` },
                { value: "set-day", label: `Set Coding Challenge Day ${color.dim(`(${currentDay})`)}` },
                { value: "generate", label: "Generate Post" },
                { value: "exit", label: "Exit" },
            ]
        });

        if (action === "add") {
            const question = await addQuestion();
            if (question) {
                questions.push(question);
            } 
        } else if (action === "set-day") {
            await setDay();
        } else if (action === "generate") {
            if (questions.length === 0) {
                p.note("No questions added yet!", `${color.yellow('⚠️ WARNING')}`);
                continue;
            }
        
            let selectedQuestion = await p.multiselect({
                message: "Choose a question to generate a post for:",
                options: questions.map((q, index) => ({
                    value: index,
                    label: q.title,
                })),
            });
        
            const socialPlatform = await p.select({
                message: "Choose the social media platform:",
                options: [
                    { value: "LinkedIn", label: "LinkedIn" },
                    { value: "Twitter", label: "Twitter" },
                ],
            });
        
            selectedQuestion = questions.filter((_, i) => selectedQuestion.includes(i));
            const template = generateTemplate(selectedQuestion, socialPlatform);
        
            while (true) {
                const previewOrCopy = await p.select({
                    message: "What would you like to do?",
                    options: [
                        { value: "preview", label: "Preview the template" },
                        { value: "copy", label: "Copy template to clipboard" },
                        { value: "back", label: "Back to main menu" },
                    ],
                });
        
                if (previewOrCopy === "preview") {
                    p.note(template, "Preview of your post:");
                } else if (previewOrCopy === "copy") {
                    clipboardy.writeSync(template);
        
                    const s = p.spinner();
                    s.start("Generating post...");
                    await setTimeout(1500);
                    s.stop("Post generated and copied to clipboard!");
                } else if (previewOrCopy === "back") {
                    break;
                }
            }
        } else if (action === "exit") {
            break;
        }
    }

    const goodbyeMessage = color.bold(color.cyan(`👋 ${color.underline("See you tomorrow!")}`));
    
    p.outro(goodbyeMessage);
}

main().catch(console.error);

