
import React from 'react';



    const Item = ({ imageUrl, title, description, price, onAddToCart }) => {
      const handleAddToCart = () => {
        onAddToCart({ imageUrl, title, description, price });
      };
  return (
    <div className="p-4 rounded-lg shadow-md bg-gray-900 text-white">
      <img
        src={imageUrl}
        alt={title}
        className=" object-cover mb-4 rounded-lg w-48 h-52 "
      />
      <h3 className="text-xl font-semibold mb-0 line-clamp-2 h-[4.5rem]">{title}</h3>
      <p className="text-gray-600 mb-2 ">{description}</p>
      <div className="flex justify-between">
      <span className="text-yellow-500 font-bold">{price}</span>
      <button type="submit"  className =" bg-gray-900 border border-solid border-white" onClick={handleAddToCart}>+</button>
      </div>
    </div>
  );
};

export default Item;