import React from 'react';

const AddTask = props => {
    const handleChanges = e => {
        props.setNewTask(e.target.value)
    }

    const submitTask = e => {
        e.preventDefault();
        props.setNewTask('');
        props.dispatch({ type: 'ADD_TASK', payload: props.newTask})
    }

    return (
        <form className='addContainer'>
                <input className='addInput' type='text' name='newTask' value={props.newTask} onChange={handleChanges}/>
                <button className='btn add' onClick={submitTask}>Add</button>
        </form>
    )
}

export default AddTask;