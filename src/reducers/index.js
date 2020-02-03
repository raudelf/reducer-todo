export const initialState = [
    {
        item: 'Learn about reducers',
        completed: false,
        id: 1
    },
    {
        item: 'Learn about contexts',
        completed: false,
        id: 2
    }
    ]

export const reducer = (state, action) => {
    switch (action.type) {
        case 'ADD_TASK':
            return [
                ...state, {
                item: action.payload,
                completed: false,
                id: new Date()}
            ];
            
        case 'TOGGLE_COMPLETE':
            return state.map(e => e.id === action.id ? {
                ...e, completed: !e.completed } : e);
        default:
        return state;
    }
}