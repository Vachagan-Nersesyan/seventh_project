
import './App.css';

import HeaderComp from './components/HeaderComp'
import ArrItemComp from './components/AddItemComp'
import FilterComp from './components/FilterComp'
import ItemComp from './components/ItemComp'

import { handleSearch, deleteSearch, sortByItem, sortByDate } from './utils/helperScp'
import { useState } from 'react';

function App() {

  const itemsArr = [
    {
      id: 0,
      text: 'Buy groceries for next week',
      date: '28 June, 2022',
      isDone: false,
      isImportant: false,
      dateNum : 2022

    },
    {
      id: 1,
      text: 'Renew car insurance',
      date: '18 October, 2021',
      isDone: false,
      isImportant: true,
      dateNum : 2021

    },
    {
      id: 2,
      text: 'Sign up for online course',
      date: '3 November, 2023',
      isDone: false,
      isImportant: false,
      dateNum : 2023


    },
  ]

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

    setArr(sortByItem(itemsArr, str))
  }

  const sortByDateFunc = (tp) => {
    setArr(sortByDate(itemsArr,tp))
  }


  return (
    <div className="App">
      <div className='App_container'>
        <HeaderComp />
        <ArrItemComp />
        <FilterComp sortByDateFunc={sortByDateFunc} sortArrFunc={sortArrFunc} />
        <ItemComp isImportantFunc={isImportantFunc} isDoneFunc={isDoneFunc} itemsArr={arr} changeItemText={changeItemText} deleteItem={deleteItem} />
      </div>
    </div>
  );
}

export default App;
