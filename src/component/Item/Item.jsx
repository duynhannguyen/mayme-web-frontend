import React from "react";

const Item = ({
  _id,
  tenHang,
  nhomHang,
  loai,
  giaBan,
  hinhAnh,
  onAddToCart,
}) => {
  return (
    <div
      id={_id}
      className="p-4 w-auto rounded-lg shadow-md bg-gray-900 text-white"
    >
      <img
        src={hinhAnh}
        alt={tenHang}
        className=" object-cover mb-4 rounded-lg w-48 h-52 "
      />
      <h3 className="text-xl font-semibold mb-0 line-clamp-2 h-[4.5rem]">
        {tenHang}
      </h3>
      <p className="text-gray-600 mb-2 ">{nhomHang}</p>
      <div className="flex justify-between">
        <span className="text-yellow-500 font-bold">{giaBan}</span>
        <button
          type="submit"
          className=" bg-gray-900 border border-solid border-white"
          onClick={() => onAddToCart(_id)}
        >
          +
        </button>
      </div>
    </div>
  );
};

export default Item;
