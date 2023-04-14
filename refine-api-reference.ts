const fs = require("fs")

const extractImportantLinks = (content) => {
    const importantClassesRegex = /^## Important Classes([\s\S]*?)^##/m
    const importantInterfacesRegex = /^## Important Interfaces([\s\S]*?)^##/m

    const importantClassesMatch = content.match(importantClassesRegex)
    const importantInterfacesMatch = content.match(importantInterfacesRegex)

    const importantClasses = importantClassesMatch
        ? importantClassesMatch[1].trim()
        : ""
    const importantInterfaces = importantInterfacesMatch
        ? importantInterfacesMatch[1].trim()
        : ""

    const linkRegex = /^\s*-\s*\[([^\]]+)\]\(([^\)]+)\)/gm

    const classes = []
    let match
    while ((match = linkRegex.exec(importantClasses))) {
        classes.push({ name: match[1], path: match[2] })
    }

    const interfaces = []
    while ((match = linkRegex.exec(importantInterfaces))) {
        interfaces.push({ name: match[1], path: match[2] })
    }

    return { classes, interfaces }
}

const refineAPIRef = () => {
    const sourceFilePath = "docs/api/modules.md"
    const destinationFilePath = "docs/api/index.mdx"

    // replaces index content with module content
    // index is by default the readme, which we don't want
    if (fs.existsSync(sourceFilePath)) {
        const content = fs.readFileSync(sourceFilePath, "utf-8")
        fs.writeFileSync(destinationFilePath, content)

        fs.unlinkSync(sourceFilePath)
        fs.unlinkSync("docs/api/index.md")
    }

    const content = fs.readFileSync(destinationFilePath, "utf-8")
    const featuredLinks = extractImportantLinks(content)

    // Remove unwanted sections
    let newContent = content.replace(/## Enumerations[\s\S]*?(?=##|$)/, "")
    newContent = newContent.replace(/## Other Interfaces[\s\S]*?(?=##|$)/, "")
    newContent = newContent.replace(/## Other Classes[\s\S]*?(?=##|$)/, "")
    newContent = newContent.replace(/## Important Classes[\s\S]*?(?=##|$)/, "")
    newContent = newContent.replace(
        /## Important Interfaces[\s\S]*?(?=##|$)/,
        ""
    )

    newContent = newContent.replace(
        /sidebar_position: 0.5/,
        "sidebar_position: 1"
    )

    // Add new sections

    newContent = newContent.replace(
        "Streamr JavaScript Client",
        `import FeaturedLinks from "@site/src/components/FeaturedLinks";\n\n## Featured Classes \n\n<FeaturedLinks links={${JSON.stringify(
            featuredLinks.classes
        )}} category="class" />\n\n## Featured Interfaces\n\n<FeaturedLinks links={${JSON.stringify(
            featuredLinks.interfaces
        )}} category="interface" />`
    )

    // Write the modified content back to the file
    fs.writeFileSync(destinationFilePath, newContent)
}

refineAPIRef()
