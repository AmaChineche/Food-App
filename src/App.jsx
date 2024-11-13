import { useState } from 'react'
import './App.css'
import Search from './Component/Search'
import FoodList from './Component/FoodList'
import Navbar from './Component/Navbar'
import Container from './Component/Container'
function App() {
  const [foodData, setFoodData]= useState([])
  return (
    <div className="App">
      <Navbar/>
      <Search foodDate={foodData} setFoodData={setFoodData}/>
      <Container>
      <FoodList foodData={foodData}/>
      </Container>
      
  
   
    </div>
  )
}

export default App
