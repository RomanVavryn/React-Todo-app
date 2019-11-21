import React, { Component } from 'react';
import './add-input-tasks.css';

export default class AddInputTasks extends Component {
    state = {
        taksText: ''
    }

    // change text in input 
    hendlChangeTask = (e) => {
        this.setState({ taksText: e.target.value })
    }

    // when press Enter, call add task method
    addHendl = (event) => {
        if (event.key === 'Enter') {
            // task length validation 
            if (this.state.taksText.length < 4) {
                return;
            }

            this.props.addNewTask(this.state.taksText)
            // reset input when task added
            this.setState({taksText: ''})
        }
    }

    // reset input when task added
    textToNull = () => {
        this.setState({taksText: ''})
    }


    render() {
        const { taksText } = this.state;
        const { addNewTask } = this.props;

        return (
            <div className='input-container'>
                <input value={taksText} disabled={this.props.taskCount > 14} onChange={this.hendlChangeTask} onKeyPress={this.addHendl} className='input-task' />
                <button className='addBtn' disabled={this.state.taksText.length < 4} onClick={() => {addNewTask(taksText); this.textToNull();}}> + </button>
            </div>
        )
    }
}
