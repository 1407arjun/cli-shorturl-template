const fs = require("fs")
const path = require("path")

let data = JSON.parse(fs.readFileSync(path.join(process.cwd(), "urls.json")))
const type = process.argv[2].toLowerCase()

switch (type) {
    case "add":
        data = [
            ...data,
            {
                name: process.argv[3],
                slug: process.argv[4],
                url: process.argv[5]
            }
        ]
        break
    case "remove":
        data = data.filter((d) => d.name !== process.argv[3])
        break
    default:
        break
}

fs.writeFileSync(
    path.join(process.cwd(), "urls.json"),
    JSON.stringify(data, null, 4) + "\n"
)
