import { TbLockPassword } from "react-icons/tb";
import { Link } from "react-router-dom";
import { useFormik } from "formik";
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
  });

  const { handleChange, values, handleSubmit, errors, handleBlur, touched } =
    useFormik({
      initialValues: {
        email: "",
      },
      validationSchema: schema,
      onSubmit: callApi,
    });
  return (
    <div className="flex justify-center items-center h-screen bg-cover bg-no-repeat bg-[url('https://tse1.mm.bing.net/th/id/OIP.nn8CQsrncHyC-RasmGfLSQHaEK?pid=Api&P=0&h=180')] px-4">
      <div className="flex flex-col items-center gap-6 w-full max-w-sm md:max-w-md bg-white/10 p-6 rounded-xl backdrop-blur-sm">
        <TbLockPassword className="text-white text-7xl md:text-9xl" />
        <form onSubmit={handleSubmit} className="flex flex-col gap-3 w-full">
          <Input
            label="EMAIL"
            id="email"
            value={values.email}
            onChange={handleChange}
            onBlur={handleBlur}
            placeholder="EMAIL"
            touched={touched}
            error={errors.email}
          />
          

          <button
            type="submit"
            className="bg-white text-blue-950 px-4 py-2 mt-4 rounded hover:bg-blue-100 transition"
          >
            Reset Password
          </button>
          <p className="text-white text-sm self-center">← Back to <Link to="/LoginPage" className="hover:underline">Login</Link></p>
          
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
