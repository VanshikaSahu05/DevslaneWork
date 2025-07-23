import { SiGnuprivacyguard } from "react-icons/si";
import {  FaCartArrowDown } from "react-icons/fa";
import { useFormik } from "formik";
import * as Yup from "yup";
import { Link } from "react-router-dom";

const LoginPage = () => {
  function callApi(values) {
    console.log("called", values);
  }

  const schema = Yup.object().shape({
    FirstName: Yup.string()
      .required("FirstName is required"),
    LastName:Yup.string().
    required("LastName is required"),
    email:Yup.string().
    min(3,"Invalid Email")
    .required("Email is required"),
    password: Yup.string()
      .min(6, "Password must be at least 6 characters")
      .required("Password is required"),
    ConfirmPassword:Yup.string()
      .min(3,"password must be same")
  });

  const {
    handleChange,
    values,
    handleSubmit,
    errors,
    handleBlur,
    touched,
  } = useFormik({
    initialValues: {
      FirstName: "",
      LastName: "",
      email:"",
      password:"",
      ConfirmPassword:"",
    },
    validationSchema: schema,
    onSubmit: callApi,
  });
  return (
    <div className="flex justify-center items-center h-screen bg-cover bg-no-repeat bg-[url('https://tse1.mm.bing.net/th/id/OIP.nn8CQsrncHyC-RasmGfLSQHaEK?pid=Api&P=0&h=180')] px-4">
      <div className="flex flex-col items-center gap-6 w-full max-w-sm md:max-w-md bg-white/10 p-6 rounded-xl backdrop-blur-sm">
        <SiGnuprivacyguard className="text-white text-7xl md:text-9xl"
 />
        <form onSubmit={handleSubmit} className="flex flex-col gap-3 w-full">
          <div className="flex gap-2 items-center border-2 border-white px-3 py-2 rounded">
            
            <label htmlFor="FirstName" className="sr-only">FirstName</label>
            <input
              value={values.FirstName}
              onChange={handleChange}
              name="FirstName"
              id="FirstName"
              type="text"
              placeholder="First Name"
              onBlur={handleBlur}
              className="pl-2 rounded-md w-full outline-none bg-transparent text-white  placeholder-white"
            />
          </div>
          {touched.FirstName && errors.FirstName && (
            <p className="text-red-500 text-sm">{errors.FirstName}</p>
          )}

          <div className="flex gap-2 items-center border-2 border-white px-3 py-2 rounded">
            
            <label htmlFor="LastName" className="sr-only">LastName</label>
            <input
              value={values.LastName}
              onChange={handleChange}
              name="LastName"
              id="LastName"
              type="text"
              placeholder="Last Name"
              onBlur={handleBlur}
              className="pl-2 rounded-md w-full outline-none bg-transparent text-white  placeholder-white"
            />
          </div>
          {touched.LastName && errors.LastName && (
            <p className="text-red-500 text-sm">{errors.LastName}</p>
          )}

           <div className="flex gap-2 items-center border-2 border-white px-3 py-2 rounded">
            <label htmlFor="email" className="sr-only">Email</label>
            <input
              value={values.email}
              onChange={handleChange}
              name="email"
              id="email"
              type="email"
              placeholder="Email"
              onBlur={handleBlur}
              className="pl-2 rounded-md w-full outline-none bg-transparent text-white  placeholder-white"
            />
          </div>
          {touched.email && errors.email && (
            <p className="text-red-500 text-sm">{errors.email}</p>
          )}

          <div className="flex gap-2 items-center border-2 border-white px-3 py-2 rounded">
            <label htmlFor="Password" className="sr-only">Password</label>
            <input
              value={values.password}
              onChange={handleChange}
              name="password"
              id="Password"
              type="password"
              placeholder="Password"
              onBlur={handleBlur}
              className="pl-2 rounded-md w-full outline-none bg-transparent text-white  placeholder-white"
            />
          </div>
          {touched.password && errors.password && (
            <p className="text-red-500 text-sm">{errors.password}</p>
          )}

           <div className="flex gap-2 items-center border-2 border-white px-3 py-2 rounded">
            
            <label htmlFor="ConfirmPassword" className="sr-only">Confirm Password</label>
            <input
              value={values.ConfirmPassword}
              onChange={handleChange}
              name="ConfirmPassword"
              id="ConfirmPassword"
              type="password"
              placeholder="Confirm Password"
              onBlur={handleBlur}
              className="pl-2 rounded-md w-full outline-none bg-transparent text-white  placeholder-white"
            />
          </div>
          {touched.ConfirmPassword && errors.ConfirmPassword && (
            <p className="text-red-500 text-sm">{errors.ConfirmPassword}</p>
          )}
          <button
            type="submit"
            className="bg-white text-blue-950 px-4 py-2 mt-4 rounded hover:bg-blue-100 transition font-medium"
          >
            Submit
          </button>
          <p className="text-white text-sm self-center">Already have an account? <Link to="/LoginPage" className="hover:underline">Login</Link> </p>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
