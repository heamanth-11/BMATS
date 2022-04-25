import React from 'react';

function BmrTracker(props) {
    return <div className='bmrtracker'>
             <div className="bmr-form">
             <label htmlFor="">BMR TRACKER</label>
             <input className='side-border weight' type="number" placeholder='Weight in KG' name='weight' />
             <input className='side-border' type="number" name="height" placeholder='height in cm' />
             <input className='side-border' type="number" placeholder='Age' name='Age' />
             <select name="gender" id="gender">
             <option value="male">Male</option>
             <option value="female">Female</option>

             </select>
           
            <button id='bmrTracker' type='button'> Track BMR </button>
         </div>
            
        </div>

}

export default BmrTracker;