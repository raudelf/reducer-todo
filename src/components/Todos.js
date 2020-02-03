import React, { useReducer, useState } from 'react';
import { initialState, reducer } from '../reducers';

const Todos = () => {
    const [state, dispatch] = useReducer(reducer, initialState);
    const [newTask, setNewTask] = useState('');

    const handleChanges = e => {
        setNewTask(e.target.value)
    }

    const submitTask = e => {
        e.preventDefault();
        dispatch({ type: 'ADD_TASK', payload: newTask})
    }

    const toggleComplete = e => {
        dispatch({ type: 'TOGGLE_COMPLETE', id: e})
    }

    console.log('what', state);
    return (
        <div className='container'>
            <form className='addContainer'>
                <input className='addInput' type='text' name='newTask' value={newTask} onChange={handleChanges}/>
                <button onClick={submitTask}>Add</button>
            </form>
            <div className='todoContainer'>
                {state.map((value) => {
                    return (
                        <div onClick={() => toggleComplete(value.id)} className={`todo${value.completed ? " complete" : ""}`} key={value.id}>
                            <h2>{value.item}</h2>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default Todos;