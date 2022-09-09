import React from 'react';
import { todoReducer } from "../reducers/todo";
import { AddTodo } from './AddTodo';

const Todo = () => {
    return (
        <div className='todo-list'>
            <todoReducer />
            <AddTodo className="todo" />
        </div>
    )
}


export { Todo }

