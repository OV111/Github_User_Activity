import http from "http"
const PORT = 5000
const server = http.createServer(async (req,res) => {
    // console.log(req)
    res.end("hello")
})

const userName = process.argv[2]
if(!userName) {
    console.error("Pls Provide GitHub Username!")
    process.exit(1)
}
const fetchUserProfile = async (user) => {
    const url = `https://api.github.com/users/${user}`
    try {
        const result = await fetch(url)
        if(result.status === 404) {
            throw new Error(`User ${user} not found!`)
        }
        const repos = await result.json()
        return repos
    } catch(err) {
        console.error(`❌Error: ${err.message}`)
        process.exit(1)
    } 
}
const formatRepo = (repository) => {
    return [
        `🧑 GitHub User: ${repository.login}`,
        `📛 Name: ${repository.name}`,
        `📌 Bio: ${repository.bio}`,
        `🏢 Company: ${repository.company || 'N/A'}`,
        `🌍 Location: ${repository.location || 'Unknown'}`,
        `📫 Email: ${repository.email || 'Not public'}`,
        `📁 Public Repos: ${repository.public_repos}`,
        `🌟 Followers: ${repository.followers}`,
        `🫂 Following: ${repository.following}`,
        `📅 Created: ${repository.created_at}`,
        `🔗 Profile: ${repository.html_url}`,
    ].join("\n")
}
(async () => {
    let repo = await fetchUserProfile(userName)
    console.log(formatRepo(repo))
})()


// server.listen(PORT,() => {
//     console.log(`server running http://localhost:${PORT}`);
// })

