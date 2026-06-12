
import React, { useCallback, useMemo, useState } from 'react'
import products from './data/products'
import SearchInput from './components/SearchInput'
import ProductList from './components/ProductList'

const App = () => {
  console.log("App Rendered")

  const [search,setSearch] =useState("")
  const [count , setCount] =useState(0)

  const filteredProducts =useMemo(()=>{
    console.log("Filtering Products")
    
    return products.filter((product)=>
    product.name.toLowerCase()
    .includes(search.toLowerCase())

      )
  },[search])

  const handleSelect =useCallback(
    (name)=>{
      console.log("Selected: ",name)
    }
  ,[])
  return (
    <div>
      <h1>Product Search App</h1>

      <button onClick={()=>setCount(count+1)}>Count: {count}</button>
      
      <SearchInput 
      search={search}
      setSearch={setSearch}
      />

      <ProductList 
      products={filteredProducts}
      onSelect={handleSelect}
      />
    </div>
  )
}

export default App