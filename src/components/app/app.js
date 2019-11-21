import React, { Component } from 'react';
import './app.css';

// components 
import AddInputTasks from '../add-input-task';
import TodoList from '../todo-list';

export default class App extends Component {
    state = {
        todos: [],
    }

    // unique id for task
    id = 0;
    // add task method
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

    // task change state to done
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

    // delete task
    DeleteTask = (id) => {
        this.setState(state => {
            // find task with same id
            const list = state.todos.filter(item => item.id !== id);
            return {
                todos: list,
            };
        });
    };

    render() {
        return (
            <div className='container'>
                <AddInputTasks addNewTask={this.addNewTask} taskCount={this.state.todos.length} />
                <TodoList todos={this.state.todos} TaskDone={this.TaskDone} DeleteTask={this.DeleteTask} />
            </div>
        )
    }
}
