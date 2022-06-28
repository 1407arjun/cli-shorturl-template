const axios = require("axios")
require("dotenv").config()

const check = async (inputs) => {
    try {
        const { data } = await axios.get(process.env.BASE_URL)
        try {
            if (inputs.type.toLowerCase() === "all") {
                const notExists = data.every((url) => {
                    if (url.name.toLowerCase() === inputs.name.toLowerCase()) {
                        console.error("Name already registered!")
                        console.info(`${url.name}\t${url.slug}\t${url.url}`)
                        return false
                    } else if (
                        url.slug.toLowerCase() === inputs.slug.toLowerCase()
                    ) {
                        console.error("Slug already registered!")
                        console.info(`${url.name}\t${url.slug}\t${url.url}`)
                        return false
                    } else {
                        return true
                    }
                })
                if (notExists) console.info("No such URL registeration!")
                return notExists
            } else {
                if (
                    inputs.type.toLowerCase() !== "name" &&
                    inputs.type.toLowerCase() !== "slug"
                ) {
                    console.error("Invalid check type!")
                    process.exit(1)
                } else {
                    const notExists = data.every((url) => {
                        if (
                            url[inputs.type.toLowerCase()].toLowerCase() ===
                            inputs.name.toLowerCase()
                        ) {
                            console.error(
                                `This ${inputs.type.toLowerCase()} is already registered!`
                            )
                            console.info(`${url.name}\t${url.slug}\t${url.url}`)
                            return false
                        } else {
                            return true
                        }
                    })
                    if (notExists)
                        console.info(
                            `No conflicting ${inputs.type.toLowerCase()} registerations!`
                        )
                    return notExists
                }
            }
        } catch (err) {
            console.error("Unknown error!")
            console.error(err.message)
            process.exit(1)
        }
    } catch (err) {
        console.error("Error in fetching URLs!")
        console.error(err.message)
        process.exit(1)
    }
}

module.exports = check
