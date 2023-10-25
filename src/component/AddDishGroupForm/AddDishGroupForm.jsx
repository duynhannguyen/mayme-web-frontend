import React, { useState } from "react";
import dishGroupApi from "../../services/dishGroupAPI.js";
const AddForm = ({ closeMenuType }) => {
  const [dishGroup, setDishGroup] = useState("");
  const [loading, setLoading] = useState(false);
  const onHandleChange = (e) => {
    setDishGroup(e.target.value);
  };

  const onHandleSubmit = async () => {
    try {
      setLoading(true);
      console.log("group", dishGroup);
      const newDishGroup = {
        loaiThucDon: dishGroup,
      };
      const response = await TypeMenuApi.create(newDishGroup);
      console.log(response);
      // const update = () => {
      //   reload(Math.random());
      // };
      // update();
      // refreshToGetData();

      closeMenuType();
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <div className="col-span-2 bg-white on p-2 rounded on ">
        <label
          htmlFor="loaiThucDon"
          className="block text-sm font-medium leading-6"
        >
          Nhập nội dung
        </label>

        <input
          type="text"
          name="loaiThucDon"
          id="loaiThucDon"
          value={dishGroup}
          onChange={onHandleChange}
          autoComplete="family-name"
          className="block w-full rounded-md border-0 py-1.5 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
        />

        <div className="mt-6 mb-6  flex items-center justify-end gap-x-6">
          <button
            type="button"
            onClick={closeMenuType}
            className="text-sm font-semibold leading-6"
          >
            Hủy
          </button>
          <button
            type="button"
            onClick={onHandleSubmit}
            className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Thêm
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddForm;
