import React, { useContext } from 'react'
import { CharactersContext } from '../context/charactersContext'

const InputSearch= () => {
  const {search,handleSearch} = useContext(CharactersContext)
  return (
    <input className='input__search' value={search} onChange={(e) => handleSearch(e)} placeholder='Search Character' />
  )
}

export default InputSearch