import React, { useState } from 'react';
import './DynamicsClasses.css';


const DynamicsClasses = () => {

    const [isButtonActive, setIsButtonActive] = useState(false);
    console.log(isButtonActive,"- isButtonActive")
    const handleButtonClick = () => {
        setIsButtonActive(!isButtonActive);
    };

    return (
        <button className={isButtonActive ? 'active-button' : 'inactive-button'} onClick={handleButtonClick}>
            Login
        </button>
    );
};
export default DynamicsClasses;