import { BrowserRouter, Route, Routes } from "react-router-dom";
import { CharactersContextProvider } from "./components/context/charactersContext";
import Characters from "./components/Character/Characters";
import Details from "./screen/Details";

import Home from "./screen/Home/home";

function App() {
  return (
    <CharactersContextProvider>
      <BrowserRouter>
        <Routes>
            <Route path='/' element={<Home />}>
            <Route index element={<Characters />} />
            <Route path="/character/:id" element={<Details />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </CharactersContextProvider>
  );
}

export default App;
