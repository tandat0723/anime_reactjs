import logo from '../assets/logo.png'

const Header = () => {
  return (
    <header className="flex h-16 px-6 py-3 bg-white text-gray-900 font-bold items-center justify-between">
      <a href='/' className="text-3xl text-yellow-400">
        <img
          src={logo}
          alt='logo'
          className='h-16 p-1 w-auto object-contain cursor-pointer'
        />
      </a>

      <nav className="flex gap-6 cursor-pointer">
        <a className="hover:text-yellow-400">Home</a>
        <a className="hover:text-yellow-400">Characters</a>
        <a className="hover:text-yellow-400">About</a>
      </nav>
    </header>
  )
}

export default Header
