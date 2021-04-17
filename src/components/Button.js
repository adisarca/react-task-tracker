import React from 'react'

const Button = ({color, text, onClick}) => {
    return (
        <button className="btn" style={{backgroundColor: color}} onClick ={onClick}>{text}</button>
    )
}

Button.defaultProps = {
    color : 'blue',
}

export default Button

