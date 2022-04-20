import Home from "./components/Home";
import Navbar from "./components/Navbar";
import {Routes,Route} from 'react-router-dom'
import Bmitracker from "./components/BMI-TRACKER";
function App() {
  return    <div className="App">
    <Navbar/>
    <Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="/bmi-tracker" element={<Bmitracker/>}/>
    </Routes>
    
   
    </div>
    

}

export default App;
