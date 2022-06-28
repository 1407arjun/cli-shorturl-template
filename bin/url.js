#!/usr/bin/env node

const dispatch = require("./utils/dispatch")
const list = require("./utils/list")
const check = require("./utils/check")

let inputs

switch (process.argv[2]) {
    case "add":
        inputs = {
            type: "all",
            name: process.argv[3],
            slug: process.argv[4],
            url: process.argv[5]
        }
        !inputs.name && console.error("Name is required")
        !inputs.slug && console.error("Slug is required")
        !inputs.url && console.error("URL is required")
        dispatch("add", inputs)
        break
    case "remove":
        inputs = {
            type: "name",
            name: process.argv[3]
        }
        !inputs.name && console.error("Name is required")
        dispatch("remove", inputs)
        break
    case "list":
        list()
        break
    case "check":
        inputs = {
            type: process.argv[3],
            name: process.argv[4],
            slug: process.argv[5],
            url: process.argv[6]
        }
        check(inputs)
        break
    default:
        console.error("Invalid command!")
        process.exit(1)
}
