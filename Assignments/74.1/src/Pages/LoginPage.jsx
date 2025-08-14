import { FaCartArrowDown } from "react-icons/fa";
import { Link, Navigate } from "react-router-dom";
import { withFormik } from "formik";
import * as Yup from "yup";
import Input from "./Input";
import axios from "axios";

function callApi(values, bag) {
  axios
    .post("https://myeasykart.codeyogi.io/login", {
      email: values.email,
      password: values.password,
    })
    .then((response) => {
      const { user, token } = response.data;
      localStorage.setItem("token", token);
      bag.props.setUser(user);
    })
    .catch(() => {
      console.log("invalid credentials");
    });
}

const schema = Yup.object().shape({
  email: Yup.string()
    .email("Invalid email format ")
    .required("Email is required"),
  password: Yup.string()
    .min(4, "Password must be at least 6 characters")
    .required("Password is required"),
});
const initialValue = {
  email: "",
  password: "",
};

export const LoginPage = ({
  handleSubmit,
  values,
  errors,
  touched,
  handleChange,
  handleBlur,
  
}) => {
  
  return (
    <div className="flex justify-center items-center h-screen bg-cover bg-no-repeat bg-[url('https://tse1.mm.bing.net/th/id/OIP.nn8CQsrncHyC-RasmGfLSQHaEK?pid=Api&P=0&h=180')] px-4">
      <div className="flex flex-col items-center gap-6 w-full max-w-sm md:max-w-md bg-white/10 p-6 rounded-xl backdrop-blur-sm">
        <FaCartArrowDown className="text-white text-7xl md:text-9xl" />

        <form onSubmit={handleSubmit} className="flex flex-col gap-3 w-full">
          <Input
            label="EMAIL"
            id="email"
            name="email"
            type="email"
            placeholder="EMAIL"
            value={values.email}
            errors={errors.email}
            touched={touched.email}
            onChange={handleChange}
            onBlur={handleBlur}
          />

          <Input
            label="PASSWORD"
            id="password"
            name="password"
            type="password"
            placeholder="PASSWORD"
            value={values.password}
            errors={errors.password}
            touched={touched.password}
            onChange={handleChange}
            onBlur={handleBlur}
          />

          <button
            type="submit"
            className="bg-white text-blue-950 px-4 py-2 mt-4 rounded hover:bg-blue-100 transition"
          >
            LOGIN
          </button>
          <Link
            to="/ForgetPassword"
            className="self-end text-white text-sm hover:underline"
          >
            Forget Password?
          </Link>
          <p className="text-white text-sm self-end">
            Don't have an account?{" "}
            <Link to="/SignUp" className="hover:underline">
              SignUp
            </Link>{" "}
          </p>
        </form>
      </div>
    </div>
  );
};
const myHoc = withFormik({
  validationSchema: schema,
  mapPropsToValues: () => initialValue,
  handleSubmit: callApi,
});

const login = myHoc(LoginPage);

export default login;
