import React from 'react';
// import { useState } from 'react';

function BMIPopup(props) {
    // const [close ,setClose] = useState(false);
    // const closed = props.trigger = false
    return (props.trigger) ? (<div className='bmipopup'>
            <div className="bmipopup-child">
            {/* <FontAwesomeIcon icon="fa-solid fa-xmark" /> */}
            <button className="close" ><a href="/bmi-tracker">x</a> </button>
                <h5>Your BMI is <span> {props.bmi}</span> </h5>
                <h3>{props.bariatrics}</h3>
                <p>{props.discription}</p>
            </div>
            
        </div>):''
    ;
}

export default BMIPopup;