import React,{useState} from "react"
import { AiFillDelete } from 'react-icons/ai';



// 4.  Question: Create a functional component called TodoList that takes an array oftodos as a prop. Each todo object in the array has a id and task property. Display each task in an unordered list (<ul>) with each task as a list item (<li>).

function Todo() {
    const [todos, setTodos] = useState([]);
    const [inputValue, setInputvalue] = useState('');  
    const addTodo =()=>{
        if(inputValue.trim()!==''){
            setTodos([...todos, inputValue]);
            setInterval('');
        }
    }
    const deleteTodo =(index)=>{
        const newTodos=todos.filter((_,i)=>i!==index);
        setTodos(newTodos);
    }

    return(
        <div className="M">
            <h1>To Do List</h1>
            <input id="P" type='text' value={inputValue}
            onChange={(e)=>setInputvalue(e.target.value)}
            placeholder='Enter Your Task...'/>
            <button className="Q" onClick={addTodo}>Add</button>
            <ul className="D">
                {todos.map((todo,index)=>(
                    <li className="A" key={index}>{todo}
                    <button className="B" onClick={()=>deleteTodo(index)}><AiFillDelete  size='20px'   ></AiFillDelete></button>
                   
                    </li>
                ))}
            </ul>
        </div>

    ) ;
}
export default Todo;