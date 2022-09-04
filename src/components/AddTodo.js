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
                    <label>
                        <input
                        type="checkbox"
                        checked={todo.complete}
                        onChange={() => handleComplete(todo)}
                        />
                        {todo.title}
                    </label>
                </div>
            ))}</>
    )
}

export { AddTodo }