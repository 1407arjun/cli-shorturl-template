const { request } = require("@octokit/request")
const check = require("./check")
require("dotenv").config()

const dispatch = async (workflow, inputs) => {
    try {
        const notExists = await check(inputs)
        if (
            (workflow === "add" && notExists) ||
            (workflow === "remove" && !notExists)
        ) {
            inputs.type = workflow.slice(0, 1).toUpperCase() + workflow.slice(1)
            await request(
                "POST /repos/{owner}/{repo}/actions/workflows/{workflow_id}/dispatches",
                {
                    headers: {
                        authorization: `token ${process.env.GITHUB_PAT}`
                    },
                    owner: "1407arjun",
                    repo: "url-shortner",
                    workflow_id: "ci.yml",
                    ref: "main",
                    inputs
                }
            )
            console.info(`Workflow requested to ${workflow} URL!`)
        }
    } catch (err) {
        console.error("Error in requesting a workflow!")
        console.error(err.message)
        process.exit(1)
    }
}

module.exports = dispatch
