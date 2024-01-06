import { useState } from 'react'
import Player from "./components/Player"

function App() {
  const [userName, setUserName] = useState('')

  return (
    <main>
      <div id="game-container">
        <ol id="players">
          <Player name="Player 1" symbol="X" />
          <Player name="Player 2" symbol="O" />
        </ol>
        Game board
      </div>
      LOG
    </main>
  )
}

export default App
