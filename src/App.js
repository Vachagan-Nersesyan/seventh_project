
import './App.css';

import HeaderComp from './components/HeaderComp'
import ArrItemComp from './components/AddItemComp'
import FilterComp from './components/FilterComp'
import ItemComp from './components/ItemComp'

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


  return (
    <div className="App">
      <div className='App_container'>
        <HeaderComp />
        <ArrItemComp />
        <FilterComp />
        <ItemComp itemsArr={itemsArr} />
      </div>
    </div>
  );
}

export default App;
