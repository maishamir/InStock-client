import React from 'react';
import './TextField.scss'

function TextField(props) {
    return (
        <form className='form-group'>
            <label htmlFor="textField"> Item Name</label>
    <input type="text" name="textField" id="textField" placeholder='Item Name' className='text-field' />
            
        </form>
    );
}

export default TextField;