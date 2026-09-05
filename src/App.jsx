import './App.css'
import games from "./games.json"
import Title from './components/Title/Title'
import GameList from './components/GamesList/GamesList'

function App() {
  return (
    <>
      <Title></Title>
      <GameList games={games}></GameList>
    </>
  )
}

export default App
