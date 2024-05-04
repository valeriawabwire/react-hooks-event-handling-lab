// Code Keypad Component Here
import React from 'react';

function Keypad() {
    function handleChange(event) {
        console.log(`Entering password...`)
    }

    return <input onChange={handleChange} type="password" name="password" />
}

export default Keypad;

