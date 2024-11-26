
import React, { useEffect, useState } from 'react'
import styles from './FoodDetails.module.css'
import ItemList from './ItemList';
const FoodDetails = ({foodId}) => {
  const [food, setFood]=useState("");
  const [isLoading, setIsLoading]=useState({})
  // console.log(foodId)

  const URL = `https://api.spoonacular.com/recipes/${foodId}/information`
  const API_KEY="fd5c0e19a4c54b299d9d00aba05d98c9"
  useEffect(()=> {
   async function fetchFood(){
     const res = await fetch(`https://api.spoonacular.com/recipes/${foodId}/information?apiKey=fd5c0e19a4c54b299d9d00aba05d98c9`);
     const data = await res.json();
     console.log(data);
     setFood(data);
     setIsLoading(false)
    }
    fetchFood(foodId);
  }, [foodId])


  return (
    <div>
      <div className={styles.recipeCard}>
       <h1 className={styles.recipeName}>{food.title} </h1>

<img className={styles.recipeImage} src={food.image} alt=""/>
      
      <div className={styles.recipeDetails}>
        <span>
          <strong>⏲{food.readyInMinutes} Minutes</strong>
        </span>
      <strong>
      <span>{food.vegetarian ? " 🥕vegetarian": "🍗Non-vegetarian"}</span>
        </strong> 
        <span>
          <strong>serves🙎‍♂️🙍‍♂️{food.servings}</strong>
          </span>

          <span>
            <strong> {food.vegan? "🍖vegan": " "} </strong>
           
          </span>
      </div>
      {/* <h1>Food Details {foodId}
     
      </h1> */}
      <div> 
        <strong>
        $ {food.pricePerServing/100}
        </strong>
        
        </div>

      {/* <h2>ingredients</h2>
      {food.extendedIngredients.map((item)=><div>
        <h3>{item.name}</h3>
        </div>
        )} */}


The error might be similar here, as food.extendedIngredients could be undefined when you try to use .map on it. To fix this issue, we need to ensure that food.extendedIngredients exists before mapping over it.

Fix for the Ingredients Section
Use conditional rendering to safely handle cases where food.extendedIngredients might be undefined:

jsx
Copy code
<div>
  <h2>Ingredients</h2>
 <ItemList food={food} isLoading={isLoading}/>

        <h2>instructions</h2>
        <div div className={styles.Instructions}> 
        <ol>
         {isLoading ? (
          <p> Loading....</p>
        ) : (
          food.analyzedInstructions[0].steps.map((step)=>
          <li>{step.step}</li>
  ))} 

        </ol>
       
      {console.log(food)}
    
      </div>
    </div>
    </div>
    </div>
  )
}

export default FoodDetails
