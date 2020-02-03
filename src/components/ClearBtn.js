import React from  'react';

const ClearBtn = props => {
    const clearTasks = e => {
        e.preventDefault();
        props.dispatch({ type: 'CLEAR' })
    }

    return (
        <button onClick={clearTasks}>Clear Completed Tasks</button>
    )
}

export default ClearBtn;