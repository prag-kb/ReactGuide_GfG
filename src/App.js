import React from 'react'
import Header from './components/Layout/header'
import Subheader from './components/Layout/Subheader'
import Products from "./components/products/Products"

const App = () => {
  return (
    <div>
      <Header/>
      <Subheader/>
      <Products/>
    </div>
  )
}

export default App