import { useEffect, useRef, useState } from 'react'
import logo from '../assets/logo.png'

const Header = () => {
  const [isVisible, setIsVisible] = useState(true)
  const lastScrollY = useRef(0)

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY

      if (currentScrollY < 0) {
        setIsVisible(true)
        lastScrollY.current = 0
        return
      }

      if (currentScrollY > lastScrollY.current) {
        setIsVisible(false)
      } else {
        setIsVisible(true)
      }

      lastScrollY.current = currentScrollY
    }

    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <header className={`
      flex h-15 px-6 py-3 bg-white text-gray-900 shadow-sm font-bold items-center justify-between
      fixed top-0 left-0 right-0 z-50 transition-transform duration-300 ease-in-out 
      ${isVisible ? 'translate-y-0' : '-translate-y-full'}`}
    >
      <a href='/' className="text-3xl text-yellow-400 shrink-0">
        <img
          src={logo}
          alt='logo'
          className='h-16 p-1 w-auto object-contain cursor-pointer'
        />
      </a>

      <div className='flex-1 flex justify-center px-6'>
        <div className='relative w-full max-w-md'>
          <div className='absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none'>
            <svg className='h-5 w-5 text-gray-400' fill='none' stroke='currentColor' viewBox='0 0 24 24' xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
            </svg>
          </div>
          <input
            className='block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-full leading-5 bg-gray-50 
            placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-yellow-400 
            transition duration-150 ease-in-out sm:text-sm font-normal'
            type='text'
            placeholder='Search character...'
          />
        </div>
      </div>

      <nav className="flex gap-6 cursor-pointer shrink-0">
        <a href='/' className="hover:text-yellow-400 transition-colors">Home</a>
        <a href='#' className="hover:text-yellow-400 transition-colors">Characters</a>
        <a href='#' className="hover:text-yellow-400 transition-colors">About</a>
      </nav>
    </header>
  )
}

export default Header
