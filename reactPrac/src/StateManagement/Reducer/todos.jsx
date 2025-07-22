import React from "react";
import { todosReducer } from "./reducer";
import { intialTodosState } from "./reducer";

// useReducer based state management
export function TodoApp(){
    const [todos,dispatch]=React.useReducer(todosReducer,intialTodosState)
    const [todoInput,setTodoInput]=React.useState({id:Math.random(),title:"",complete:false})
    const handleAddTodo=(todo)=>{
        dispatch({type:'ADD_TODO',payload:todo})
    }
    const handleCompleteTodo=(todoId)=>{
        dispatch({type:'COMPLETED',id:todoId})
    }
 const todoElem=todos.todos
    return(<>

        {todoElem.map((todo)=>{
            return (
                <div key={todo.id}>
                    <h3>{todo.title}</h3>
                    <button onClick={()=>handleCompleteTodo(todo.id)}>
                        {todo.complete ? "Undo" : "Complete"}
                    </button>
                <button onClick={()=>dispatch({type:'DELETE_TODO',id:todo.id})}>Delete</button>

                </div>
            )
        })}

        <div>
            <h3>
                Add your todo
            </h3>
            <input type='text' onChange={(e)=>setTodoInput({...todoInput,title:e.target.value})}></input>
        </div>
        <button onClick={()=>handleAddTodo(todoInput)}>Add Todo</button> 
    </>)
}