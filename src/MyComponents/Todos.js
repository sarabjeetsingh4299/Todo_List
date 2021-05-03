import React from 'react'
import { Todo } from "./Todo"
import '../index.css'

export const Todos = (props) => {

    let myStyle = {
        minHeight: "70vh",
        margin: "40px auto",
        textAlign: "center",
        width:"32.3%"
        
        
    }
    

    
    
    return (
        <div className="container " style={myStyle}>
            <h2 className="my-3 text-center text-white py-2 bg-primary">Todos List</h2>
           {props.todo.length===0? "nothing to display ": props.todo.map((todo)=>{
                return (
                <>
                <Todo todo={todo} key={todo.sno}  onDelete={props.onDelete}/>   
                <hr className="bg-light" />
                </>
                )
            })
              } 
          
        </div>
    
    )


}
                                                                

