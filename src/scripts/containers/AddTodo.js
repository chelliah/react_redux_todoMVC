import React from 'react'
import { connect } from 'react-redux'
import { addTodo } from '../actions'

let AddTodo = ({ dispatch }) => {
    let input;

    return (
        <div className="input-container">
            <input
                ref={node => {input = node}}
                className="input-field"
                placeholder="What needs to be done?"
                onKeyDown={(event) =>{
                    if(event.keyCode === 13) {
                        dispatch(addTodo(input.value));
                        input.value = ''
                    }

                }}
            />
            <button
                onClick={() => {
                    dispatch(addTodo(input.value));
                    input.value = ''
                  }}
                className="input-button"
            >
                Add Todo
            </button>
        </div>
    )
};

AddTodo = connect()(AddTodo);

export default AddTodo