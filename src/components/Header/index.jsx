import React, { useContext } from 'react'
import ReactSwitch from 'react-switch';
import { CharactersContext } from '../context/charactersContext';

const Header = () => {
    const {handleSwitch,checked,theme} = useContext(CharactersContext)

  return (
    <div className="container__title">
      <h1>Rick and Morty</h1>
      <div className="container__toggle">
      <label htmlFor="toggle">{theme}</label>
        <ReactSwitch
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
  )
}

export default Header