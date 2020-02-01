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
                        <div className='todo' key={value.id}>
                            <h2>{value.item}</h2>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default Todos;