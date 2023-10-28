import React, { useState, useEffect } from "react";
import { UserOutlined, LoginOutlined } from "@ant-design/icons";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../redux/Auth/authSlice.js";
import AddProductForm from "../../component/AddProductForm/AddProductForm.jsx";
import ProductAPI from "../../services/productAPI.js";

import MenuItem from "../MenuItem/MenuItem.jsx";
import MenuRow from "../../component/MenuRow/MenuRow.jsx";
import MenuListItem from "../../component/MenuListItem/MenuListItem.jsx";
const MainPage = () => {
  const [showAddProductForm, setShowAddProductForm] = useState(false);
  const [isMenuItemVisible, setIsMenuItemVisible] = useState(false);
  const [reload, setReload] = useState(null);
  const [selectedFile, setSelectedFile] = useState(null);
  const [error, setError] = useState(null);
  const [uploading, setUploading] = useState(false);
  const [previewImage, setPreviewImage] = useState(null);
  const [getMenuListItem, setGetMenuListItem] = useState([]);
  useEffect(() => {
    fetchMenuItem();
  }, [reload]);
  const fetchMenuItem = async () => {
    try {
      const fetchItem = await ProductAPI.get();
      console.log(fetchItem.data);
      setGetMenuListItem(fetchItem.data);
    } catch (error) {
      console.error(error);
    }
  };
  const dispatch = useDispatch();
  const currentUser = useSelector((state) => state.auth.currentUser);
  const onHandleLogout = () => {
    dispatch(logout());
    navigate("/");
  };
  const handleClick = () => {
    setIsMenuItemVisible(!isMenuItemVisible);
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
      formData.append("image", selectedFile);
      formData.append("body", JSON.stringify(values));

      const response = await ProductAPI.create(formData);
      setShowAddProductForm(false);
      setPreviewImage(null);
      setReload(Math.random());
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
    <div className="min-h-screen flex flex-col items-center  bg-gray-100">
      <header className="container mx-auto px-4 py-2 flex justify-between items-center mb-4  bg-white shadow-md">
        <h1 className="text-4xl font-bold text-yellow-700">Mayme</h1>
        <div className="flex items-center">
          <div className="border-2 border-yellow-700 rounded-full p-4 flex items-center hover:bg-amber-700 transition-all duration-300 relative group cursor-default justify-center text-lg">
            <div className="mr-2">{currentUser.tenNhaHang}</div>
            <UserOutlined />
            <ul className="p-2 w-[150px] rounded-md opacity-0 group-hover:opacity-100 transition-all duration-300 absolute -bottom-[90%] z-10 text-black text-[13px] bg-white">
              <li
                onClick={onHandleLogout}
                className="flex justify-center items-center gap-2 cursor-pointer"
              >
                <span>Đăng xuất</span>
                <LoginOutlined />
              </li>
            </ul>
          </div>
        </div>
      </header>
  
      <main className="container mx-auto px-8 py-4">
        <div className="flex justify-between items-center mb-4">
          <h1 className="text-2xl font-bold">Hàng Hoá</h1>
          <button
            className="bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-4 rounded"
            onClick={handleButtonClick}
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
  
        <MenuListItem
          getMenuListItem={getMenuListItem}
          isMenuItemVisible={isMenuItemVisible}
          handleClick={handleClick}
        />
      </main>
  
      {showAddProductForm && (
        <div className="fixed top-0 left-0 right-0 bottom-0 flex items-center justify-center bg-gray-800 bg-opacity-50">
          <AddProductForm
            showAddProductForm={showAddProductForm}
            onSubmitHandler={handleSubmit}
            onHandleCloseForm={onHandleCloseForm}
            onChangeFile={handleFileChange}
            previewImage={previewImage}
            closeImage={cancelPreviewImage}
          />
        </div>
      )}
    </div>
  );
}

export default MainPage;