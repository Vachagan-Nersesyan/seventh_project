
import './App.css';

import HeaderComp from './components/HeaderComp'
import ArrItemComp from './components/AddItemComp'
import FilterComp from './components/FilterComp'
import ItemComp from './components/ItemComp'

import { handleSearch,deleteSearch } from './utils/helperScp'
import { useState } from 'react';

function App() {

  const itemsArr = [
    {
      id: 0,
      text: 'Buy groceries for next week',
      date: '28 June, 2022',
    },
    {
      id: 1,
      text: 'Renew car insurance',
      date: '18 October, 2023',
    },
    {
      id: 2,
      text: 'Sign up for online course',
      date: '3 November, 2023',
    },
  ]

  const [arr,setArr] = useState(itemsArr)

  const deleteItem = (id) => {
    setArr(deleteSearch(id, itemsArr))
  }

  const changeItemText = (itemsArr,id,str) => {
    
    setArr(handleSearch(itemsArr,id,str))
  }


  return (
    <div className="App">
      <div className='App_container'>
        <HeaderComp />
        <ArrItemComp />
        <FilterComp />
        <ItemComp itemsArr={arr} changeItemText={changeItemText} deleteItem={deleteItem} />
      </div>
    </div>
  );
}

export default App;
