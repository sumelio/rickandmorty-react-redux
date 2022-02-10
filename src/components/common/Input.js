import React from 'react';

import './style/Input.scss'

const Input = ({reference='', defaultValue='', placeholder='', type=''}) =>  (
        <input
            className='inputText'
            ref={reference}
            defaultValue={defaultValue}
            placeholder={placeholder}
            type={type}
        />
    )

export default Input;