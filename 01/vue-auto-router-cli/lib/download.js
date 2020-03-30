const {promisify} = require('util')
module.exports.clone = async function(repo, desc) {
    const download = promisify(require('download-git-repo'))
    const ora = require('ora')
    const process = ora(`downloading........${repo}`)
    process.start()
    await download(repo, desc)
    process.succeed()
}