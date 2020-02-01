import React, { useReducer } from 'react';

import { initialState, reducer } from '../reducers';

const Todos = () => {
    const [state, dispatch] = useReducer(reducer, initialState);
    console.log('what', state);
    return (
        <div className='todoContainer'>
        {state.map((value) => {
            return (
                <div className='todo' key={value.id}>
                    <h2>{value.item}</h2>
                </div>
            )
        })}
        </div>
    )
}

export default Todos;