import React from 'react';
import {useState} from 'react'
import axios from 'axios'
import NutritionResult from './NutritionResult';


function TrackNutrients(props) {
      const [food , setFood] = useState('apple')
      const [trigger,setTrigger]  = useState(false)
      const [name,setName] = useState('name')
      const [serving , setServing ]  = useState('100g')
      const [calories,SetCalories ]  = useState('100kcal')
      const [TotalFat,SetTotalFat ]  = useState('100g')
      const [sFat,SetSFat ]  = useState('100g')
      const [colestrol,setCholestrol ]  = useState('100g')
      const [ carbohydrates,setCarbohydrates]  = useState('100g')
      const [sodium ,setSodium ]  = useState('100g')
      const [fibre ,setFibre ]  = useState('100g')
      const [sugar,setSugar ]  = useState('100g')
      const [protien,setProtien ]  = useState('100g')
      


      function getNutrition(){
        const config = {
            headers: {
                'X-RapidAPI-Key': 'c82ac25cc7mshcd9b1b1145a1a8dp11945ejsn4cedad7d353e',
                'X-RapidAPI-Host': 'calorieninjas.p.rapidapi.com'
              }
          };
        const querry = food
        const url = "https://calorieninjas.p.rapidapi.com/v1/nutrition?query="+querry;
      axios.get(url,config).then((res)=> {
           console.log(res.data.items[0])
          setTrigger(true)
          console.log('working')
          setName(res.data.items[0].name)
          setSugar(res.data.items[0].sugar_g)
          setCarbohydrates(res.data.items[0].carbohydrates_total_g)
          setProtien(res.data.items[0].protein_g)
          setCholestrol(res.data.items[0].cholesterol_mg)
          SetCalories(res.data.items[0].calories)
          SetTotalFat(res.data.items[0].fat_total_g)
          SetSFat(res.data.items[0].fat_saturated_g)
          // setPo(res.data.items[0].potassium_mg)
          setSodium(res.data.items[0].sodium_mg)
          setFibre(res.data.items[0].fiber_g)
          setServing(res.data.items[0].serving_size_g)

        })
        .catch(err=> console.log(err))
          
      }

    return (
        <div className='TrackNutrients'>
            <div className="TrackNutrients-child">
                <input className="nutrition" onChange={(e)=>setFood(e.target.value)} type="text" />
                <br />
                <br />
                <NutritionResult trigger={trigger} name={name} servingSize={serving} calories={calories} fat={TotalFat} SFats={sFat} colestrol={colestrol} carbs={carbohydrates} sodium={sodium} fibre={fibre} sugar={sugar} protien={protien} /><br />
                <button className="search-Nutrition"  onClick={getNutrition()}> Get Nutrition </button>
            </div>

            
            
        </div>
    );
}

export default TrackNutrients;