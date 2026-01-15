const Header = () => {
  return (
    <header className="h-16 px-6 bg-slate-900 text-white flex items-center justify-between">
      <div className="text-2xl font-bold text-yellow-400 hover:animate-pulse">
        <a href="/">Dragon Ball</a>
      </div>

      <nav className="flex gap-6 cursor-pointer">
        <a className="text-gray-300 hover:text-yellow-400">Home</a>
        <a className="text-gray-300 hover:text-yellow-400">Characters</a>
        <a className="text-gray-300 hover:text-yellow-400">About</a>
      </nav>
    </header>
  )
}

export default Header
