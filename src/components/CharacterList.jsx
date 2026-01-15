import React, { useState } from 'react'

const CharacterList = () => {
    const [characters, setCharacters] = useState([])

    return (
        <div>
            {characters.map((character) => { })}
        </div>
    )
}

export default CharacterList