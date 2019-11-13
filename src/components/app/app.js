import React, { Component } from 'react';
import './app.css';

import AddInputTasks from '../add-input-task';

export default class App extends Component {
    state = {
        todos: [],
    }

    addNewTask = (obj) => {
        this.setState({todos: [...this.state.todos, obj]})
    }

    render() {
        return (
            <div className='container'>
                <AddInputTasks addNewTask={this.addNewTask} />
            </div>
        )
    }
}
