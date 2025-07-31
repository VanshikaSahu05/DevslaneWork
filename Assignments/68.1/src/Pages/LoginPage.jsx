import { FaCartArrowDown } from "react-icons/fa";
import { Link } from "react-router-dom";
import { Formik,Form  } from "formik";
import * as Yup from "yup";
import Input from "./Input";

const LoginPage = () => {
  function callApi(values) {
    console.log("called", values);
  }

  const schema = Yup.object().shape({
    email: Yup.string()
      .min(3, "Invalid email format ")
      .required("Email is required"),
    password: Yup.string()
      .min(6, "Password must be at least 6 characters")
      .required("Password is required"),
  });
  const initialValue = {
    email:"",
    password:""

  }

  return (
    <div className="flex justify-center items-center h-screen bg-cover bg-no-repeat bg-[url('https://tse1.mm.bing.net/th/id/OIP.nn8CQsrncHyC-RasmGfLSQHaEK?pid=Api&P=0&h=180')] px-4">
      <div className="flex flex-col items-center gap-6 w-full max-w-sm md:max-w-md bg-white/10 p-6 rounded-xl backdrop-blur-sm">
        <FaCartArrowDown className="text-white text-7xl md:text-9xl" />
        <Formik initialValue={initialValue} onSubmit={callApi} validationSchema={schema} >
          <Form  className="flex flex-col gap-3 w-full">
          <Input
            label="EMAIL"
            id="email"
            name="email"
            type="email"
            placeholder="EMAIL"
          />

          <Input
            label="PASSWORD"
            id="password"
            name="password"
            type="password"
            placeholder="PASSWORD"
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
        </Form>
        </Formik>

      </div>
    </div>
  );
};

export default LoginPage;
{
  /* <div className="flex gap-2 items-center border-2 border-white px-3 py-2 rounded">
            <FaUser className="text-white" />
            <label htmlFor="email" className="sr-only">Email</label>
            <input
              value={values.email}
              onChange={handleChange}
              name="email"
              id="email"
              type="email"
              placeholder="EMAIL"
              onBlur={handleBlur}
              className="pl-2 rounded-md w-full outline-none bg-transparent  placeholder-white"
            />
          </div>
          {touched.email && errors.email && (
            <p className="text-red-500 text-sm">{errors.email}</p>
          )} */
}
