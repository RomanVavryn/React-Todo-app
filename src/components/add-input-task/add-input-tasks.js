import React, { Component } from 'react';
import './add-input-tasks.css';

export default class AddInputTasks extends Component {
    state = {
        taksText: ''
    }

    hendlChangeTask = (e) => {
        this.setState({taksText: e.target.value})
    }


    render() {
        const { taksText } = this.state;
        const { addNewTask } = this.props;
        
        return (
            <div className='input-container'>
                <input value={taksText} onChange={this.hendlChangeTask} className='input-task' />
                <button className='addBtn' onClick={() => addNewTask(taksText)}> Add </button>
            </div>
        )
    }
}
