
import './App.css';

import HeaderComp from './components/HeaderComp'
import ArrItemComp from './components/AddItemComp'
import FilterComp from './components/FilterComp'
import ItemComp from './components/ItemComp'

import { handleSearch, deleteSearch, sortByItem, sortByDate, addingItem } from './utils/helperScp'
import { useState } from 'react';



const itemsArr = [
  {
    id: 0,
    text: 'Buy groceries for next week',
    date: '28 June, 2022',
    isDone: false,
    isImportant: false,
    dateNum: 2022

  },
  {
    id: 1,
    text: 'Renew car insurance',
    date: '18 October, 2021',
    isDone: false,
    isImportant: true,
    dateNum: 2021

  },
  {
    id: 2,
    text: 'Sign up for online course',
    date: '3 November, 2023',
    isDone: false,
    isImportant: false,
    dateNum: 2023


  },
]


function App() {

  

  const [arr, setArr] = useState(itemsArr)

  const deleteItem = (id) => {
    setArr(deleteSearch(id, itemsArr))
  }

  const changeItemText = (itemsArr, id, str) => {

    setArr(handleSearch(itemsArr, id, str))
  }

  const isDoneFunc = (id) => {
    itemsArr[id].isDone = !itemsArr[id].isDone
  }

  const isImportantFunc = (id) => {
    itemsArr[id].isImportant = !itemsArr[id].isImportant
  }

  const sortArrFunc = (str) => {

    setArr([...sortByItem(itemsArr, str)])
  }

  const sortByDateFunc = (tp) => {
    setArr([...sortByDate(itemsArr, tp)])
  }

  const addingItemFunc = (str,value,dtyr) => {

    
    let obj = {
      id: itemsArr[itemsArr.length - 1].id + 1 ,
      date: value,
      isDone: false,
      isImportant: false,
      dateNum: dtyr,
      text : str
    }

    
    
    console.log(itemsArr)
    setArr([...addingItem(itemsArr,obj)])
    

  }


  return (
    <div className="App">
      <div className='App_container'>
        <HeaderComp />
        <ArrItemComp addingItemFunc={addingItemFunc} />
        <FilterComp sortByDateFunc={sortByDateFunc} sortArrFunc={sortArrFunc} />
        <ItemComp isImportantFunc={isImportantFunc} isDoneFunc={isDoneFunc} itemsArr={arr} changeItemText={changeItemText} deleteItem={deleteItem} />
      </div>
    </div>
  );
}

export default App;
