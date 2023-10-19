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
  hoTen: yup.string().required(),
  tenNhaHang: yup.string().required(),
  sdt: yup.string().required().min(10),
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
    .required("password is required"),
});

export const validationSchema = {
  LoginValidationSchema,
  signupValidationSchema,
};
