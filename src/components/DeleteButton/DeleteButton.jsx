import React from 'react';
import './DeleteButton.scss'
function DeleteButton({buttonText}) {
    return (
        <>
        <button className='delete-button'>
            <p>{buttonText}</p>
        </button>
        </>
    );
}

export default DeleteButton;