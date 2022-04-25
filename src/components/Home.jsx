import React from 'react';
import { Link } from "react-router-dom";
function Home() {
    
    return (
        <div className='home'>
        
                <div className="plans">
                    <div className="row">

                    <div className="col-sm-4 col-12 plan">
                         <button className='plan-btn'>maintain weight</button>
                    </div>
                    <div className="col-sm-4 col-12 plan">
                        <button className='plan-btn'>Gain Weight</button>
                    </div>
                    <div className="col-sm-4 col-12 plan">
                        <button className='plan-btn'>Weight Loss</button>
                    </div>
                    <hr/>
                    </div>
                    <div className="row">
                         <div className="col-sm6 tracker ">
                          <Link to="/bmi-tracker"> <button className='bmi-button'>TRACK BMI</button> </Link>
                          </div>
                        <div className="col-sm6  tracker">
                         <Link to="/bmr-tracker">   <button className='bmi-button'> TRACK BMR </button> </Link>
                         </div>
                     </div>
          
                  x
            </div>
        
        
          
  
        </div>

    );
}

export default Home;






