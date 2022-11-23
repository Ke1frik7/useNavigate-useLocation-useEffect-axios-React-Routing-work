import { useEffect } from "react"
import {Link, useParams} from "react-router-dom"
import {useState} from "react";
import axios from "axios"
export const Todos = () => {
    let [todos, setTodos] = useState({
        data: [], 
        error: false
    })
   useEffect(() => {
    ;(async function () {
        let json = await axios({
            method: "GET", 
            url: "https://jsonplaceholder.typicode.com/todos"
        }).catch((error) => {
            if(error.name === "AxiosError"){
                setTodos({
                    data: [], 
                    error: {error: error.name, message: error.message}
                })
            }
        })
        let data = await json.data
        setTodos({
            error: false,
            data
        })
    }())
   })
    return(
        <div>
            {todos.data.length > 0 && 
            <ul>
                {todos.data.map((todo) => (
                    <li key={todo.id}>
                        
                        <Link to={`/todos/${todo.id}`}>Todo = {todo.id}</Link>
                    </li>
                ))}
            </ul>}
        </div>
    )
}