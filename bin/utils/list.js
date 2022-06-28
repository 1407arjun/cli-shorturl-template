const axios = require("axios")
require("dotenv").config()

const list = async () => {
    try {
        const { data } = await axios.get(process.env.BASE_URL)
        const maxName = data.reduce((p, c) =>
            p.name.length >= c.name.length ? p : c
        )
        const maxSlug = data.reduce((p, c) =>
            p.slug.length >= c.slug.length ? p : c
        )

        console.info("Listing all registered URLs:")
        data.forEach((url) => {
            console.info(
                `${
                    url.name + " ".repeat(maxName.name.length - url.name.length)
                }\t${
                    url.slug + " ".repeat(maxSlug.slug.length - url.slug.length)
                }\t${url.url}`
            )
        })
    } catch (err) {
        console.error("Error in fetching URLs!")
        console.error(err.message)
        process.exit(1)
    }
}

module.exports = list
