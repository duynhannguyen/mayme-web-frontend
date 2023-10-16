import React from "react";
import { AiOutlineUser } from "react-icons/ai";

const MainPage = () => {
  return (
    <div>
      <div className="flex justify-between items-center mb-4 container mx-auto px-4 py-2">
        <h1 className="text-4xl font-bold text-yellow-700">Mayme</h1>{" "}
        <div className="flex items-center">
          {" "}
          <div className="text-right mr-2">+84 9325374829</div>{" "}
          <AiOutlineUser className="text-3xl" />{" "}
        </div>
      </div>
      <div className="container mx-auto px-8 py-4">
        <div className="flex justify-between items-center mb-4">
          <h1 className="text-2xl font-bold">Hàng Hoá</h1>
          <button className="bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-4 rounded">
            + Thêm Mới
          </button>
        </div>
        <div className="grid grid-cols-6 gap-4 bg-blue-200">
          <div className="col-span-1 p-2 mb-2 border-transparent">
            Mã Hàng Hoá
          </div>
          <div className="col-span-1 p-2 mb-2 border-transparent">Tên Hàng</div>
          <div className="col-span-1 p-2 mb-2 border-transparent">
            Nhóm Hàng
          </div>
          <div className="col-span-1 p-2 mb-2 border-transparent">Loại</div>
          <div className="col-span-1 p-2 mb-2 border-transparent">Giá Bán</div>
          <div className="col-span-1 p-2 mb-2 border-transparent">Giá Vốn</div>
        </div>
      </div>
    </div>
  );
};

export default MainPage;
