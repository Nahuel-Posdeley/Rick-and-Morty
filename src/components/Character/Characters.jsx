import React from 'react';
import { useContext } from 'react';
import './style.css';
import { CharactersContext } from '../context/charactersContext';
import Pagination from '../Pagination/Pagination';
import Card from '../Card/Card';
import ReactSwitch from 'react-switch';
import Loading from '../Loading/Loading';
const Characters = () => {
    const {characters,handleSwitch,checked,theme} = useContext(CharactersContext)
    
    
    return (
    <div className={theme}>
      <div className="container__title">
      <h1>Rick and Morty</h1>
      <div className="container__toggle">
      <h1>{theme}</h1>
      <label htmlFor="toggle">First name:</label>      <ReactSwitch
      onChange={handleSwitch}
      onColor='#86d3ff'
      checked={checked}
      id='toggle'
      name='toggle'
      onHandleColor='#269336'
      handleDiameter={30}
      boxShadow="0px 1px 5px rgba(0, 0, 0, 0.6)"
      activeBoxShadow="0px 0px 1px 10px rgba(0, 0, 0, 0.2)"
      uncheckedIcon={false}
      checkedIcon={false}
      />
      </div>      
      </div>
      
      <Pagination />
      <div className='container__characters'>
      {
         characters  ? characters.map(item => {
          return(
              <Card
                key={item.id}
                src={item.image}
                name={item.name}
                status={item.status}
                species={item.species}
              />
            )
          }) : <Loading />
        }
      </div>
    </div>
  )
}

export default Characters
