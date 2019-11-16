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

    TaskDone = (item) => {
        this.setState(state => {
            const list = state.todos.map((obj) => {
                if (obj.id === item.id) {
                    obj.done = !obj.done;
                } 
                return obj;
            });
            return {
                todos: list,
            };
        });
    };

    DeleteTask = (id) => {
        this.setState(state => {
            const list = state.todos.filter(item => item.id !== id);
            return {
                todos: list,
            };
        });
    };

    render() {
        return (
            <div className='container'>
                <AddInputTasks addNewTask={this.addNewTask} />
                <TodoList todos={this.state.todos} TaskDone={this.TaskDone} DeleteTask={this.DeleteTask} />
            </div>
        )
    }
}
