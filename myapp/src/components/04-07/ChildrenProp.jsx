import React from 'react';

const button = ({ children }) => {    
    return (
        <button>
            {children} 
                       
        </button>
    );
};

const ChildernProp = () => {
    return (
        <div>
            <button>Login</button> 
                                     
        </div>
    );
};

export default ChildernProp;