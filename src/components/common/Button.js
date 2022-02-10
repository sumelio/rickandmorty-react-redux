import React from 'react';

import './style/Button.scss'

const Button = ({type ='submit', size, alt='', content='', onClick}) => (
        <button 
        onClick={onClick}
        className={`mainButton ${size ? size : ''}`} type={type} alt={alt}>
            {content}
        </button>
    )

export default Button;