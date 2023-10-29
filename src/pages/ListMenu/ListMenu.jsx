import React, { useState } from 'react';
import Item from '../../component/Item/Item'
import QRCode from 'qrcode.react';
const ListMenu = () => {
  const menu2Url = 'http://localhost:5173/menu2';
  const [showQRCode, setShowQRCode] = useState(false);
  const [currentMenu, setCurrentMenu] = useState('coffee');
  const axios = require('axios');

const fetchData = async () => {
  try {
    const response = await axios.get('http://localhost:5173/api/v1/mainpage/menu');
    const data = response.data;
    console.log(data); // Xử lý dữ liệu nhận được từ backend ở đây
  } catch (error) {
    console.log('Error fetching data:', error);
  }
};

fetchData();
  const dataCoffee = [
      {
      imageUrl:
        'https://t2.gstatic.com/licensed-image?q=tbn:ANd9GcRqPnxhzG50sOFqBgyKvZtmOHiB3mwkR2YtId5jZG5nApAoiSDkXMK4Rxxqpkfg0ZW9',
      title: 'Cappuccino',
      description: 'Mô tả về cappuccino.',
      price: '$3.99',
    },
  ];
  const dataNuocep = [
    {
      imageUrl:
        'https://t2.gstatic.com/licensed-image?q=tbn:ANd9GcRqPnxhzG50sOFqBgyKvZtmOHiB3mwkR2YtId5jZG5nApAoiSDkXMK4Rxxqpkfg0ZW9',
      title: 'Nước ép cam',
      description: 'Mô tả về Nước ép cam.',
      price: '$3.99',
    },
  ];
  const dataTrasua = [
    {
      imageUrl:
        'https://t2.gstatic.com/licensed-image?q=tbn:ANd9GcRqPnxhzG50sOFqBgyKvZtmOHiB3mwkR2YtId5jZG5nApAoiSDkXMK4Rxxqpkfg0ZW9',
      title: 'trà sữa đài loan',
      description: 'Mô tả về trà sữa đài loan.',
      price: '$3.99',
    },
   
  ];
  const dataSinhto = [
    {
      imageUrl:
        'https://t2.gstatic.com/licensed-image?q=tbn:ANd9GcRqPnxhzG50sOFqBgyKvZtmOHiB3mwkR2YtId5jZG5nApAoiSDkXMK4Rxxqpkfg0ZW9',
      title: 'sinh tố 1',
      description: 'Mô tả về sinh tố.',
      price: '$3.99',
    },
    {
      imageUrl: 'https://t2.gstatic.com/licensed-image?q=tbn:ANd9GcRqPnxhzG50sOFqBgyKvZtmOHiB3mwkR2YtId5jZG5nApAoiSDkXMK4Rxxqpkfg0ZW9',
      title: 'sinh to',
      description: 'Mô tả về Latte.',
      price: '$19.99',
    },
  ];
  const handleMenuClick = (menu) => {
    setCurrentMenu(menu);
    setShowQRCode(false);
  };
  const renderMenuItems = () => {
    let menuData = [];

    if (currentMenu === 'coffee') {
      menuData = dataCoffee;
    } else if (currentMenu === 'nuocep') {
      menuData = dataNuocep;
    } else if (currentMenu === 'trasua') {
      menuData = dataTrasua;
    } else if (currentMenu === 'sinhto') {
      menuData = dataSinhto;
    }return menuData.map((item, index) => (
      <Item
        key={index}
        imageUrl={item.hinhAnh}
        title={item.tenHang}
        description={item.nhomHang}
        price={item.giaBan}
      />
    ));
  };
  const handleShowQRCode = () => {
    setShowQRCode(true);
  };
  const handleNotShowQRCode = () => {
    setShowQRCode(!showQRCode);
  };
  return (

    <div className="bg-gray-900 min-h-screen flex items-center justify-center relative">
      <div className="bg-gray-800 flex-1 flex flex-col space-y-5 lg:space-y-0 lg:flex-row lg:space-x-10 max-w-6xl sm:p-6 sm:my-2 sm:mx-4 sm:rounded-2xl">

        <div className="bg- px-2 lg:px-4 py-2 lg:py-10 sm:rounded-xl flex lg:flex-col justify-between">
          <nav className="flex items-center flex-row space-x-2 lg:space-x-0 lg:flex-col lg:space-y-2">
            <a className="text-white/50 p-4 inline-flex justify-center rounded-md hover:bg-gray-800 pr-1 hover:text-white smooth-hover" href="#">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 sm:h-6 sm:w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="3" y1="12" x2="21" y2="12" />
                <line x1="3" y1="6" x2="21" y2="6" /> 
                <line x1="3" y1="18" x2="21" y2="18" />
              </svg>
              Menu
            </a>
            <button className="bg-gray-800 text-white p-4 inline-flex justify-center rounded-md"   onClick={() => handleMenuClick('coffee')}>
              Coffee
            </button>
            <button className="bg-gray-800 text-white p-4 inline-flex justify-center rounded-md"  onClick={() => handleMenuClick('trasua')}>

              Trà sữa
            </button>
            <button className="bg-gray-800 text-white p-4 inline-flex justify-center rounded-md" onClick={() => handleMenuClick('sinhto')}>
              Sinh Tố
              </button>
            <button className="bg-gray-800 text-white p-4 inline-flex justify-center rounded-md" onClick={() => handleMenuClick('nuocep')}>
              Nước ép
            </button>
          </nav>
        </div>
        <div className="flex-1 px-2 sm:px-0">
          <div className="flex justify-between items-center">
            <h3 className="text-3xl font-extralight text-white/50">MayMe</h3>
            <div className="inline-flex items-center space-x-2">
           <button className="bg-gray-900 text-white/50 p-2 rounded-md hover:text-white smooth-hover"  onClick={handleShowQRCode}>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
               </svg>               
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
      <QRCode className="max-w-80vw max-h-80vh" value={menu2Url} />
      <button className="absolute top-4 right-4 text-white bg-red-500 hover:bg-red-600 py-2 px-3 rounded-md" onClick={handleNotShowQRCode}>
        Tắt
      </button>
    </div>
  )}
    </div>
  )
}

export default ListMenu
