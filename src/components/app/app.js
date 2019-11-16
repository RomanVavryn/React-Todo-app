import React, { Component } from 'react';
import './app.css';

import AddInputTasks from '../add-input-task';
import TodoList from '../todo-list';

export default class App extends Component {
    state = {
        todos: [],
    }

    id = 0;
    addNewTask = (text) => {

        let task = {
            task: text,
            done: false,
            import: false,
            id: this.id,
        }
        this.setState({ todos: [...this.state.todos, task] })
        this.id++;
    }

    TaskDone = (id) => {
        let stateCopy = JSON.parse(JSON.stringify(this.state.todos))
        stateCopy[id].done = !this.state.todos[id].done;
        this.setState({
            todos: stateCopy
        })
    }

    render() {
        return (
            <div className='container'>
                <AddInputTasks addNewTask={this.addNewTask} />
                <TodoList todos={this.state.todos} TaskDone={this.TaskDone} />
            </div>
        )
    }
}
