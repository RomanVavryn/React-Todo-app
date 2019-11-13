import React, { Component } from 'react';
import './app.css';

import AddInputTasks from '../add-input-task';
import TodoList from '../todo-list';

export default class App extends Component {
    state = {
        todos: [],
    }

    addNewTask = (text) => {
        let task = {
            task: text,
            done: false,
            import: false
        }
        this.setState({todos: [...this.state.todos, task]})
    }

    render() {
        return (
            <div className='container'>
                <AddInputTasks addNewTask={this.addNewTask} />
                <TodoList todos={this.state.todos} />
            </div>
        )
    }
}
