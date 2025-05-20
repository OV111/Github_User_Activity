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
// console.log(userName)

const fetchRepo = async () => {
    let url = `https://api.github.com/users/${userName}`
    try {
        const result = await fetch(url)
        // console.log(result)
        if(result.status === 404) {
            throw new Error(`User ${userName} not found!`)
        }
    
        const repos = await result.json()
        console.log(repos)
    } catch(err) {
        console.error(`Error: ${err.message}`)
        process.exit(1)
    } 
}
fetchRepo()
// server.listen(PORT,() => {
//     console.log(`server running http://localhost:${PORT}`);
// })

