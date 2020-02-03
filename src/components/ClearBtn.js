import React from  'react';

const ClearBtn = props => {
    const clearTasks = e => {
        e.preventDefault();
        props.dispatch({ type: 'CLEAR' })
    }

    return (
        <button className='btn clear' onClick={clearTasks}>Clear Completed Tasks</button>
    )
}

export default ClearBtn;