import React from 'react';
import { useContext } from 'react';
import './style.css';
import { CharactersContext } from '../context/charactersContext';
import Pagination from '../Pagination/Pagination';
import Card from '../Card/Card';
import Loading from '../Loading/Loading';

const Characters = () => {
    const {characters} = useContext(CharactersContext)
    
    return (<>
      <Pagination />
      <div className='container__characters'>
      {
         characters.length > 0  ? characters.map(item => {
          return(
              <Card
                key={item.id}
                id={item.id}
                src={item.image}
                name={item.name}
                status={item.status}
                species={item.species}
              />
            )
          }): characters.length === 0 ? 'No encontrado' : <Loading />
        }
      </div>
      </>
  )
}

export default Characters
