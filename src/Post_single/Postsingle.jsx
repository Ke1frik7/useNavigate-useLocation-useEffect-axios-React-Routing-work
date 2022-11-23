import { useParams, useLocation, useNavigate } from "react-router-dom"
import {useEffect, useState} from "react"
import axios from  "axios"
export const Postsingle = () => {
    let paramerts = useParams()
    let location = useLocation()
    let [post, setPost] = useState([])
    let navigate = useNavigate() 
   
    function handleClick(){
    navigate(-1)
    }
    useEffect(() => {
        ;(async function(){
            let jsons = await axios({
                method: "GET", 
                url:`https://jsonplaceholder.typicode.com/posts/${paramerts.name}`
            }).catch((error) => {
                if(error.name = "AxiosError"){
                    jsons = {error: error.name, message: error.message}
                }
            })
            let data = await jsons.data
            setPost(data)
        }())
    })
    function handleKey(event){
        if(event.keyCode === 8){
            navigate(-1)
        }
    }
    useEffect(() => {
        window.addEventListener("keyup", handleKey)
        function remove(){
            window.removeEventListener("keyup", handleKey)
        }
        remove()
    }, [])
    return(
        <div>
            <button onClick={handleClick}>Messi</button>
            <h1>
            PostName: id = {post.id}
        </h1>
        <h1>Title = {post.title}</h1>
        </div>

        
    )
}