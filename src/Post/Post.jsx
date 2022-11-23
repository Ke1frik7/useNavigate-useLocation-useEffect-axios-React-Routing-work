import { Link, useNavigate } from "react-router-dom"
import {useEffect, useState} from "react"
export const Post = () => { 
    let navigate = useNavigate()
    function handleHome(){
        navigate("/")
    }
    let [posting, setPosting] = useState({
        data:[],
        error: false
    })
    useEffect(() => {
        let error = new Error
        error.name = "Not found 404"
        ;(async function(){
            let fetchs = await fetch("https://jsonplaceholder.typicode.com/posts")
            if(fetchs.ok === false){
                setPosting({
                    data:[],
                    error: {status: fetchs.status, message: "404  not found"}
                })
                throw(error)
            }   
            let data = await fetchs.json()
            setPosting({
                data, 
                error: false
            })
        }())
    })
    const handleClick = (event) => {
        if(event.keyCode === 8){
            console.log(event)
            navigate(-1)
        }
    }
    useEffect(() => {
        window.addEventListener("keyup", handleClick)
        
    }, [])
    return(
        <div>
            <button onClick={handleHome}>Back to Home</button>
            {posting.data.length > 0 && 
            <ul>
                {posting.data.map((post) => (
                    <li key={post.id}>
                        <Link to={`/posts/${post.id}`}>POST = {post.id}</Link>
                    </li>
                ))}
                </ul>}
        </div>
    )
}