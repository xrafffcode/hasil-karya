import execa from 'execa'
import fs from 'fs'

(async () => {
  try {
    await execa("npm", ["run", "build"])
    console.log("Building...")

    await execa("git", ["add", "dist"])
    await execa("git", ["commit", "-m", "deploy"])
    await execa("git", ["push", "origin", "main"])
    console.log("Successfully deployed")
  } catch (e) {
    console.log(e.message)
    process.exit(1)
  }
}
)()
