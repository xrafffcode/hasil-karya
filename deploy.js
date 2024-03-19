const { execSync } = require("child_process")
const fs = require("fs")

try {
  execSync("git checkout --orphan gh-pages")
  console.log("Building...")
  execSync("npm run build")

  // Understand if it's dist or build folder
  const folderName = fs.existsSync("dist") ? "dist" : "build"

  execSync(`git --work-tree ${folderName} add --all`)
  execSync(`git --work-tree ${folderName} commit -m "gh-pages"`)
  console.log("Pushing to gh-pages...")
  execSync("git push origin HEAD:gh-pages --force")
  execSync(`rm -r ${folderName}`)
  execSync("git checkout -f main")
  execSync("git branch -D gh-pages")
  console.log("Successfully deployed")
} catch (e) {
  console.log(e.message)
  process.exit(1)
}
