import { SiGnuprivacyguard } from "react-icons/si";
import { useFormik } from "formik";
import * as Yup from "yup";
import { Link } from "react-router-dom";
import Input from "./Input";

const LoginPage = () => {
  function callApi(values) {
    console.log("called", values);
  }

  const schema = Yup.object().shape({
    FirstName: Yup.string().required("FirstName is required"),
    LastName: Yup.string().required("LastName is required"),
    email: Yup.string().min(3, "Invalid Email").required("Email is required"),
    password: Yup.string()
      .min(6, "Password must be at least 6 characters")
      .required("Password is required"),
    ConfirmPassword: Yup.string().min(3, "password must be same"),
  });

  const { handleChange, values, handleSubmit, errors, handleBlur, touched } =
    useFormik({
      initialValues: {
        FirstName: "",
        LastName: "",
        email: "",
        password: "",
        ConfirmPassword: "",
      },
      validationSchema: schema,
      onSubmit: callApi,
    });
  return (
    <div className="flex justify-center items-center h-screen bg-cover bg-no-repeat bg-[url('https://tse1.mm.bing.net/th/id/OIP.nn8CQsrncHyC-RasmGfLSQHaEK?pid=Api&P=0&h=180')] px-4">
      <div className="flex flex-col items-center gap-6 w-full max-w-sm md:max-w-md bg-white/10 p-6 rounded-xl backdrop-blur-sm">
        <SiGnuprivacyguard className="text-white text-7xl md:text-9xl" />
        <form onSubmit={handleSubmit} className="flex flex-col gap-3 w-full">
          <Input
            label="FirstName"
            id="FirstName"
            value={values.FirstName}
            onChange={handleChange}
            onBlur={handleBlur}
            placeholder="First Name"
            touched={touched}
            error={errors.FirstName}
          />
          <Input
            label="LastName"
            id="LastName"
            value={values.LastName}
            onChange={handleChange}
            onBlur={handleBlur}
            placeholder="Last Name"
            touched={touched}
            error={errors.LastName}
          />
          <Input
            label="Email"
            id="email"
            value={values.email}
            onChange={handleChange}
            onBlur={handleBlur}
            placeholder="EMAIL"
            touched={touched}
            error={errors.email}
          />

          <Input
            label="Password"
            id="password"
            value={values.password}
            onChange={handleChange}
            onBlur={handleBlur}
            placeholder="PASSWORD"
            touched={touched}
            error={errors.password}
          />
          <Input
            label="Confirm Password"
            id="ConfirmPassword"
            value={values.ConfirmPassword}
            onChange={handleChange}
            onBlur={handleBlur}
            placeholder="Confirm Password"
            touched={touched}
            error={errors.ConfirmPassword}
          />

          <button
            type="submit"
            className="bg-white text-blue-950 px-4 py-2 mt-4 rounded hover:bg-blue-100 transition font-medium"
          >
            Submit
          </button>
          <p className="text-white text-sm self-center">
            Already have an account?{" "}
            <Link to="/LoginPage" className="hover:underline">
              Login
            </Link>{" "}
          </p>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
