import React, { useContext } from 'react'
import { CharactersContext } from '../context/charactersContext';
import './style.css';
const Pagination = () => {
    const { totalCharacters, totalPages, actualPage ,prevPage, nextPage,goToPages} = useContext(CharactersContext)
  return (
    <div className='container__paginator'>
     <div>
        <b>Total:</b> {totalCharacters}
     </div> 
     <div>
        <b>Page:</b> {actualPage} - {totalPages}
     </div> 
     <div>
        <b>Go to page:</b>
        <select
         name='goTo'
         className='container__select'
         value={actualPage}
         data-type='goTo'
         onChange={(e)=> goToPages('',e)}
         >
            {
               Array.from(Array(totalPages).keys()).map(page => {
                  return(
                       <option
                           className='option'
                           key={page + 1}
                           value={page + 1}
                           >{page + 1}
                        </option>
                  )
               })
            }
        </select>
     </div> 
     <div>
      {prevPage && <button data-type='prev' onClick={(e) => goToPages(prevPage,e)} className='btn'>Prev</button>}
      {nextPage && <button data-type='next' onClick={(e) => goToPages(nextPage,e)} className='btn'>Next</button>}
     </div>
    </div>
  )
}

export default Pagination
