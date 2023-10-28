import * as yup from "yup";

const LoginValidationSchema = yup.object().shape({
  email: yup
    .string()
    .email()
    .matches(/^[^\s@]+@[^\s@]+\.[^\s@]+$/, "Invaid email address")
    .required("Email is required"),
  password: yup
    .string()
    .matches(
      /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[A-Z]).*$/,
      "Password must contain at least one number, one special character, and one uppercase letter"
    )
    .min(8)
    .required("Password is required"),
});
const signupValidationSchema = yup.object().shape({
  hoTen: yup.string().required("vui lòng nhập số điện thoại"),
  tenNhaHang: yup.string().required("vui lòng nhập số điện thoại"),
  sdt: yup.string().required("vui lòng nhập số điện thoại").min(10),
  email: yup
    .string()
    .email()
    .matches(/^[^\s@]+@[^\s@]+\.[^\s@]+$/, "Invaid email address")
    .required("vui lòng nhập địa chỉ email"),
  password: yup
    .string()
    .matches(
      /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[A-Z]).*$/,
      "Mật khẩu phải có ít nhất 1 chữ in hoa,thường,1 số, 1 ký tự đặc biệt  "
    )
    .min(8)
    .required(""),
});

export const validationSchema = {
  LoginValidationSchema,
  signupValidationSchema,
};
