import React, { useEffect, useState } from "react";
import Item from "../../component/Item/Item";
// import QRCode from "qrcode.react";
import QRCode from "qrcode";
import { useDispatch, useSelector } from "react-redux";
import { fetchDishList } from "../../redux/DishList/dishListAction";
import Cart from "../../component/Cart/Cart";
const ListMenu = () => {
  const menu2Url = "https://www.npmjs.com/package/qrcode";
  const [showQRCode, setShowQRCode] = useState(false);
  const [showCart, setShowCart] = useState(false);
  const [currentMenu, setCurrentMenu] = useState("menu");
  const [cartItems, setCartItems] = useState([]);
  const dispatch = useDispatch();
  const getDishList = useSelector((state) => state.dishList.dishList);
  const uniqueTypes = [...new Set(getDishList.map((item) => item.loai))];
  useEffect(() => {
    dispatch(fetchDishList());
  }, []);

  const generateQR = () => {
    return QRCode.toString(
      menu2Url,
      {
        type: "image/jpeg",
        quality: 0.3,
        margin: 1,
        color: {
          dark: "#010599FF",
          light: "#FFBF60FF",
        },
      },
      (err, string) => {
        console.log(string);
      }
    );
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
      <Item
        key={item._id}
        {...item}
        onAddToCart={handleAddToCart}
      />
    ));
  };
  const handleShowQRCode = () => {
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
            <h3 className="text-3xl font-extralight text-white/50">MayMe</h3>
            <div className="inline-flex items-center space-x-2">
              <button
                className="bg-gray-900 text-white/50 p-2 rounded-md hover:text-white smooth-hover"
                onClick={handleShowQRCode}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"
                  />
                </svg>
              </button>

              <div
                className="bg-white text-white/50 p-2 cursor-pointer rounded-md hover:text-white smooth-hover"
                onClick={handleShowCart}
              >
                <img
                  src="https://tse2.mm.bing.net/th?id=OIP.BFmqdgfzOOO19DYQXb2zhAHaGV&pid=Api&P=0&h=220"
                  alt="Cart"
                  className="h-6 w-6 "
                />
              </div>
              <button type="button" onClick={generateQR}>
                {" "}
                Tạo mã QR
              </button>
            </div>
          </div>
          <div className="mb-10 sm:mb-0 mt-10 grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {renderMenuItems()}
          </div>
        </div>
      </div>
      {showQRCode && (
        <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-80">
          {/* <QRCode className="max-w-80vw max-h-80vh" value={menu2Url} /> */}
          {/* {generateQR()} */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 31 31"
            shape-rendering="crispEdges"
          >
            <path fill="#FFBF60" d="M0 0h31v31H0z" />
            <path
              stroke="#010599"
              d="M1 1.5h7m2 0h3m1 0h1m1 0h1m3 0h2m1 0h7M1 2.5h1m5 0h1m2 0h1m2 0h5m1 0h1m1 0h1m1 0h1m5 0h1M1 3.5h1m1 0h3m1 0h1m1 0h1m1 0h1m2 0h1m1 0h2m1 0h3m1 0h1m1 0h3m1 0h1M1 4.5h1m1 0h3m1 0h1m1 0h1m1 0h3m1 0h2m1 0h1m1 0h1m2 0h1m1 0h3m1 0h1M1 5.5h1m1 0h3m1 0h1m1 0h1m7 0h1m1 0h2m2 0h1m1 0h3m1 0h1M1 6.5h1m5 0h1m1 0h2m1 0h1m3 0h1m2 0h1m1 0h1m1 0h1m5 0h1M1 7.5h7m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h7M9 8.5h1m1 0h1m3 0h3m3 0h1M1 9.5h1m1 0h5m2 0h1m1 0h2m2 0h1m1 0h1m1 0h1m2 0h5M1 10.5h2m1 0h1m4 0h2m3 0h2m1 0h1m1 0h7m3 0h1M2 11.5h1m3 0h2m5 0h7m1 0h1m1 0h1M1 12.5h1m3 0h1m2 0h1m1 0h1m1 0h3m2 0h1m2 0h5m1 0h1m1 0h1M1 13.5h1m1 0h2m1 0h2m1 0h3m3 0h1m2 0h1m1 0h1m5 0h2M3 14.5h1m7 0h1m1 0h1m3 0h5m1 0h1m1 0h1m3 0h1M1 15.5h4m2 0h2m4 0h1m2 0h4m1 0h2m1 0h1m1 0h2M1 16.5h1m1 0h4m2 0h1m1 0h1m1 0h1m1 0h1m4 0h1m1 0h1m1 0h2m2 0h1M3 17.5h5m1 0h1m1 0h3m2 0h1m1 0h1m5 0h1m1 0h2M1 18.5h3m2 0h1m1 0h1m3 0h4m1 0h1m1 0h7m1 0h1m1 0h1M1 19.5h1m2 0h4m1 0h1m1 0h1m2 0h3m2 0h1m3 0h2m2 0h1M1 20.5h1m2 0h1m5 0h1m3 0h1m5 0h2m2 0h2m2 0h1M1 21.5h1m1 0h1m1 0h3m3 0h1m3 0h4m1 0h6m1 0h3M9 22.5h1m3 0h1m3 0h1m1 0h1m1 0h1m3 0h5M1 23.5h7m2 0h2m1 0h1m2 0h3m1 0h2m1 0h1m1 0h3M1 24.5h1m5 0h1m1 0h2m2 0h1m1 0h2m4 0h1m3 0h1m2 0h1M1 25.5h1m1 0h3m1 0h1m1 0h3m1 0h1m2 0h3m2 0h5m1 0h1M1 26.5h1m1 0h3m1 0h1m1 0h2m1 0h2m1 0h1m1 0h1m1 0h3m2 0h1m1 0h4M1 27.5h1m1 0h3m1 0h1m1 0h1m4 0h1m1 0h2m4 0h7M1 28.5h1m5 0h1m4 0h2m1 0h1m1 0h1m2 0h5m1 0h1m1 0h1M1 29.5h7m1 0h1m2 0h2m4 0h3m1 0h6"
            />
          </svg>

          <button
            className="absolute top-4 right-4 text-white bg-red-500 hover:bg-red-600 py-2 px-3 rounded-md"
            onClick={handleShowQRCode}
          >
            X
          </button>
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