import { Link } from "react-router-dom"
export const Header = ( ) => {
    return (
        <div>
            <ul>
                <li><Link to={"/posts"}>Post</Link></li>
                <li><Link to={"/todos"}>Todos</Link></li> 
                <li><Link to={"/users"}>Users</Link></li> 
            </ul>
        </div>
    )
}