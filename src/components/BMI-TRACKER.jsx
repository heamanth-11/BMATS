import React from 'react';
import BMIPopup from './BMIPopup';
// import { Link } from 'react-router-dom';

function Bmitracker() {
    return (
     <div className="bmi">
         <div className="bmi-form">
             <label htmlFor="">BMI TRACKER</label>
             <input className='side-border weight' type="number" placeholder='Weight in KG' name='weight' />
             <input className='side-border' type="number" name="height" placeholder='height in cm' />
             <input className='side-border' type="number" placeholder='Age' name='Age' />
             <select name="gender" id="gender">
             <option value="male">Male</option>
             <option value="female">Female</option>

             </select>
           
            <button id='bmiTracker' type='submit' onClick={(event)=>{
            //    { }
                <BMIPopup trigger={true} />

            }} > Track BMI </button>
         </div>
        
     </div>
    );
}

export default Bmitracker;