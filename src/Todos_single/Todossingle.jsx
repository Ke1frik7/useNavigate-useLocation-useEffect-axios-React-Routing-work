import { Link, useParams } from "react-router-dom"
import {useEffect, useState} from "react"
// import { useParams } from "react-router-dom"
import axios from "axios"
export const Todossingle = () => {
   let params = useParams()
   let [todos, todosSingle] = useState({
        data: [],
        error: false    
   })
   let todosArray = []
   useEffect(() => {
    let error = new Error
    error.name = "404 not found"
        ;(async function(){
            let fetching = await fetch(`https://jsonplaceholder.typicode.com/todos/${params.todosId}`)
            if(fetching.ok === false){
                todosSingle({
                    data: [],
                    error: {error: error.name, status: error.status}
                })
            }
            let response = await fetching.json()
            todosArray = [...todosArray, response]
            todosSingle({
                data: todosArray,
                error: false
            })
        }())
    }, [])
   return(
       <div>
        {console.log(todos)}
        {todos.data.length > 0 && 
        <ul>
            {todos.data.map((todo) => (
            <li key={todo.id}>
                {console.log(todo)}
              <h1> id = {todo.id} and title = {todo.title}</h1>
            </li>
            ))}
        </ul>}
       </div> 
   )
}