import React, { useEffect, useState } from "react";
import Item from "../../component/Item/Item";
import {
  DownloadOutlined,
  CloseOutlined,
  QrcodeOutlined,
  ShoppingCartOutlined,
} from "@ant-design/icons";
import QRCode from "qrcode";
import { useDispatch, useSelector } from "react-redux";
import { fetchDishList } from "../../redux/DishList/dishListAction";
import Cart from "../../component/Cart/Cart";
const ListMenu = () => {
  const [showQRCode, setShowQRCode] = useState(false);
  const [showCart, setShowCart] = useState(false);
  const [currentMenu, setCurrentMenu] = useState("menu");
  const [cartItems, setCartItems] = useState([]);
  const [QrcodeImage, setQrcodeImage] = useState("");
  const dispatch = useDispatch();
  const getDishList = useSelector((state) => state.dishList.dishList);
  const tenNhaHang = useSelector((state) => state.auth.currentUser.tenNhaHang);
  const uniqueTypes = [...new Set(getDishList.map((item) => item.loai))];

  useEffect(() => {
    dispatch(fetchDishList());
  }, []);
  const url = window.location.href;
  const generateQR = () => {
    return QRCode.toDataURL(url, { width: 300 }, (error, url) => {
      if (error) {
        throw error;
      }
      setQrcodeImage(url);
    });
  };

  const handleAddToCart = (id) => {
    const existingItem = getDishList.find((item) => item._id === id);
    const existingItemIndex = cartItems.findIndex(
      (cartItem) => cartItem._id === id
    );
    if (existingItemIndex === -1) {
      const addQuantityToItem = { ...existingItem, quantity: 1 };

      const updateCartItems = [...cartItems, addQuantityToItem];
      setCartItems(updateCartItems);
    } else {
      cartItems[existingItemIndex] = {
        ...cartItems[existingItemIndex],
        quantity: cartItems[existingItemIndex].quantity + 1,
      };
    }
  };

  const handleMenuClick = (menu) => {
    setCurrentMenu(menu);
  };
  const renderMenuItems = () => {
    let menuData = [];

    if (currentMenu === "menu") {
      menuData = getDishList;
    } else {
      menuData = getDishList.filter((item) => item.loai === currentMenu);
    }

    return menuData.map((item) => (
      <Item key={item._id} {...item} onAddToCart={handleAddToCart} />
    ));
  };
  const handleShowQRCode = () => {
    generateQR();
    setShowQRCode(!showQRCode);
  };
  const handleShowCart = () => {
    setShowCart(!showCart);
  };

  return (
    <div className="bg-gray-900  flex items-center justify-center relative">
      <div className="bg-gray-800 min-h-screen flex-1 flex flex-col space-y-5 lg:space-y-0 lg:flex-row lg:space-x-10 max-w-6xl sm:p-6 sm:my-2 sm:mx-4 sm:rounded-2xl">
        <div className="bg- px-2 lg:px-4 py-2 lg:py-10 sm:rounded-xl flex lg:flex-col justify-between">
          <nav className="flex items-center flex-row space-x-2 lg:space-x-0 lg:flex-col lg:space-y-2">
            <button
              className="bg-gray-800 text-white p-4 inline-flex justify-center rounded-md"
              onClick={() => handleMenuClick("menu")}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 sm:h-6 sm:w-6"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="3" y1="12" x2="21" y2="12" />
                <line x1="3" y1="6" x2="21" y2="6" />
                <line x1="3" y1="18" x2="21" y2="18" />
              </svg>
              Menu
            </button>
            {uniqueTypes.map((type) => (
              <button
                key={type}
                className="bg-gray-800 text-white p-4 inline-flex justify-center rounded-md"
                onClick={() => handleMenuClick(type)}
              >
                {type}
              </button>
            ))}
          </nav>
        </div>
        <div className="flex-1 px-2 sm:px-0">
          <div className="flex justify-between items-center">
            <h3 className="text-3xl font-extralight text-white/50">
              {tenNhaHang}
            </h3>
            <div className="flex items-center justify-center gap-5">
              <div
                className="bg-white w-[50px] h-[50px] text-center text-2xl text-gray-600  rounded-md hover:text-gray-900 smooth-hover"
                onClick={handleShowQRCode}
              >
                <QrcodeOutlined
                  className="mx-[25%] my-[25%]
                "
                />
              </div>

              <div
                className="bg-white w-[50px] h-[50px] text-center text-2xl text-gray-600  rounded-md hover:text-gray-900 smooth-hover"
                onClick={handleShowCart}
              >
                <ShoppingCartOutlined
                  className="mx-[25%] my-[25%]
                "
                />
              </div>
            </div>
          </div>
          <div className="mb-10 sm:mb-0 mt-10 grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {renderMenuItems()}
          </div>
        </div>
      </div>
      {showQRCode && (
        <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-80">
          <img className="w-[300px] h[300px]" src={QrcodeImage} alt="qrcode" />

          <div className="absolute top-8 right-8 gap-4 flex items-center justify-center text-blue-300 text-2xl">
            <a
              className=" no-underline text-inherit hover:text-blue-700"
              href={QrcodeImage}
              download="menu-qrcode"
            >
              <DownloadOutlined />
            </a>

            <div className="  hover:text-blue-700" onClick={handleShowQRCode}>
              <CloseOutlined />
            </div>
          </div>
        </div>
      )}
      {showCart && (
        <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center  bg-opacity-80">
          <Cart
            cartItems={cartItems}
            setShowCart={setShowCart}
            showCart={showCart}
            setCartItems={setCartItems}
          />
        </div>
      )}
    </div>
  );
};

export default ListMenu;
