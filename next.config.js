const redirs = require("./urls")

module.exports = module.exports = {
    reactStrictMode: true,
    async redirects() {
        return [
            ...redirs.map((r) => {
                return {
                    source: `/${r.slug}`,
                    destination: r.url,
                    permanent: false
                }
            })
        ]
    }
}
