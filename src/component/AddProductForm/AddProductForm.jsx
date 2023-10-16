import React from 'react'
import { PhotoIcon} from '@heroicons/react/24/solid';

const AddProductForm = () => {
  const [formData, setFormData] = useState({
    code: '',
    costPrice: '',
    name: '',
    sellingPrice: '',
    menuType: 'Đồ ăn',
    group: 'Lựa chọn',
    file: null,
  });

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleFileInputChange = (e) => {
    setFormData({
      ...formData,
      file: e.target.files[0],
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Tạo một đối tượng dữ liệu form để gửi tới Postman
    const form = new FormData();
    form.append('code', formData.code);
    form.append('costPrice', formData.costPrice);
    form.append('name', formData.name);
    form.append('sellingPrice', formData.sellingPrice);
    form.append('menuType', formData.menuType);
    form.append('group', formData.group);
    form.append('file', formData.file);

    // Gửi dữ liệu tới Postman
    fetch('YOUR_POSTMAN_ENDPOINT', {
      method: 'POST',
      body: form,
    })
      .then((response) => {
        // Xử lý phản hồi từ Postman
        if (response.ok) {
          // Nếu thành công, bạn có thể thực hiện các hành động khác ở đây
          console.log('Dữ liệu đã được gửi thành công');
        } else {
          // Nếu có lỗi, bạn có thể xử lý lỗi ở đây
          console.error('Có lỗi xảy ra khi gửi dữ liệu');
        }
      })
      .catch((error) => {
        // Xử lý lỗi kết nối hoặc lỗi xử lý từ Postman
        console.error('Có lỗi xảy ra khi gửi dữ liệu', error);
      });
  };
  return (
    <form >
      <div className=" ">
      <div className="border-b     mt-20">
        <h2 className="text-base font-semibold leading-7">Thêm hàng hóa</h2>
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
          onClick={handleSubmit}
        >
          Thêm
        </button>
      </div>
        </div>
    </form>
    
  )
}

export default AddProductForm
