import React from 'react'
import ListItem from './components/ListItem'

const App = () => {
  return (
    <div>
      <ListItem/>

      <ListItem data={{
        title: "Title of this Item 1",
        price: 450,
        discountedPrice: 340,
      }}/>
      <ListItem/>
    </div>
  )
}

export default App