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
      <Item key={item._id} {...item} onAddToCart={handleAddToCart} />
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
<<<<<<< HEAD
              Menu 1
            </button>

            <button
              className="menu-button bg-pink-200 h-16 mb-4 p-16 flex items-center justify-center font-bold text-lg bg-cover bg-center bg-no-repeat relative text-white"
              style={{
                backgroundImage: `url('https://t2.gstatic.com/licensed-image?q=tbn:ANd9GcRqPnxhzG50sOFqBgyKvZtmOHiB3mwkR2YtId5jZG5nApAoiSDkXMK4Rxxqpkfg0ZW9')`,
              }}
            >
              Menu 2
            </button>
            <button
              className="menu-button bg-pink-200 h-16 mb-4 p-16 flex items-center justify-center font-bold text-lg bg-cover bg-center bg-no-repeat relative text-white"
              style={{
                backgroundImage: `url('data:image/jpeg;base64,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')`,
              }}
            >
              Menu 3
=======
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
>>>>>>> 8ce449e0125ba3ac37e034351a895e27df98bd32
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
