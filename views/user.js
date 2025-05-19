// import { error } from "console"

const searchInput = document.getElementById("searchInput")
const searchBtn = document.getElementById("searchBtn")
const fetchUserName = async () => {
    const username = searchInput.value.trim()
    if(!username) {
        console.log("Pls write User Name!")
        return ;
    }
    
    const response = await fetch(`http://127.0.0.1:5500/search?username=${username}`)
    if(!response.ok) {
        throw new Error("HTTP Error", response.status)
    }
    const data = await response.json()
    console.log(data)
}
searchBtn.addEventListener("click",fetchUserName)
