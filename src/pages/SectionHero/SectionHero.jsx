import React from 'react'

const SectionHero = () => {
  return (
    <div>
       <section className=" dark:text-gray-100 " >
    <div className="container flex flex-col justify-center p-6 mx-auto sm:py-12 lg:py-24 lg:flex-row lg:justify-between">
    <div className="flex items-center justify-center p-6 mt-8 lg:mt-0 h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128">
        <img src="https://i.pinimg.com/originals/e3/70/ba/e370bad22b7470d7fabb620d1df03fcb.jpg" alt="" className=" rounded-full object-contain h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128" />
      </div>
      <div className="flex flex-col justify-center p-6 text-center rounded-sm lg:max-w-md xl:max-w-lg lg:text-left">
        <h1 className="text-5xl font-bold leadi sm:text-6xl">
          <span>phần mềm</span><br/>
          <span className="dark:text-violet-400">quản lý bán hàng</span><br/>
          <span>phổ biến nhất</span>
        </h1>
        <br/>
        <div className="flex flex-col space-y-4 sm:items-center sm:justify-center sm:flex-row sm:space-y-0 sm:space-x-4 lg:justify-start">
          <a rel="noopener noreferrer" href="#" className="px-8 py-3 text-lg font-semibold  dark:bg-violet-400 dark:text-gray-900 rounded-full">Dùng thử miễn phí</a>
          <a rel="noopener noreferrer" href="#" className="px-8 py-3 text-lg font-semibold border  dark:border-gray-100 rounded-full">Khám phá</a>
        </div> 
      </div>
    </div>
    
  </section>
    </div>
  )
}

export default SectionHero
