import React, { useState } from 'react';
import { UserOutlined, LoginOutlined } from '@ant-design/icons';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../../redux/Auth/authSlice';
import { useNavigate } from 'react-router-dom';
import { AiOutlineUser } from 'react-icons/ai';
import axios from 'axios';
import AddProductForm from '../../component/AddProductForm/AddProductForm.jsx';
import ProductAPI from '../../services/productAPI.js';

const MainPage = () => {
  const [showAddProductForm, setShowAddProductForm] = useState(false);
  const [selectedFile, setSelectedFile] = useState(null);
  const [error, setError] = useState(null);
  const [uploading, setUploading] = useState(false);
  const [previewImage, setPreviewImage] = useState(null);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const currentUser = useSelector((state) => state.auth.currentUser);

  const onHandleLogout = () => {
    dispatch(logout());
    navigate('/');
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setPreviewImage(URL.createObjectURL(file));
    setSelectedFile(file);
  };

  const handleSubmit = async (values) => {
    try {
      setUploading(true);
      setError(null);

      const formData = new FormData();
      formData.append('image', selectedFile);
      formData.append('body', JSON.stringify(values));

      const response = await ProductAPI.create(formData);
      setShowAddProductForm(false);
      setPreviewImage(null);
    } catch (error) {
      console.error(error);
    } finally {
      setUploading(false);
    }
  };

  const onHandleCloseForm = () => {
    setShowAddProductForm(false);
    setPreviewImage(null);
  };

  const cancelPreviewImage = () => {
    setPreviewImage(null);
  };

  const handleButtonClick = () => {
    setShowAddProductForm(true);
  };

  return (
    <div className="flex flex-col items-center min-h-screen bg-gray-100">
      <header className="container mx-auto px-4 py-2 bg-white shadow-md">
        <div className="flex justify-between items-center">
          <h1 className="text-4xl font-bold text-yellow-700">Mayme</h1>
          <div className="flex items-center">
            <div className="mr-2 text-gray-700">+84 9325374829</div>
            <AiOutlineUser className="text-gray-700" />
          </div>
        </div>
      </header>

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

        <div className="grid grid-cols-6 gap-4 bg-white border border-gray-200 shadow-md rounded-lg">
<div className="col-span-1 p-2 mb-2 border-b border-gray-200 font-semibold text-gray-700">Mã Hàng Hoá</div>
          <div className="col-span-1 p-2 mb-2 border-b border-gray-200 font-semibold text-gray-700">Tên Hàng</div>
          <div className="col-span-1 p-2 mb-2 border-b border-gray-200 font-semibold text-gray-700">Nhóm Hàng</div>
          <div className="col-span-1 p-2 mb-2 border-b border-gray-200 font-semibold text-gray-700">Loại</div>
          <div className="col-span-1 p-2 mb-2 border-b border-gray-200 font-semibold text-gray-700">Giá Bán</div>
          <div className="col-span-1 p-2 mb-2 border-b border-gray-200 font-semibold text-gray-700">Giá Vốn</div>
        </div>
      </div>

      {showAddProductForm && (
        <div className="fixed top-0 left-0 right-0 bottom-0 flex items-center justify-center bg-gray-800 bg-opacity-50">
          <AddProductForm
            showAddProductForm={showAddProductForm}
            onSubmitHandler={handleSubmit}
            onHandleCloseForm={onHandleCloseForm}
            onChangeFile={handleFileChange}
           className="bg-white rounded-lg shadow-md p-4"
          />
        </div>
      )}

      {previewImage && (
        
          <div className="relative">
            <button
              onClick={cancelPreviewImage}
              className="absolute top-0 right-0   text-gray-700 hover:bg-gray-200"
            >
              X
            </button>
            <img src={previewImage} alt="Preview" className="  w-full h-auto max-w-full max-h-64 object-contain " />
          </div>
       
      )}
    </div>
  );
};

export default MainPage;
