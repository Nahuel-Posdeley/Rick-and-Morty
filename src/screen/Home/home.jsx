import { useContext } from "react"
import { Outlet } from "react-router-dom"
import { CharactersContext } from "../../components/context/charactersContext"
import Header from "../../components/Header"

const Home = () => {
  const {theme} = useContext(CharactersContext)

  return (
    <div className={theme}>
      <Header />
      <Outlet />
    </div>
  )
}

export default Home