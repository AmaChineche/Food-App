import React from 'react'
import Item from './Item'

const ItemList = ({food, isLoading}) => {
  return (
    <div>
       {isLoading ? (
    <p>Loading...</p>
  ) : food.extendedIngredients && food.extendedIngredients.length > 0 ? (
    food.extendedIngredients.map((item, index) => (
      <Item item={item}/>
    ))
  ) : (
    <p>No ingredients available.</p>
  )}
    </div>
  )
}

export default ItemList
