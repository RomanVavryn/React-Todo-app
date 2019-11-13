import React from 'react';
import TodoItem from '../todo-item';


function TodoList(props) {
    console.log(props)
    return (
        <ul>
            <TodoItem />
            <TodoItem />
        </ul>
    )
}

export default TodoList;