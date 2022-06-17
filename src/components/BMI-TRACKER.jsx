import React from 'react';
import BMIPopup from './BMIPopup';
// import { Link } from 'react-router-dom';
// import { useState } from 'react';
import {useState} from 'react'


function Bmitracker() {


  const [trigger , setTrigger] = useState(false)
  const [height,setHeight] = useState(0) 
  const [weight,setWeight] = useState(0);

  function discription(){
    if(bmiScore() > 25 )
    return "according to a new study showing people who are even a little overweight face increased risk for many serious diseases, including diabetes, heart disease, colon cancer, high blood pressure, and gallstones."
   else if (bmiScore() < 18)
       return 'underweight may also be the reason for fatigue and lethargy as well as low blood pressure, heart rate and blood sugar levels, which can cause night sweats, having cold fingers and toes and muscle problems,'
   else if (bmiScore() > 30)
       return 'Being obese can also increase your risk of developing many potentially serious health conditions, including: type 2 diabetes. high blood pressure. high cholesterol and atherosclerosis (where fatty deposits narrow your arteries), which can lead to coronary heart disease and stroke.'
   else
       return'Maintaining a healthy weight is important for health. In addition to lowering the risk of heart disease, stroke, diabetes, and high blood pressure, it can also lower the risk of many different cancers.'

  }
  function bmiBariatrics(){
    if(bmiScore() > 25 )
     return 'overweight'
    else if (bmiScore() < 18)
        return 'underweight'
    else if (bmiScore() > 30)
        return 'obesity'
    else
        return'Healthy weight'

    
}
    function bmiScore(){
    if (height >= 15){
        setHeight(height/10);
        return (weight/height*height)
        
    }
    else{
        return (Math.floor(weight/(height*height)))
    }
   }
   

   function triggerPopup(){
        console.log(bmiScore())
        setTrigger(true)
    }

    return (
     <div className="bmi">
         <div className="bmi-form">
             <label htmlFor="">BMI TRACKER</label>
             <input className='side-border weight' type="number" onChange={(e)=>setWeight(e.target.value)} placeholder='Weight in KG' name='weight' />
             <input className='side-border' type="number" onChange={(e)=>setHeight(e.target.value)} name="height" placeholder='height in cm' />
             <input className='side-border' type="number" placeholder='Age' name='Age' />
             <select name="gender"  id="gender">
             <option value="male">Male</option>
             <option value="female">Female</option>

             </select>
             <BMIPopup trigger={trigger} bmi={bmiScore()} bariatrics={bmiBariatrics()} discription={discription()}  />
           
            <button id='bmiTracker' type='submit' onClick={triggerPopup}  > Track BMI </button>
         </div>
        
     </div>
    );
}

export default Bmitracker;