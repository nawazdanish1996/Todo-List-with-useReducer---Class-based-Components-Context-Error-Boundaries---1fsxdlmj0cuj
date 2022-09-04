import React from 'react';
import { todoReducer } from "../reducers/todo";
import { AddTodo } from './AddTodo';

const Todo = () => {
    return (
        <>
            <todoReducer />
            <AddTodo />
        </>
    )
}


export { Todo }

