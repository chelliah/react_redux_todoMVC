import { combineReducers } from 'redux'
import todos from './todos'
import visibilityFilter from './visibilityFilter'

/**
 * The state parameter is different for every reducer, and corresponds to the part of the state it manages.
 *
 */

const todoApp = combineReducers({
    todos,
    visibilityFilter
})

export default todoApp