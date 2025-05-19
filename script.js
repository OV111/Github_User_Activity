import http from "http"
const PORT = 5500
const server = http.createServer(async (req,res) => {

})
server.listen(PORT,() => {
    console.log(`server running at http://127.0.0.1:${PORT}`);
    
})

