import React from "react";
import { UserOutlined, LoginOutlined } from "@ant-design/icons";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../redux/Auth/authSlice.js";
import { useNavigate } from "react-router-dom";

const MainPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const currentUser = useSelector((state) => state.auth.currentUser);
  console.log(currentUser);
  const onHandleLogout = () => {
    dispatch(logout());
    navigate("/");
  };
  return (
    <div>
      <div className="flex justify-between items-center mb-4 container mx-auto px-4 py-2">
        <h1 className="text-4xl font-bold text-yellow-700">MAYME</h1>{" "}
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
          <button className="bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-4 rounded">
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
      </div>
    </div>
  );
};

export default MainPage;
