import React, { useState } from "react";
import { UserOutlined, LoginOutlined } from "@ant-design/icons";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../redux/Auth/authSlice.js";
import AddProductForm from "../../component/AddProductForm/AddProductForm.jsx";
import ProductAPI from "../../services/productAPI.js";

import MenuItem from "../MenuItem/MenuItem.jsx";
const MainPage = () => {
  const [showAddProductForm, setShowAddProductForm] = useState(false);
  const [isMenuItemVisible, setIsMenuItemVisible] = useState(false);
  const [selectedFile, setSelectedFile] = useState(null);
  const [error, setError] = useState(null);
  const [uploading, setUploading] = useState(false);
  const [previewImage, setPreviewImage] = useState(null);
  const [getMenuItemList, setGetMenuItemList] = useState([]);
  // const fetchMenuItem = async () => {
  //   try {
  //   } catch (error) {}
  // };
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
    <div className="flex flex-col items-center  min-h-screen">
      <div className="flex justify-between items-center mb-4 container mx-auto px-4 py-2">
        <h1 className="text-4xl font-bold text-yellow-700">Mayme</h1>
        <div className=" border-2 border-yellow-700 w-auto p-4 rounded-2xl flex items-center hover:bg-amber-700 transition-all duration-300 relative group cursor-default justify-center text-lg ">
          <div className="text-right mr-2">{currentUser.tenNhaHang}</div>
          <UserOutlined />
          <ul className="p-2 w-[150px] h-auto rounded-md opacity-0  group-hover:opacity-100 transition-all duration-300  absolute -bottom-[90%] z-10 text-black text-[13px] bg-white">
            <li
              onClick={onHandleLogout}
              className="flex justify-center gap-2 items-center cursor-pointer "
            >
              <span> Đăng xuất </span>
              <LoginOutlined />
            </li>
          </ul>
        </div>
      </div>

      {/* <div class="relative group">
        <div class="w-32 h-32 bg-gray-200 hover:bg-gray-300 transition-all duration-300"></div>
        <ul class="opacity-0 group-hover:opacity-100 absolute top-full left-0 bg-white border border-gray-300 py-2 px-4 shadow z-10 transition-opacity duration-300">
          <li>Item 1</li>
          <li>Item 2</li>
          <li>Item 3</li>
        </ul>
      </div> */}
      {/* <div class="relative group">
        <div class="w-32 h-32 bg-gray-200 hover:bg-gray-300 transition-all duration-300"></div>
        <ul class="opacity-100 group-hover:opacity-0 absolute top-full left-0 bg-white border border-gray-300 py-2 px-4 shadow z-10 transition-opacity duration-1000">
          <li>Item 1</li>
          <li>Item 2</li>
          <li>Item 3</li>
        </ul>
      </div> */}

      <div className="container mx-auto px-8 py-4">
        <div className="flex justify-between items-center mb-4">
          <h1 className="text-2xl font-bold">Hàng Hoá</h1>
          <button
            className="bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-4 rounded"
            onClick={handleButtonClick}
          >
            + Thêm Mới
          </button>
        </div>
        <table className="w-full border-collapse border border-green-500">
          <thead>
            <tr className="bg-green-100">
              <th className="p-2 border border-green-500">Mã Hàng Hoá</th>
              <th className="p-2 border border-green-500">Tên Hàng</th>
              <th className="p-2 border border-green-500">Nhóm Hàng</th>
              <th className="p-2 border border-green-500">Loại</th>
              <th className="p-2 border border-green-500">Giá Bán</th>
              <th className="p-2 border border-green-500">Giá Vốn</th>
            </tr>
          </thead>
          <tbody>
            <tr
              className={`cursor-pointer ${isMenuItemVisible ? "mb-4" : ""}`}
              onClick={handleClick}
            >
              <td className="p-2 border border-green-500 text-center align-middle">
                SP00003
              </td>
              <td className="p-2 border border-green-500 text-center align-middle">
                Cafe
              </td>
              <td className="p-2 border border-green-500 text-center align-middle">
                Đồ ăn
              </td>
              <td className="p-2 border border-green-500 text-center align-middle">
                0
              </td>
              <td className="p-2 border border-green-500 text-center align-middle">
                0
              </td>
              <td className="p-2 border border-green-500 text-center align-middle">
                0
              </td>
            </tr>
            {isMenuItemVisible && (
              <tr>
                <td colSpan="6">
                  <MenuItem />
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

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
};

export default MainPage;
