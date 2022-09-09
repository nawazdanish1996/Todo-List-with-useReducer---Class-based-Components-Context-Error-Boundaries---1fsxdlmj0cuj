import React from "react";

const AddTodo = ({ dispatch }) => {
    const [todos, dispatch] = useReducer(reducer, initialTodos);

    const handleComplete = (todo)=>{
        dispatch({type: "COMPLETED", id: todo.id});
    };

    return (
        <>
            {todos.map((todo)=>(
                <div key={todo.id}>
                    <form id="todo-form">
                        <input
                        id="todo-input"
                        type="checkbox"
                        checked={todo.complete}
                        onChange={() => handleComplete(todo)}
                        />
                        <button type="submit">Button</button>
                        <button type="reset">Reset</button>
                        <h1 id="todo-input">{todo.title}</h1>

                    </form>
                </div>
            ))}</>
    )
}

export { AddTodo }