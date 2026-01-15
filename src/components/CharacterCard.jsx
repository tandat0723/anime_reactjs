const CharacterCard = ({ character }) => {
    return (
        <div className="">
            <img src={character.image} alt={character.name} />
            <div>
                <h3>{character.name}</h3>
                <p>Race: {character.race || 'Unknown'}</p>
                <p>KI: {character.ki || '?'}</p>
            </div>
        </div>
    )
}

export default CharacterCard