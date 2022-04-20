import React from 'react';
import { Link } from "react-router-dom";
function Home() {
    onclick=()=>{
        // alert('HO HO HO ')
    }
    return (
        <div className='home'>
            <div className="row">
                <div className="col-sm6 tracker ">
                   <Link to="/bmi-tracker"> <button onClick={onclick} className='bmi-button'>TRACK BMI</button> </Link>
                </div>
                <div className="col-sm6  tracker">
                   <button className='bmi-button'> TRACK BMR</button>
                </div>
            </div>
            <hr/>
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

                    </div>

                  
            </div>
        
        
          
  
        </div>

    );
}

export default Home;






