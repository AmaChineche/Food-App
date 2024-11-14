import { useState } from 'react'
import './App.css'
import Search from './Component/Search'
import FoodList from './Component/FoodList'
import Navbar from './Component/Navbar'
import Container from './Component/Container'
import InnerContainer from './Component/InnerContainer'
import FoodDetails from './Component/FoodDetails'
function App() {
  const [foodData, setFoodData]= useState([]);
  const [foodId, setFoodId]= useState("");








  return (
    <div className="App">
      <Navbar/>
      <Search foodDate={foodData} setFoodData={setFoodData}/>
      <Container>
        <InnerContainer>
        <FoodList foodData={foodData}/>
        </InnerContainer>

        <InnerContainer>
          <FoodDetails/>
        </InnerContainer>
      </Container>

      
  
   
    </div>
  )
}

export default App
