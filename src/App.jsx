import Home from "./components/Home";
import Navbar from "./components/Navbar";
import {Routes,Route} from 'react-router-dom'
import Bmitracker from "./components/BMI-TRACKER";
import BmrTracker from "./components/BmrTracker";
import TrackNutrients from "./components/TrackNutrients";

function App() {


  return    <div className="App">

    <Navbar/>
    <Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="/bmi-tracker" element={<Bmitracker/>}/>
    <Route path="/bmr-tracker" element={<BmrTracker/>} />
    <Route path="/track-nutrition" element={<TrackNutrients/>} />
    </Routes>
    
   
    </div>
    

}

export default App;
