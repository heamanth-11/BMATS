import React from 'react';

function NutritionResult(props) {
    return (props.trigger) ? (<div className='NutritionResult'>
            <div className="NutritionResult-child">
                <h1>Nutrition Result</h1>
                <div className="row ror">
                    <div className="col-lg-1 p-1 col-sm-4">
                        <div className='thead'>
                        <h6> Name</h6>
                        </div>
            
                    </div>
                    <div className="col-lg-1 col-sm-4">
                        <div className='thead'>
                            <h6>Serving Size</h6>
                        </div>
                        
                    </div>
                    <div className="col-lg-1 col-sm-4">
                        <div className='thead'>
                            <h6> Calories</h6>
                        </div>
                     
                    </div>
                    <div className="col-lg-1 col-sm-4">
                        <div className='thead'>
                            <h6>Total Fat</h6>
                        </div>
                
                    </div>
                    <div className="col-lg-1 col-sm-4">
                        <div className='thead'>
                            <h6>Saturated Fats</h6>
                        </div>
                      
                    </div>
                    <div className="col-lg-1 col-sm-4">
                        <div className='thead'>
                            <h6>Cholestrol</h6>
                        </div>
                       
                    </div>
                    <div className="col-lg-1 col-sm-4">
                        <div className='thead'>
                            <h6>carbohydrates</h6>
                        </div>
                    
                    </div>
                    <div className="col-lg-1 col-sm-4">
                        <div className='thead'>
                            <h6>Sodium</h6>
                        </div>
                       
                    </div>
                    <div className="col-lg-1 col-sm-4">
                        <div className='thead'>
                            <h6>Fibre</h6>
                        </div>
                       
                    </div>
                    <div className="col-lg-1 col-sm-4">
                        <div className='thead'>
                            <h6>Sugar</h6>
                        </div>
                        
                    </div>
                    <div className="col-lg-1 col-sm-4">
                        <div className='thead'>
                            <h6>Protien</h6>
                        </div>
                    </div>
                </div>
                <div className="row rore">
                    <div className="col-lg-1 p-1 col-sm-4">
                       
                        <p>{props.name}</p>
                    </div>
                    <div className="col-lg-1 col-sm-4">
                   
                        <p> {props.servingSize} </p>
                    </div>
                    <div className="col-lg-1 col-sm-4">
                     
                        <p>{props.calories}</p>
                    </div>
                    <div className="col-lg-1 col-sm-4">
                        
                        <p>{props.fat}</p>
                    </div>
                    <div className="col-lg-1 col-sm-4">
                       
                        <p>{props.SFats}</p>
                    </div>
                    <div className="col-lg-1 col-sm-4">
                       
                        <p>{props.colestrol}</p>
                    </div>
                    <div className="col-lg-1 col-sm-4">
                      
                        <p>{props.carbs}</p>
                    </div>
                    <div className="col-lg-1 col-sm-4">
                     
                        <p>{props.sodium}</p>
                    </div>
                    <div className="col-lg-1 col-sm-4">
                       
                        <p>{props.fibre}</p>
                    </div>
                    <div className="col-lg-1 col-sm-4">
                        
                        <p> {props.sugar} </p>
                    </div>
                    <div className="col-lg-1 col-sm-4">
                       
                        <p>{props.protien}</p>
                    </div>
                </div>
            </div>
            
        </div>):'';
}

export default NutritionResult;