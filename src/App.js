import { Header } from './Header/Header';
import { Post } from './Post/Post';
import { Todos } from './Todos/Todos';
import { Users } from './Users/Users';
import { Error } from './Error/Error';
import { Postsingle } from './Post_single/Postsingle';
import {Routes, Route} from "react-router-dom"
import { Todossingle } from './Todos_single/Todossingle';
function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path='/' element={<Header/>}></Route>
        <Route path='/posts' element={<Post/>}></Route>
        <Route path='/posts/:name' element={<Postsingle/>}></Route>
        <Route path='/todos' element={<Todos/>}></Route>
        <Route path='/todos/:todosId' element={<Todossingle/>}></Route>
        <Route path='/users' element={<Users/>}></Route>
        <Route path='*' element={<Error/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
