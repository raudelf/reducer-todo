import React, { useReducer, useState } from 'react';
import { initialState, reducer } from '../reducers';

// Components
import ClearBtn from '../components/ClearBtn';
import AddTask from '../components/AddTask';

const Todos = () => {
    const [state, dispatch] = useReducer(reducer, initialState);
    const [newTask, setNewTask] = useState('');

    const toggleComplete = e => {
        dispatch({ type: 'TOGGLE_COMPLETE', payload: e})
    }

    console.log('what', state);
    return (
        <div className='container'>
            <AddTask dispatch={dispatch} setNewTask={setNewTask} newTask={newTask}/>
            <div className='todoContainer'>
                {state.map((value) => {
                    return (
                        <div onClick={() => toggleComplete(value.id)} className={`todo${value.completed ? " complete" : ""}`} key={value.id}>
                            <h2>{value.item}</h2>
                        </div>
                    )
                })}
            </div>
            <ClearBtn dispatch={dispatch} />
        </div>
    )
}

export default Todos;