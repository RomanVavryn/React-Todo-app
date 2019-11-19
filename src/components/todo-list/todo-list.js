import React from 'react';
import TodoItem from '../todo-item';
import './todo-list.css';


function TodoList(props) {
    // console.log(props.todos)
    return (
        <ul className='todo-list'>
            {props.todos.map(item => (
                <TodoItem key={item.id} task={item} TaskDone={props.TaskDone} DeleteTask={props.DeleteTask} />
            ))}
        </ul>
    )
}

export default TodoList;