import { FallOutlined } from "@ant-design/icons";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import UpdateProductForm from "../../component/UpdateProductForm/UpdateProductForm";
import { fetchDishList } from "../../redux/DishList/dishListAction";
import ProductAPI from "../../services/productAPI";

const MenuItem = ({
  id,
  maHangHoa,
  tenHang,
  nhomHang,
  loai,
  giaBan,
  giaVon,
  hinhAnh,
}) => {
  const [showUpdateForm, setShowUpdateFrom] = useState(false);
  const dispatch = useDispatch();
  const onShowUpdateForm = () => {
    setShowUpdateFrom(!showUpdateForm);
    console.log();
  };
  const onHandleDelete = async (id) => {
    try {
      console.log(id);
      const response = await ProductAPI.delete(id);
      dispatch(fetchDishList());
      console.log("deleted");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="">
      <div className="">
        <div className="container mx-auto px-8 py-4 bg-green-100">
          <div className=" flex justify-start gap-10 ">
            <div className="mr-2 text-green-700">Thông tin</div>
            <div className="mr-2">Thẻ kho</div>
            <div className="mr-2">Tồn kho</div>
            <div className="mr-2">Món thêm</div>
          </div>
        </div>
        <div className="px-8 py-4 text-2xl text-yellow-700" id={id}>
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
          <button
            type="button"
            onClick={onShowUpdateForm}
            className="bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded"
          >
            Cập Nhật
          </button>

          {showUpdateForm && (
            <div className="fixed top-0 left-0 right-0 bottom-0 flex items-center justify-center bg-gray-800 bg-opacity-50">
              {" "}
              <UpdateProductForm />{" "}
            </div>
          )}

          <button
            type="button"
            onClick={() => onHandleDelete(id)}
            className="bg-red-500 hover:bg-red-600 text-white py-2 px-4 rounded"
          >
            Xoá
          </button>
        </div>
      </div>
    </div>
  );
};

export default MenuItem;
