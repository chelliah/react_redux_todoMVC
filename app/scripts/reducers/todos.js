/*
* reducers communicate actions to the store
* try to keep data separate form UI state
* store should mostly just keep track of state
*
* called a reducer based on similarity to
* array.reduce()
*
* must be a pure function
*
* */

const todo = (state, action) => {
    switch (action.type) {
        case 'ADD_TODO':
            return {
                id: action.id,
                text: action.text,
                completed: false
            }
        case 'TOGGLE_TODO':
            if (state.id !== action.id) {
                return state
            }

            return {
                ...state,
                completed: !state.completed
            }
        default:
            return state
    }
}

const todos = (state = [], action) => {
    switch (action.type) {
        case 'ADD_TODO':
            return [
                ...state,
                todo(undefined, action)
            ]
        case 'TOGGLE_TODO':
            return state.map(t =>
                todo(t, action)
            )
        default:
            return state
    }
}

export default todos