
import React from 'react';

const Item = (props) => {
  const { imageUrl, title, description, price } = props;

  return (
    <div className="p-4 rounded-lg shadow-md bg-gray-900 text-white">
      <img
        src={imageUrl}
        alt={title}
        className=" object-cover mb-4 rounded-lg w-48 h-52 "
      />
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-600 mb-2">{description}</p>
      <span className="text-yellow-500 font-bold">{price}</span>
    </div>
  );
};

export default Item;