import { CharactersContextProvider } from './components/context/charactersContext';

import Home from './screen/Home/home';

function App() {
  return (
    <CharactersContextProvider>
      <Home />
    </CharactersContextProvider>
  );
}

export default App;
