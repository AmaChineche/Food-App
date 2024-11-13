import { useState } from 'react'
import './App.css'
import Search from './Component/Search'
import FoodList from './Component/FoodList'

function App() {
  const [foodData, setFoodData]= useState([])
  return (
    <div className="App">
   <Search foodDate={foodData} setFoodData={setFoodData}/>
   <FoodList foodData={foodData}/>
    </div>
  )
}

export default App
