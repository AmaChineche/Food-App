
import React, { useEffect, useState } from 'react'
const FoodDetails = ({foodId}) => {
  const [food, setFood]=useState("");
  const [isLoading, setIsLoading]=useState({})

  const URL = `https://api.spoonacular.com/recipes/${foodId}/information`
  const API_KEY="75948ec08fbd474388f7bcde074d4614"
  useEffect(()=> {
   async function fetchFood(){
     const res = await fetch(`${URL}?apikey=${API_KEY}`);
     const data = await res.json();
     console.log(data);
     setFood(data);
     setIsLoading(false)
    }
    fetchFood(foodId);
  }, [foodId])


  return (
    <div>
      <div>
       <h1>{food.title} </h1>

<img src={food.img} alt=""/>
      </div>
      <div>
        <span>
          <strong>⏲{food.readyInMinutes} Minutes</strong>
        </span>
        <span>{food.vegetarian? " 🥕vegetarian": "🍗Non-vegetarian"}</span>
        <span>
          <strong>serves🙎‍♂️🙍‍♂️{food.servings}</strong>
          </span>

          <span>
            {food.vegan? "🍖vegan": " "}
          </span>
      </div>
      {/* <h1>Food Details {foodId}
     
      </h1> */}
      <div>$ {food.pricePerServing/100}</div>

      <div> 
        
        <h2>instructions</h2>
        {isLoading ? (
          <p> Loading....</p>
        ) : (
          food.analyzedInstructions[0].steps.map((step)=>
          <li>{step.step}</li>
  ))};
    
      </div>
    </div>
  )
}

export default FoodDetails
