import { useState } from 'react'

export default function Player({ initialName, symbol }) {
    const [playerName, setPlayerName] = useState(initialName)
    const [isEditing, setIsEditing] = useState(false)

    function handleEditClick(e) {
        setIsEditing((editing) => !editing) //the best practise solution to add funtcion to set opposite value
        // setIsEditing(!isEditing)  is working but not good practise
    }

    function handlechange(e) {
        setPlayerName(e.target.value)
    }

    let editablePlayerName = <span className="player-name">{playerName}</span>

    if (isEditing) {
        editablePlayerName = <input type='text' value={playerName} onChange={handlechange} required></input>
    }
    return (
        <li>
            <span className="player">
                {editablePlayerName}
                <span className="player-symbol">{symbol}</span>
            </span>
            <button onClick={handleEditClick}>{isEditing ? 'Save' : 'Edit'}</button>
        </li>
    )
}