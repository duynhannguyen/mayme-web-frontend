import React from "react";

const MenuItem = () => {
  return (
    <div className="p-8">
      <div className="border border-green-500">
        <div className="container mx-auto px-8 py-4 bg-green-100">
          <div className="ml-2 flex justify-between items-center mb-4">
            <div className="text-xs font-bold mr-2">SP00003</div>
            <div className="mr-2">Cafe</div>
            <div className="mr-2">Đồ ăn</div>
            <div className="mr-2">0</div>
            <div className="mr-2">0</div>
            <div className="mr-2">0</div>
          </div>
          <div className=" flex justify-start gap-10 ">
            <div className="mr-2 text-green-700">Thông tin</div>
            <div className="mr-2">Thẻ kho</div>
            <div className="mr-2">Tồn kho</div>
            <div className="mr-2">Món thêm</div>
          </div>
        </div>
        <div className="px-8 py-4 text-2xl text-yellow-700">Cafe</div>
        <div className="  flex  items-center px-8   gap-20  ">
          <div className="w-[350px] h-[350px] object-cover">
            <img
              src="https://bepvang.org.vn/Userfiles/Upload/images/Download/2016/8/4/a94990116a6b48668ac78d90d6cfdd71.jpg"
              alt="product"
              className="w-full h-full object-cover rounded-bl-3xl rounded-br-3xl rounded-tr-3xl rounded-tl-3xl"
            />
          </div>

          <div>
            <div className="bigger-text ">Mã hàng hoá: SP00003</div>
            <div className="bigger-text mt-5">Loại thực đơn: Đồ ăn</div>
            <div className="bigger-text mt-5">Nhóm hàng: Cafe</div>
            <div className="bigger-text mt-5 ">Loại hàng: Hàng hoá</div>
            <div className="bigger-text mt-5 ">Giá bán: 0</div>
          </div>
        </div>
        <div className="flex items-center justify-end mt-10 py-2 px-4 gap-2">
          <button className="bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded">
            Cập Nhật
          </button>
          <button className="bg-red-500 hover:bg-red-600 text-white py-2 px-4 rounded">
            Xoá
          </button>
        </div>
      </div>
    </div>
  );
};

export default MenuItem;
