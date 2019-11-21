import React from 'react';
import './todo-item.css';

function TodoItem(props) {
    return (
        <li className='todo-item'>
            {/* task text */}
            {props.task.done ? <span className='task-text-done'>{props.task.task}</span> : <span className='task-text'>{props.task.task}</span>}
            {/* done btn */}
            <label className='taks-is-done'>
                <input type='checkbox' checked={props.task.done} onChange={() => props.TaskDone(props.task)} />
                {props.task.done ? <span className='taks-is-done-icon'> &#9745; </span> : <span className='taks-is-done-icon'> &#9744; </span>}
            </label>
            {/* delete btn */}
            <button className='taks-delete' onClick={() => props.DeleteTask(props.task.id)} > &#9746; <span className='dellBtn'>&#9746;</span></button>
        </li>
    )
}

export default TodoItem;