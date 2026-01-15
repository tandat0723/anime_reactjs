import { useEffect, useState } from 'react'
import CharacterCard from './CharacterCard'
import { get } from '../services/api'

const CharacterList = () => {
    const [characters, setCharacters] = useState([])
    const [error, setError] = useState(null)
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        get('/characters')
            .then((data) => {
                // console.log(data)
                setCharacters(data.items)
                setLoading(false)
            })
            .catch(() => {
                setError('Load character is failed')
                setLoading(true)
            })
    }, [])

    if (loading)
        return <p className='text-white'>Loading...</p>
    if (error)
        return <p className='text-red-500'>{error}</p>

    return (
        <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6'>
            {characters.map((char) => (
                <CharacterCard key={char.id} character={char} />
            ))}
        </div>
    )
}

export default CharacterList