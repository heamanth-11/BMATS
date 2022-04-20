import React from 'react';

function Bmitracker() {
    return (
     <div className="bmi">
         <div className="bmi-form">
             <input type="number" placeholder='Weight in KG' name='weight' />
             <input type="text" name="height" placeholder='height in cm' />
             <select name="gender" id="gender">
             <option value="male">Male</option>
             <option value="female">Female</option>

             </select>
             <input type="number" placeholder='Age' name='Age' />
            <button id='bmiTracker' type='button'>Estimate BMI</button>
         </div>
        
     </div>
    );
}

export default Bmitracker;