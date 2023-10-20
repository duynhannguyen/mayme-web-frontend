import React, { useState } from 'react';
import { AiOutlineUser } from "react-icons/ai";
import axios from 'axios'
import AddProductForm from '../../component/AddProductForm/AddProductForm.jsx';
import ProductAPI from '../../services/productAPI.js';
const MainPage = () => {
  const [showAddProductForm, setShowAddProductForm] = useState(false);

  const handleButtonClick = () => {
    setShowAddProductForm(true);
  };

  const handleSubmit = async (values) => {
    console.log('values ne', values)
    try {
      const response = await ProductAPI.create(values)
      setShowAddProductForm(false)
    } catch (error) {
      console.error(error);
    }
  }

const onHandleCloseForm = () => {
  setShowAddProductForm(false)
}

  return (

    <div className="flex flex-col items-center  min-h-screen">
      <div className="flex justify-between items-center mb-4 container mx-auto px-4 py-2">
        <h1 className="text-4xl font-bold text-yellow-700">Mayme</h1>
        <div className="flex items-center">
          <div className="text-right mr-2">+84 9325374829</div>
          <AiOutlineUser className="text-" />
        </div>
      </div>
      <div className="container mx-auto px-8 py-4">
        <div className="flex justify-between items-center mb-4">
          <h1 className="text-2xl font-bold">Hàng Hoá</h1>
          <button
            onClick={handleButtonClick}
            className="bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-4 rounded"
          >
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

      {showAddProductForm && (
        <div
          className=" fixed top-,0 left-0 right-0 bottom-0 flex items-center justify-center  bg-opacity-40 bg-gray-400	"
          style={{ zIndex: 9999 }}
        >
          <AddProductForm onSubmitHandler={handleSubmit} onHandleCloseForm={onHandleCloseForm} />



        </div>

      )}
    </div>
  );
};

export default MainPage;