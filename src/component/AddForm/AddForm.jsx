import React from 'react';
import { PhotoIcon } from '@heroicons/react/24/solid';
import { useFormik } from 'formik';

const AddForm = ({ onSubmitHandler, onHandleCloseForm }) => {
  const formik = useFormik({
    initialValues: {
      maHangHoa: '',
      tenHang: '',
      nhomHang: '',
      loai: '',
      giaBan: '',
      giaVon: '',
    },
    onSubmit: (values) => {
      onSubmitHandler(values)
    },
  });

  const { handleSubmit1, handleChange } = formik;


  return (
    <form onSubmit={handleSubmit1}>
      <div className=" bg-white px-10 on " >
        <div className="border-b     mt-20">
          <h2 className="text-base font-semibold leading-7 pt-10" >Thêm hàng hóa</h2>
          <div className="flex justify-start gap-40">
            <p>Thông tin</p>
            <p>Mô tả chi tiết</p>
            <p>Thành phần</p>
          </div>
        </div>
        <div className="grid grid-cols-3 gap-3 mt-2">
          <div className="col-span-2">
            <label htmlFor="maHangHoa" className="block text-sm font-medium leading-6">
              Mã hàng hóa
            </label>

            <input
              type="text"
              name="maHangHoa"
              id="maHangHoa"
              value={formik.values.maHangHoa}
              onChange={handleChange}
              autoComplete="family-name"
              className="block w-full rounded-md border-0 py-1.5 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            />
          </div>
          <div>
            <label htmlFor="giaVon" className="block text-sm font-medium leading-6">
              Giá vốn
            </label>

            <input
              type="text"
              name="giaVon"
              id="giaVon"
              value={formik.values.giaVon}
              onChange={handleChange}
              autoComplete="family-name"
              className="block w-full rounded-md border-0 py-1.5 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            />
          </div>
        </div>
        <div className="grid grid-cols-3 gap-3 mt-2">
          <div className="col-span-2">
            <label htmlFor="tenHang" className="block text-sm font-medium leading-6">
              Tên hàng
            </label>

            <input
              type="text"
              name="tenHang"
              id="tenHang"
              value={formik.values.tenHang}
              onChange={handleChange}
              autoComplete="family-name"
              className="block w-full rounded-md border-0 py-1.5 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            />
          </div>
          <div>
            <label htmlFor="giaBan" className="block text-sm font-medium leading-6">
              Giá bán
            </label>

            <input
              type="text"
              name="giaBan"
              id="giaBan"
              value={formik.values.giaBan}
              onChange={handleChange}
              autoComplete="family-name"
              className="block w-full rounded-md border-0 py-1.5 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            />
          </div>
        </div>


        <label htmlFor="loai" className="block text-sm font-medium leading-6">
          Loại thực đơn   <button className ="ml-2 text-green-600 text-2xl p-0 px-4">+</button>
        </label>
        
        <div className="mt-2">
          <select
            type="text"
            name="loai"
            id="loai"
            value={formik.values.loai}
            onChange={handleChange}
            autoComplete="country-name"
            className="  block w-full rounded-md border-0 py-1.5 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
          >
            <option>Lựa chọn</option>
            <option>Đồ ăn</option>
            <option>Thức uống</option>

          </select>
        </div>

        <label htmlFor="nhomHang" className="block text-sm font-medium leading-6">
          Nhóm hàng <button className =" text-green-600 text-2xl p-0 px-4 ml-5">+</button>
        </label>
        <div className="mt-2">
          <select
            type="text"
            name="nhomHang"
            id="nhomHang"
            value={formik.values.nhomHang}
            onChange={handleChange}
            autoComplete="country-name"
            className="  block w-full rounded-md border-0 py-1.5 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
          >
            <option>Lựa chọn</option>
            <option>1</option>
            <option>2</option>
            <option>3</option>

          </select>

        </div>

        <div className="sm:col-span-6">
          <label htmlFor="cover-photo" className="block text-sm font-medium leading-6 mt-2">
            chọn ảnh
          </label>
          <div className="mt-2 flex justify-center rounded-lg border border-dashed border-gray-900/25 px-6 py-10">
            <div className="text-center">
              <PhotoIcon className="mx-auto h-12 w-12 text-gray-300" aria-hidden="true" />
              <div className="mt-4 flex text-sm leading-6 text-gray-600">
                <label
                  htmlFor="file-upload"
                  className="relative cursor-pointer rounded-mdbg-white font-semibold text-indigo-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-600 focus-within:ring-offset-2 hover:text-indigo-500"
                >
                  <span>Upload a file</span>
                  <input id="file-upload" name="file-upload" type="file" className="sr-only" />
                </label>
                <p className="pl-1">or drag and drop</p>
              </div>
              <p className="text-xs leading-5">PNG, JPG, GIF up to 10MB</p>
            </div>
          </div>
        </div>

        <div className="mt-6 mb-6  flex items-center justify-end gap-x-6">
          <button type="button" onClick={onHandleCloseForm} className="text-sm font-semibold leading-6">
            Hủy
          </button>
          <button
            type="submit"
            className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"

          >
            Thêm
          </button>
        </div>


      </div>
    </form>

  )
}

export default AddForm

