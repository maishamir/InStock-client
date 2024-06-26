import React from 'react';
import './SecondaryButton.scss'

function SecondaryButton({buttonText}) {
    return (
        <>
        <button className='secondary-button'>
            <p>{buttonText}</p>
        </button>
        </>
    );
}

export default SecondaryButton;