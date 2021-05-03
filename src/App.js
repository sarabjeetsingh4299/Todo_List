import './App.css';
import  './index.css'
import Header from './MyComponents/Header';
import { Todos } from "./MyComponents/Todos";
import { AddTodo } from "./MyComponents/AddTodo";
import { About } from "./MyComponents/About";
import { Footer } from "./MyComponents/Footer";
import React, { useState, useEffect } from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";




function App() {
   
    let initTodo;
    if (localStorage.getItem("todos") === null) {
        initTodo = [];
    }
    else {
        initTodo = JSON.parse(localStorage.getItem("todos"));
    }
    const onDelete = (todo) => {
        // console.log("i am onDelete", todo)
        // this method of deleting not works in react

        setTodos(todos.filter((e) => {

            return e !== todo;

        })

        )
    }
    const addTodo = (title, desc) => {
        let sno;
        
        if (todos.length === 0) {
            sno = 1;
        }
        else {
            sno = todos[todos.length - 1].sno + 1;
        }
        const myTodo = {
            sno: sno,
            title: title,
            desc: desc
        }
        setTodos([...todos, myTodo]);
        console.log(myTodo);


    }



    const [todos, setTodos] = useState(initTodo);
    useEffect(() => {
        localStorage.setItem("todos", JSON.stringify(todos));


    }, [todos])
    return (
        <>
      
            <Router>
                <Header title="The Todo List" searchBar={true} />
                <h1 className="text-center text-white bg-danger  py-2">The Todo List</h1>
                <Switch>
                    <Route exact path="/" render={() => {
                        return (
                            <>
                                <AddTodo addTodo={addTodo} />
                                <Todos todo={todos} onDelete={onDelete} />
                            </>
                        )
                    }}>

                    </Route>
                    <Route path="/about">
                        <About />
                    </Route>

                </Switch>

                <Footer />
            </Router>





        </>

    );

}


export default App;
