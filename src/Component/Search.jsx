import React, { useEffect, useState } from 'react'
  const URL="https://api.spoonacular.com/recipes/complexSearch?"
  const API_KEY="c5fcc516e1534c9fb75542ba6d27ff8a"
const Search = ({foodData, setFoodData}) => {
    const [query, setQuery]=useState("pizza");
    
    useEffect(()=>{
     async function fetchFood(){
       const res= await fetch(`${URL}?query=${query}&apiKey=${API_KEY}`)
        const data = await res.json();
        console.log(data.results)
        setFoodData(data.results)
      }
      fetchFood();
    }, [query])
  return (
    <div className='search'>
      <input type="text" 
       value={query}
       onChange={(e)=>setQuery(e.target.value)}/>
    </div>
  )
}

export default Search
