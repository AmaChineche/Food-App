import React, { useState } from 'react'

const Search = () => {
    const [query, setQuery]=useState("pizzza")
  return (
    <div className='search'>
      <input type="text" 
       value={query}
       onChange={(e)=>setQuery(e.target.value)}/>
    </div>
  )
}

export default Search
