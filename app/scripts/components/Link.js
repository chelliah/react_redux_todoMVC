import React, { PropTypes } from 'react'

const Link = ({ active, children, onClick }) => {
    if (active) {
        return <span className="footer-link current-link">{children}</span>
    }

    return (
        <a href="#"
           className="footer-link"
           onClick={e => {
         e.preventDefault()
         onClick()
       }}
        >
            {children}
        </a>
    )
}

Link.propTypes = {
    active: PropTypes.bool.isRequired,
    children: PropTypes.node.isRequired,
    onClick: PropTypes.func.isRequired
}

export default Link