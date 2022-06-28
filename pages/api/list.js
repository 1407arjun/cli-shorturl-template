const redirects = require("../../urls.json")

export default (req, res) => {
    if (req.query.key === "12345") res.status(200).json(redirects)
    else res.status(401).send("Unauthorized")
}
