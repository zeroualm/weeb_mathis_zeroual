import React from 'react';
import './Input.css'

const Input = ({ className = '', ...props }) => {
    return (
        <input 
            className={`contact-form-grid-input ${className}`} 
            {...props} 
        />
    );
};

export default Input;