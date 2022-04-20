import React from 'react';

function Home() {
    onclick=()=>{
        // alert('HO HO HO ')
    }
    return (
        <div className='home'>
            <div className="row">
                <div className="col-sm6 tracker ">
                   <a href="/bmi-tracker"> <button onClick={onclick} className='bmi-button'>TRACK BMI</button> </a>
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






