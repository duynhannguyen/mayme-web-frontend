import React from 'react'

const Item = () => {
  return (
    
      <div className=" p-4 rounded-lg shadow-md bg-gray-900 text-white">
              <img
                src="https://t2.gstatic.com/licensed-image?q=tbn:ANd9GcRqPnxhzG50sOFqBgyKvZtmOHiB3mwkR2YtId5jZG5nApAoiSDkXMK4Rxxqpkfg0ZW9"
                alt="Cappuccino"
                className="w-full  object-cover mb-4 rounded-lg"
              />
              <h3 className="text-xl font-semibold mb-2">Cappuccino</h3>
              <p className="text-gray-600 mb-2">Mô tả về cappuccino.</p>
              <span className="text-yellow-500 font-bold">$3.99</span>
            </div>
    
  )
}

export default Item
