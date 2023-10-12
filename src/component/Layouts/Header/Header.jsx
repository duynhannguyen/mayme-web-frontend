import React from 'react'

const Header = () => {
  return (
    <div>
      <div className="bg-white">
        <header className="absolute inset-x-0 top-0 z-50">
          <nav className="flex items-center justify-between p-6 lg:px-8" aria-label="Global">
            <div className="flex lg:flex-1">
              <a href="#" className="-m-1.5 p-1.5">
                <span className="sr-only">Your Company</span>
                <h1 class="text-4xl font-bold text-blue-500" >MAYME</h1>
              </a>
            </div>
            <div className="hidden lg:flex lg:flex-1 lg:justify-end">
              <a href="#" class="bg-white hover:bg-blue-700 text-blue-500 font-bold py-2 px-4 rounded-full">đăng ký</a>
              <a href="#" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full mr-4">đăng nhập</a>
            </div>
          </nav>


        </header>
      </div>
    </div>
  )
}

export default Header
