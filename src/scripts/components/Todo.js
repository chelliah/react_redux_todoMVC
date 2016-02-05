import React, { PropTypes } from 'react'
import classnames from 'classnames';



//const Todo = ({ onClick, completed, text}) => (
//    <li
//        onClick={onClick}
//        style={{
//      textDecoration: completed ? 'line-through' : 'none'
//    }}
//        className={classes}
//    >
//        {text}
//    </li>
//)

const Todo = React.createClass({
    render: function(){
        let classes = classnames('todo-item', {
            'complete': this.props.completed,
            'incomplete': !this.props.completed
        });
        return(
            <li
                onClick={this.props.onClick}
                className={classes}
            >
                {this.props.text}
            </li>
        )
    }
})



Todo.propTypes = {
    onClick: PropTypes.func.isRequired,
    completed: PropTypes.bool.isRequired,
    text: PropTypes.string.isRequired
}

export default Todo