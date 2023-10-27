import React, { useState, useEffect } from "react";
import { UserOutlined, LoginOutlined, FileOutlined } from "@ant-design/icons";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../redux/Auth/authSlice.js";
import AddProductForm from "../../component/AddProductForm/AddProductForm.jsx";
import ProductAPI from "../../services/productAPI.js";
import MenuListItem from "../../component/MenuListItem/MenuListItem.jsx";
import Loading from "../../component/Loading/Loading.jsx";
import { useNavigate } from "react-router-dom";
const MainPage = () => {
  const [showAddProductForm, setShowAddProductForm] = useState(false);
  const [isMenuItemVisible, setIsMenuItemVisible] = useState(false);
  const [reload, setReload] = useState(null);
  const [selectedFile, setSelectedFile] = useState(null);
  const [error, setError] = useState(null);
  const [uploading, setUploading] = useState(false);
  const [previewImage, setPreviewImage] = useState(null);
  const [getMenuListItem, setGetMenuListItem] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    fetchMenuItem();
  }, [reload]);
  const fetchMenuItem = async () => {
    try {
      setUploading(true);
      const fetchItem = await ProductAPI.get();
      setGetMenuListItem(fetchItem.data);
    } catch (error) {
      console.error(error);
    } finally {
      setUploading(false);
    }
  };
  const dispatch = useDispatch();
  const currentUser = useSelector((state) => state.auth.currentUser);
  const onHandleLogout = () => {
    dispatch(logout());
    navigate("/");
  };
  const handleClick = (_id) => {
    if (_id === isMenuItemVisible) {
      setIsMenuItemVisible(null);
    } else {
      setIsMenuItemVisible(_id);
    }
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
    <div className="flex flex-col items-center  min-h-screen">
      <div className="flex justify-between items-center mb-4 container mx-auto px-4 py-2">
        <h1 className="text-4xl font-bold text-yellow-700">Mayme</h1>
        <div className=" border-2 border-yellow-700 w-auto p-4 rounded-2xl flex items-center hover:bg-amber-700 transition-all duration-300 relative group cursor-default justify-center text-lg ">
          <div className="text-right mr-2">{currentUser.tenNhaHang}</div>
          <UserOutlined />
          <ul className="p-2 shadow-[0px_3px_8px_rgba(0,0,0,0.24)] w-[150px] h-auto rounded-md opacity-0  group-hover:opacity-100 transition-all duration-300  absolute -bottom-[90%] z-10 text-black text-[13px] bg-white">
            <li
              onClick={onHandleLogout}
              className="flex  justify-center gap-2 items-center cursor-pointer hover:bg-gray-100 rounded-md "
            >
              <span> Đăng xuất </span>
              <LoginOutlined />
            </li>
          </ul>
        </div>
      </div>

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
        <div className="grid grid-cols-6 text-amber-300 border-2 border-sky-200 gap-4 bg-blue-400">
          <div className="col-span-1 p-2  border-transparent">Mã Hàng Hoá</div>
          <div className="col-span-1 p-2  border-transparent">Tên Hàng</div>
          <div className="col-span-1 p-2  border-transparent">Nhóm Hàng</div>
          <div className="col-span-1 p-2  border-transparent">Loại</div>
          <div className="col-span-1 p-2  border-transparent">Giá Bán</div>
          <div className="col-span-1 p-2  border-transparent">Giá Vốn</div>
        </div>
        {uploading && <Loading />}
        {getMenuListItem ? (
          <MenuListItem
            getMenuListItem={getMenuListItem}
            isMenuItemVisible={isMenuItemVisible}
            handleClick={handleClick}
          />
        ) : (
          <div className="w-full h-[200px] bg-gray-100 flex items-center justify-center ">
            <div className="w-1/2 h-1/2  text-gray-400 text-center">
              <FileOutlined className="text-lg" />
              <p>Bạn chưa có sản phẩm nào</p>
            </div>
          </div>
        )}
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
            uploading={uploading}
          />
        </div>
      )}
    </div>
  );
};

export default MainPage;
