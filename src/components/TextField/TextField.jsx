import React from 'react';
import './TextField.scss'

function TextField({name, placeholder}) {
    return (
        <form className='form-group'>
            <label htmlFor="textField"> {name}</label>
    <input type="text" name="textField" id="textField" placeholder={placeholder} className='text-field' />
            
        </form>
    );
}

export default TextField;