import React, { useEffect, useState } from "react";
import Item from "../../component/Item/Item";
import QRCode from "qrcode.react";
import { useDispatch, useSelector } from "react-redux";
import { fetchDishList } from "../../redux/DishList/dishListAction";
import Cart from "../../component/Cart/Cart";
const ListMenu = () => {
  const menu2Url = "http://localhost:5173/menu2";
  const [showQRCode, setShowQRCode] = useState(false);
  const [showCart, setShowCart] = useState(false);
  const [currentMenu, setCurrentMenu] = useState("menu");
  const [cartItems, setCartItems] = useState([]);

  // const handleAddToCart = (product) => {
  //   setCartItems([...cartItems, product]);
  // };
  const dispatch = useDispatch();
  const getDishList = useSelector((state) => state.dishList.dishList);
  useEffect(() => {
    dispatch(fetchDishList());
  }, []);

  const handleAddToCart = (id) => {
    const existingItem = getDishList.find((item) => item._id === id);
    console.log(existingItem);
    const existingItemIndex = cartItems.findIndex(
      (cartItem) => cartItem.id === id
    );
    if (existingItemIndex === -1) {
      const updateCartItems = [...cartItems, existingItem];
      updateCartItems[existingItemIndex] = {
        ...updateCartItems[existingItemIndex],
        quantity: updateCartItems[existingItemIndex].quantity + 1,
      };

      setCartItems(updateCartItems);
    }
    // else {
    //   setCartItems([...cartItems, { ...product, quantity: 1 }]);
    // }
  };
 
          
  const handleMenuClick = (menu) => {
    setCurrentMenu(menu);
    // setShowQRCode(false);
    // setShowCart(!showCart);
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
  const uniqueTypes = [...new Set(getDishList.map((item) => item.loai))];
  const handleShowQRCode = () => {
    setShowQRCode(!showQRCode);
  };
  const handleNotShowQRCode = () => {
    setShowQRCode(!showQRCode);
  };
  const handleShowCart = () => {
    setShowCart(!showCart);
  };

  return (
    <div className="bg-gray-900 min-h-screen flex items-center justify-center  ">
    <div className="bg-gray-800 flex flex-col lg:flex-row max-w-6xl sm:p-6 sm:rounded-2xl min-h-screen">
      <div className="bg-gray-800 px-4 py-10 flex lg:flex-col justify-between ">
        <nav className="flex flex-row lg:flex-col lg:space-y-2">
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
      <div className="flex-1 px-2 sm:px-4">
        <div className="flex justify-between items-center">
          <div className="text-3xl font-extralight text-white/50">MayMe</div>
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
          </div>
        </div>
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {renderMenuItems()}
        </div>
      </div>
    </div>
      {showQRCode && (
        <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-80">
          <QRCode className="max-w-80vw max-h-80vh" value={menu2Url} />
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
          />
        </div>
      )}
    </div>
  );
};

export default ListMenu;
