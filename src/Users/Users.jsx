import { Link } from "react-router-dom"
export const Users = () => {
    return(
        <ul>
            <li><Link to={"/users/1"}>Users 1</Link></li>
            <li><Link to={"/users/2"}>Users 2</Link></li>
        </ul>
    )
}