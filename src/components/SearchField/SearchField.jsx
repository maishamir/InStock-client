import React from 'react';
import './SearchField.scss'

function SearchField(props) {
    return (
        
             <form className='form-group'>
            <label htmlFor="searchField"> </label>
            <input type="text" name="searchField" id="searchField" placeholder='Search...' className='search-field' />
            
        </form>
        
    );
}

export default SearchField;