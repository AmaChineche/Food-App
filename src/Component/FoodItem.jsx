import React from 'react'
import styles from "./FoodItem.module.css"
const FoodItem = ({food}) => {
  return (
    <div className={styles.itemContainer} >
        <img className={styles.itemImage}src={food.image} alt="" />
     
     <div className={styles.itemContent}>
     <p className={styles.itemName}>{food.title}</p>
    </div> 
    <div className={styles.ButtonContainer}>
    <button className={styles.itemButton}>View Recipe</button>
    </div>
      
    </div>
  )
}

export default FoodItem
