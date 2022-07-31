import React from 'react';
// import { useState } from 'react';

function BMRPopup(props) {
    // const [close ,setClose] = useState(false);
    // const closed = props.trigger = false
    return (props.trigger) ? (<div className='bmipopup'>
            <div className="bmipopup-child">
            {/* <FontAwesomeIcon icon="fa-solid fa-xmark" /> */}
            <button className="close" ><a href="/bmr-tracker">x</a> </button>
                <h5>Your BMR is <span> {props.BMR}</span> </h5>
                <h3>{props.bariatrics}</h3>
                <p>{props.discription}</p>
            </div>
            
        </div>):''
    ;
}

export default BMRPopup;