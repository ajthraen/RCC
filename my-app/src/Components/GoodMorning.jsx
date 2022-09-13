import React from 'react';

// let timeOfDay = new Date();
// timeOfDay.getHours();

const GoodMorning = () => {
    let timeOfDay = 12;
    return (
        <div className='container1'>
            <h1>It's {timeOfDay} O'clock</h1>
        </div>
    );
}

export default GoodMorning;
