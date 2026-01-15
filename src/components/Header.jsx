const Header = () => {
  return (
    <header className="flex h-16 px-6 bg-white text-slate-900 font-bold items-center justify-between">
      <div className="text-3xl text-yellow-400 hover:animate-pulse">
        <a href="/">Dragon Ball</a>
      </div>

      <nav className="flex gap-6 cursor-pointer">
        <a className="hover:text-yellow-400">Home</a>
        <a className="hover:text-yellow-400">Characters</a>
        <a className="hover:text-yellow-400">About</a>
      </nav>
    </header>
  )
}

export default Header
