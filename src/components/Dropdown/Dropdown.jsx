import React from 'react';
import './Dropdown.scss'

function Dropdown(props) {
    return (
  
  
             <form className='form-group'>
            <label htmlFor="dropdown"> Warehouse</label>
            <input type="text" name="dropdown" id="dropdown" placeholder='Please Select' className='dropdown' />
        </form>
       
    );
}

export default Dropdown;