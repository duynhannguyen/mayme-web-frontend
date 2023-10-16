import React from 'react'
import { PhotoIcon} from '@heroicons/react/24/solid';
const AddProductForm = () => {



  return (
    <div>
      <form className="bg-blue-200">
      <div className=" m-20 ">
      <div className="border-b      ">
        <h2 className="text-base font-semibold leading-7 ">Thêm hàng hóa</h2>
        <div className="flex justify-start gap-40">
          <p>Thông tin</p>
          <p>Mô tả chi tiết</p>
          <p>Thành phần</p>
        </div>
      </div>
    


        
         <div className="grid grid-cols-3 gap-3 mt-2">
           <div className="col-span-2">
            <label htmlFor="last-name" className="block text-sm font-medium leading-6">
              Mã hàng hóa
            </label>
           
              <input
                type="text"
                name="last-name"
                id="last-name"
                autoComplete="family-name"
                className="block w-full rounded-md border-0 py-1.5 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
              </div>
              <div>
            <label htmlFor="last-name" className="block text-sm font-medium leading-6">
              Giá vốn
            </label>
           
              <input
                type="text"
                name="last-name"
                id="last-name"
                autoComplete="family-name"
                className="block w-full rounded-md border-0 py-1.5 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
              </div>     
          </div>
          <div className="grid grid-cols-3 gap-3 mt-2">
           <div className="col-span-2">
            <label htmlFor="last-name" className="block text-sm font-medium leading-6">
              Tên hàng 
            </label>
           
              <input
                type="text"
                name="last-name"
                id="last-name"
                autoComplete="family-name"
                className="block w-full rounded-md border-0 py-1.5 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
              </div>
              <div>
            <label htmlFor="last-name" className="block text-sm font-medium leading-6">
              Giá bán
            </label>
           
              <input
                type="text"
                name="last-name"
                id="last-name"
                autoComplete="family-name"
                className="block w-full rounded-md border-0 py-1.5 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
              </div>
          </div>
<label htmlFor="country" className="block text-sm font-medium leading-6">
            Loại thực đơn
          </label>
          <div className="mt-2">
            <select
              id="country"
              name="country"
              autoComplete="country-name"
              className="  block w-full rounded-md border-0 py-1.5 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
            >
              <option>Đồ ăn</option>
              <option>Thức uống</option>
              
            </select>
          </div>

          <label htmlFor="country" className="block text-sm font-medium leading-6">
            Nhóm hàng
          </label>
          <div className="mt-2">
            <select
              id="country"
              name="country"
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
       
            
          
        <div className="mt-6 flex items-center justify-end gap-x-6">
        <button type="button" className="text-sm font-semibold leading-6">
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
    </div>
  )
}

export default AddProductForm