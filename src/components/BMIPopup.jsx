import React from 'react';

function BMIPopup(props) {
    return (props.trigger) ? (<div className='bmipopup'>
            <div className="bmipopup-child">
                <button className="close">X</button>
                <h5>Your BMI is <super>{props.bmi}</super> </h5>
                <h3>{props.bariatrics}</h3>
                <button className="tryplan">{props.plan}</button>
            </div>
            
        </div>):''
    ;
}

export default BMIPopup;