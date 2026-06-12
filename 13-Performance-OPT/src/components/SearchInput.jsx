import React from 'react'

const SearchInput = ({search,setSearch}) => {
 
 console.log("SearchInput Rendered")
    return (
    <div>
        <input 
        type="text"
        placeholder='search product'
        value={search}
        onChange={(e)=>setSearch(e.target.value)}
        />
    </div>
  )
}

export default SearchInput