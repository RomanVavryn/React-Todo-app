import React, { Component } from 'react';
import './add-input-tasks.css';

export default class AddInputTasks extends Component {
    state = {
        taksText: ''
    }

    hendlChangeTask = (e) => {
        this.setState({ taksText: e.target.value })
    }

    addHendl = (event) => {
        if (event.key === 'Enter') {
            this.props.addNewTask(this.state.taksText)
            this.setState({taksText: ''})
        }
    }

    textToNull = () => {
        this.setState({taksText: ''})
    }


    render() {
        const { taksText } = this.state;
        const { addNewTask } = this.props;

        return (
            <div className='input-container'>
                <input value={taksText} onChange={this.hendlChangeTask} onKeyPress={this.addHendl} className='input-task' />
                <button className='addBtn' onClick={() => {addNewTask(taksText); this.textToNull();}}> Add </button>
            </div>
        )
    }
}
