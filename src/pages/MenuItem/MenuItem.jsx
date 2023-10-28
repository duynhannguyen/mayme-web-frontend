import React from "react";

const MenuItem = ({
  _id,
  maHangHoa,
  tenHang,
  nhomHang,
  loai,
  giaBan,
  giaVon,
  hinhAnh,
}) => {
  return (
    <div className="">
      <div className="">
        <div className="container mx-auto px-8 py-4 bg-green-100">
          {/* <div className="ml-2 flex justify-between items-center mb-4">
            <div className="text-xs font-bold mr-2">SP00003</div>
            <div className="mr-2">Cafe</div>
            <div className="mr-2">Đồ ăn</div>
            <div className="mr-2">0</div>
            <div className="mr-2">0</div>
            <div className="mr-2">0</div>
          </div> */}
          <div className=" flex justify-start gap-10 ">
            <div className="mr-2 text-green-700">Thông tin</div>
            <div className="mr-2">Thẻ kho</div>
            <div className="mr-2">Tồn kho</div>
            <div className="mr-2">Món thêm</div>
          </div>
        </div>
        <div className="px-8 py-4 text-2xl text-yellow-700" id={_id}>
          {tenHang}
        </div>
        <div className="  flex  items-center px-8   gap-20  ">
          <div className="w-[350px] h-[350px] object-cover">
            <img
              src={hinhAnh}
              alt="product"
              className="w-full h-full object-cover rounded-bl-3xl rounded-br-3xl rounded-tr-3xl rounded-tl-3xl"
            />
          </div>

          <div>
            <div className="bigger-text ">Mã hàng hoá: {maHangHoa}</div>
            <div className="bigger-text mt-5">Loại thực đơn: {loai}</div>
            <div className="bigger-text mt-5">Nhóm hàng: {nhomHang}</div>
            {/* <div className="bigger-text mt-5 ">Loại hàng: Hàng hoá</div> */}
            <div className="bigger-text mt-5 ">Giá bán: {giaBan}</div>
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
