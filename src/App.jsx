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
  const [foodId, setFoodId]= useState("656329");

  return (
    <div className="App">
      <Navbar/>
      <Search foodDate={foodData} setFoodData={setFoodData}/>
      <Container>
        <InnerContainer>
        <FoodList setFoodId={setFoodId} foodData={foodData}/>
        </InnerContainer>

        <InnerContainer>
          <FoodDetails foodId= {foodId}/>
        </InnerContainer>
      </Container>

      
  
   
    </div>
  )
}

export default App
