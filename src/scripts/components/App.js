import React from 'react'
import Footer from './Footer'
import AddTodo from '../containers/AddTodo'
import VisibleTodoList from '../containers/VisibleTodoList';


/*
* components are concerned
* 1. with how things look
* 2. allow containment via this.props.children
* 3. have no dependencies on the rest of the app (such as stores)
* 4. receive data and callbacks exclusively via props
* 5. are written in functional components unless they need state
* 6. should have no dependency on redux!
* */

/*
 * containers are concerned:
 * 1. with how things work
 * 2. generally dont have dom markup, have no styles
 * 3. provide the data and behavior to presentational or other container components.
 * 4. call action creators?
 */

const App = () => (
    <div className="app">
        <h1 className="title">To Do List</h1>
        <AddTodo />
        <VisibleTodoList />
        <Footer />
    </div>
);

export default App

