import React, { useEffect, useState } from 'react'
import styles from "./Search.module.css"
  const URL="https://api.spoonacular.com/recipes/complexSearch?"
  const API_KEY="fd5c0e19a4c54b299d9d00aba05d98c9"
const Search = ({foodData, setFoodData}) => {
    const [query, setQuery]=useState("pasta");
    
    
    useEffect(() => {
      async function fetchFood() {
        try {
          const res = await fetch(`${URL}?query=${query}&apiKey=${API_KEY}`);
          if (!res.ok) {
            throw new Error(`HTTP Error! status: ${res.status}`);
          }
          const data = await res.json();
          console.log(data.results);
          setFoodData(data.results);
        } catch (error) {
          console.error("Fetch error:", error);
        }
      }
  
      fetchFood();
    }, [query]);
  

    //   useEffect(()=>{
    //       async function fetchFood(){
    //         try{ const res= await fetch(`${URL}?query=${query}&apiKey=${API_KEY}`)
    //     if(!res.ok){
    //       throw new Error(`HTTP Error! status: ${res.status}`)
    //     }
    // }
   
    //   const data = await res.json();
    //     console.log(data.results)
    //     setFoodData(data.results)
        
    //   },
    //   catch(error){
    //    console.error("fetch error:", error)
    //   }
    // }
    // fetchFood();
    //   }, [query]);
      
      
  return (
    <div className={styles.SearchContainer}>
      <input 
      className={styles.input}
       type="text" 
       value={query}
       onChange={(e)=>setQuery(e.target.value)}/>
    </div>
  )
}

export default Search
