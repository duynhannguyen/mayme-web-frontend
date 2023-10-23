import React from 'react';


const AddForm = () => {
  return (
    <form onSubmit={handleSubmit}>        
          <div className="col-span-2 bg-white px-96 on ">
            <label htmlFor="maHangHoa" className="block text-sm font-medium leading-6">
              Nhập nội dung
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

