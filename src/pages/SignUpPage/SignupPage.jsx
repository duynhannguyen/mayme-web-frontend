// import { useFormik } from "formik";
// import React, { useState } from "react";
// import * as yup from "yup";
// import {validationSchema} from "../../validationSchema/auth.validation.js"
// import { useDispatch, useSelector } from "react-redux";
// import { useNavigate } from "react-router-dom";
// import AuthApi from "../../services/authAPI.js";
// import CustomErrorMessage from "../../component/CustomErrorMessage/CustomErrorMessage";
// import Loading from "../../component/Loading/Loading.jsx";
// import Button from "../../component/Button.jsx/Button.jsx";

// function SignupPage() {
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState(null);
//   const navigate = useNavigate();
//   const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
//   const handleClick = () => {
//     navigate('/');
//   };
//   const formik = useFormik({
//     initialValues: {
//       hoTen: "",
//       tenNhaHang: "",
//       sdt: "",
//       email: "",
//       password: "",
//     },
//     onSubmit: async (values) => {
//       try {
//         setLoading(true);
//         setError(null);
//         await AuthApi.signUp(values);
//         navigate("/login");
//       } catch (error) {
//         setError(error.response.data?.message);
//       } finally {
//         setLoading(false);
//       }
//     },
//     validationSchema: validationSchema.signupValidationSchema,
//   });
//   const { handleChange, handleSubmit, errors } = formik;
//   if (isAuthenticated) {
//     return navigate("/");
//   }
//   return (
//     <div className="h-screen md:flex">
//        {loading ? (
//         <Loading />
//       ) : (
//         <>
//       <div className="w-full h-full">
//         <div className="w-full  h-full">
//           <img
//             src="https://images.pexels.com/photos/904616/pexels-photo-904616.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
//             alt="cafe"
//             className=" w-full object-cover  h-full "
//           />
//         </div>
//       </div>
      
