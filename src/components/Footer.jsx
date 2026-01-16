import { useEffect, useState } from 'react'
import { get } from '../services/api'

const Footer = () => {
    const [stats, setStats] = useState({
        characters: 0,
        planets: 0
    })
    const [checkOnline, setCheckOnline] = useState(true)

    useEffect(() => {
        Promise.all([
            get('/characters'),
            get('/planets'),
        ])
            .then(([characters, planets]) => {
                setStats({
                    characters: characters.meta.totalItems,
                    planets: planets.meta.totalItems,
                })
                setCheckOnline(true)
            })
            .catch(() => {
                setCheckOnline(false)
            })
    }, [])

    return (
        <footer className='text-gray-300 bg-gray-800 mt-20'>
            <div className='max-w-7xl mx-auto px-6 py-6'>
                <div className='flex justify-center gap-8 text-sm font-semibold tracking-wide '>
                    <span>
                        CHARACTERS:{" "}
                        <span className='text-white'>{stats.characters}</span>
                    </span>
                    <span>
                        PLANETS:{" "}
                        <span className='text-white'>{stats.planets}</span>
                    </span>
                </div>

                <div className='my-4 h-px w-100 mx-auto bg-gray-500' />

                <div className='flex justify-center items-center gap-2 text-sm'>
                    <span>SERVER STATUS:</span>
                    <span className={`w-3 h-3 rounded-full animate-pulse ${checkOnline ? 'bg-green-500' : 'bg-red-500'}`}
                    />
                </div>

                <div className='text-center mt-3'>
                    {'< >'} by <a href='#' className='font-bold hover:text-yellow-400'>Jun</a> 2026
                </div>
            </div>
        </footer>
    )
}

export default Footer