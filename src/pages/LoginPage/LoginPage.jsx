import { EyeInvisibleFilled, EyeOutlined } from "@ant-design/icons";
import React, { useState } from "react";
import Button from "../../componets/Button.jsx/Button.jsx";
import FieldTextInput from "../../componets/FieldTextInput.js/FieldTextInput.jsx";

const LoginPage = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showToggleIcon, setShowToggleIcon] = useState("");
  const setInputType = (showPassword) => {
    if (showPassword) {
      return "text";
    } else {
      return "password";
    }
  };
  const inputType = setInputType(showPassword);
  return (
    <div className="w-full h-full relative ">
      <img
        className=" w-full max-h-screen opacity-10  "
        src="images/loginbg.jpg"
        alt="background"
      />
      <div className=" text-center w-[440px] h-auto absolute top-2/4 left-2/4 -translate-x-2/4 -translate-y-2/4 bg-white text-black rounded-lg p-2   ">
        <p className="font-extrabold text-2xl mt-4 mb-2 text-yellow-700">
          MAYME
        </p>
        <p className=" text-xl mb-3 font-bold ">Đăng nhập</p>
        <form>
          <FieldTextInput placeHolder={"Tên đăng nhập"} />
          <FieldTextInput
            placeHolder={"Mật khẩu"}
            type={inputType}
            showPassword={showPassword}
            value={showToggleIcon}
            setShowToggleIcon={setShowToggleIcon}
          />
          <Button name={"Đăng nhập"} />
          {showToggleIcon ? (
            <span
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-[20px] bottom-[88px] cursor-pointer"
            >
              {showPassword ? <EyeOutlined /> : <EyeInvisibleFilled />}
            </span>
          ) : (
            ""
          )}
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