//       <div className="flex md:w-5/6 justify-center py-10 items-center text-center bg-white">
//         <form className="bg-white" onSubmit={handleSubmit}>
//           <h1 className="text-yellow-700 font-bold text-2xl mb-1">MAYME</h1>
//           <p className="text-sm font-normal text-gray-600 mb-7"></p>
//           <div className="flex items-center  border-2 py-2 px-3 rounded-2xl mb-4">
//             <svg
//               xmlns="http://www.w3.org/2000/svg"
//               className="h-5 w-5 text-gray-400"
//               viewBox="0 0 20 20"
//               fill="currentColor"
//             >
//               <path
//                 fill-rule="evenodd"
//                 d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
//                 clip-rule="evenodd"
//               />
//             </svg>
//             <input
//               className="pl-2 outline-none border-none bg-inherit text-black"
//               type="text"
//               name="hoTen"
//               id="hoTen"
//               onChange={handleChange}
//               placeHolder="Họ tên"
//             />
//           </div>
//           {errors.hoTen && <CustomErrorMessage content={errors.hoTen} />}
//           <div className="flex items-center border-2 py-2 px-3 rounded-2xl mb-4">
//             <svg
//               xmlns="http://www.w3.org/2000/svg"
//               className="h-5 w-5 text-gray-400"
//               fill="none"
//               viewBox="0 0 24 24"
//               stroke="currentColor"
//             >
//               <path
//                 stroke-linecap="round"
//                 stroke-linejoin="round"
//                 stroke-width="2"
//                 d="M12 11c0 3.517-1.009 6.799-2.753 9.571m-3.44-2.04l.054-.09A13.916 13.916 0 008 11a4 4 0 118 0c0 1.017-.07 2.019-.203 3m-2.118 6.844A21.88 21.88 0 0015.171 17m3.839 1.132c.645-2.266.99-4.659.99-7.132A8 8 0 008 4.07M3 15.364c.64-1.319 1-2.8 1-4.364 0-1.457.39-2.823 1.07-4"
//               />
//             </svg>
//             <input
//               className="pl-2 outline-none border-none bg-inherit text-black"
//               type="text"
//               name="tenNhaHang"
//               id="tenNhaHang"
//               onChange={handleChange}
//               placeHolder="Tên nhà hàng "
//             />
//           </div>
//           {errors.tenNhaHang && (
//             <CustomErrorMessage content={errors.tenNhaHang} />
//           )}
//           <div className="flex items-center border-2 py-2 px-3 rounded-2xl mb-4">
//             <svg
//               xmlns="http://www.w3.org/2000/svg"
//               className="h-5 w-5 text-gray-400"
//               fill="none"
//               viewBox="0 0 24 24"
//               stroke="currentColor"
//             >
//               <path
//                 stroke-linecap="round"
//                 stroke-linejoin="round"
//                 stroke-width="2"
//                 d="M12 11c0 3.517-1.009 6.799-2.753 9.571m-3.44-2.04l.054-.09A13.916 13.916 0 008 11a4 4 0 118 0c0 1.017-.07 2.019-.203 3m-2.118 6.844A21.88 21.88 0 0015.171 17m3.839 1.132c.645-2.266.99-4.659.99-7.132A8 8 0 008 4.07M3 15.364c.64-1.319 1-2.8 1-4.364 0-1.457.39-2.823 1.07-4"
//               />
//             </svg>
//             <input
//               className="pl-2 outline-none border-none bg-inherit text-black"
//               type="text"
//               name="sdt"
//               id="sdt"
//               onChange={handleChange}
//               placeHolder="Số điện thoại "
//             />
//           </div>
//           {errors.sdt && <CustomErrorMessage content={errors.sdt} />}
//           <div className="flex items-center border-2 py-2 px-3 rounded-2xl  mb-4">
//             <svg
//               xmlns="http://www.w3.org/2000/svg"
//               className="h-5 w-5 text-gray-400"
//               fill="none"
//               viewBox="0 0 24 24"
//               stroke="currentColor"
//             >
//               <path
//                 stroke-linecap="round"
//                 stroke-linejoin="round"
//                 stroke-width="2"
//                 d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"
//               />
//             </svg>
//             <input
//               className="pl-2 outline-none border-none bg-inherit text-black"
//               type="email"
//               name="email"
//               id="email"
//               onChange={handleChange}
//               placeHolder="Địa chỉ email"
//             />
//           </div>
//           {errors.email && <CustomErrorMessage content={errors.email} />}
//           <div className="flex items-center border-2 py-2 px-3 rounded-2xl">
//             <svg
//               xmlns="http://www.w3.org/2000/svg"
//               className="h-5 w-5 text-gray-400"
//               viewBox="0 0 20 20"
//               fill="currentColor"
//             >
//               <path
//                 fill-rule="evenodd"
//                 d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
//                 clip-rule="evenodd"
//               />
//             </svg>
//             <input
//               className="pl-2 outline-none border-none bg-inherit text-black"
//               type="password"
//               name="password"
//               id="password"
//               onChange={handleChange}
//               placeHolder="Mật khẩu"
//             />
//           </div>
//           {errors.password && <CustomErrorMessage content={errors.password} />}
//           <button
//             type="submit"
//             className="block w-full bg-yellow-700 mt-4 py-2 rounded-2xl text-white font-semibold mb-2"
//           >
//             Signup
//           </button>
//           <Button 
//               type="button"
//               name="X"
//               className="text-red-500 text-2xl  "
//               // Thêm các thuộc tính CSS tùy chỉnh để định vị nút button
//               style={{ position: "absolute", top: "0", right: "0" }}
//               onClick={handleClick}
//             />
//         </form>
        
//       </div>
//       </>
//       )}
//     </div>
//   );
// }

// export default SignupPage;
import React from 'react';
import { PhotoIcon } from '@heroicons/react/24/solid';
import { useFormik } from 'formik';

const AddProductForm = ({ onSubmitHandler, onHandleCloseForm }) => {
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

  const { handleSubmit, handleChange } = formik;

  
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


export default AddProductForm

