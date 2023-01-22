import axios from "axios";
import { createContext, useEffect, useState } from "react";
export const CharactersContext = createContext();

export const CharactersContextProvider = ({children}) => {
    const [characters, setCharacters] = useState([]);
    const [data, setData] = useState([]);
    const [totalCharacters, setTotalCharacters] = useState(0);
    const [totalPages, setTotalPages] = useState(0);
    const [actualPage, setActualPage] = useState(1);
    const [prevPage, setPrevPage] = useState(null);
    const [nextPage, setNextPage] = useState(null);
    const [checked,setChecked] = useState(false);
    const [theme,setTheme] = useState('light');
    const [search,setSearch] = useState('');


    
    useEffect(()=> {
        axios.get('https://rickandmortyapi.com/api/character')
        .then(response => {
            const { info , results} = response.data;
            setCharacters(results);
            setData(results)
            setTotalCharacters(info.count)
            setTotalPages(info.pages)
            setPrevPage(info.prev)
            setNextPage(info.next)
        })

        // localStorage theme
        setTheme(localTheme())
    },[])


    // filter pages
    const goToPages = (page,e) => {
        const type = e.target.dataset.type
        switch(type){
            case 'prev': 
            setActualPage(actualPage - 1);
            break;
            case 'next': 
            setActualPage(actualPage + 1);
            break;
            case 'goTo':
                const number = Number(e.target.value);
                page = `https://rickandmortyapi.com/api/character?page=${number}`;
                setActualPage(number);
                break;
                default:
                return;
        }
        axios.get(page)
        .then(response => {
            const { info, results} = response.data;
            setCharacters(results);
            setPrevPage(info.prev)
            setNextPage(info.next)
        })
    }

    // mode drack
    const handleSwitch = (nextChecked) => {
        setChecked(nextChecked)
        setTheme(state => state === 'light' ? 'dark' : 'light')
    }
    useEffect(()=>{
        saveThemeLocal(theme)

    },[theme])
    const saveThemeLocal = (color) =>{
        localStorage.setItem('mode',color)
    }
    const localTheme = () => {
        return localStorage.getItem('mode')

    }
      // filter seacher

      const handleSearch = (e)=>{
        setSearch(e.target.value)
        filterSearch(e.target.value)
  }

  const filterSearch = (name) => {

    if(name.length > 0){
        const dataFilterSearch = data.filter(item => item.name.toLowerCase().includes(name.toLocaleLowerCase()))
    setCharacters(dataFilterSearch)

    }else{
        setCharacters(characters)
    }
    
  }
 

    return(
        <CharactersContext.Provider 
            value={{
                characters,
                totalCharacters,
                totalPages,
                actualPage,
                prevPage,
                nextPage,
                goToPages,
                checked,
                handleSwitch,
                theme,
                setTheme,
                handleSearch,
                search,
             }}
            >
            {children}
        </CharactersContext.Provider>
    )
}