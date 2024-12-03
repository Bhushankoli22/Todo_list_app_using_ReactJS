import React from 'react'
import "../src/Home.css"
import { useState } from "react";
import { Link } from "react-router-dom"
import TodoInput from '../src/components/TodoInput'
import Todolist from '../src/components/TodoList';


const Home = () => {
    const [listTodo, setListTodo] = useState([]);
    let addList = (inputText) => {
        if (inputText !== '')
            setListTodo([...listTodo, inputText]);
    }
    const deleteListItem = (key) => {
        let newListTodo = [...listTodo];
        newListTodo.splice(key, 1)
        setListTodo([...newListTodo])
    }
    return (
        <Link to="/Home">
        <div className='Home'>
            <div className="main-container">
                <div className="center-container">
                    <TodoInput addList={addList} />
                    <h1 className="app-heading">TODO</h1>
                    <hr />
                    {listTodo.map((listItem, i) => {
                        return (
                            <Todolist key={i} index={i} item={listItem} deleteItem={deleteListItem} />
                        )
                    })}
                </div>
            </div>
        </div>
        </Link>
    )
}

export default Home
