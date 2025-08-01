import { SiGnuprivacyguard } from "react-icons/si";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import { Link } from "react-router-dom";
import Input from "./Input";

const SignUp = () => {
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

  const initialValues = {
    FirstName: "",
    LastName: "",
    email: "",
    password: "",
    ConfirmPassword: "",
  };

  return (
    <div className="flex justify-center items-center h-screen bg-cover bg-no-repeat bg-[url('https://tse1.mm.bing.net/th/id/OIP.nn8CQsrncHyC-RasmGfLSQHaEK?pid=Api&P=0&h=180')] px-4">
      <div className="flex flex-col items-center gap-6 w-full max-w-sm md:max-w-md bg-white/10 p-6 rounded-xl backdrop-blur-sm">
        <SiGnuprivacyguard className="text-white text-7xl md:text-9xl" />
        <Formik initialValues={initialValues} onSubmit={callApi} validationSchema={schema}>
        <Form className="flex flex-col gap-3 w-full">
          <Input
            label="FirstName"
            id="FirstName"
            name="FirstName"
            type="text"
            placeholder="First Name"
            
          />
          <Input
            label="LastName"
            id="LastName"
            name="LastName"
            type="text"
            placeholder="Last Name"
          />
          <Input
            label="Email"
            id="email"
            name="email"
            type="email"
            placeholder="Email"
          />

          <Input
            label="Password"
            id="password"
            name="Password"
            type="password"
            placeholder="Password"
          />
          <Input
            label="Confirm Password"
            id="ConfirmPassword"
            name="ConfirmPassword"
            type="password"
            placeholder="ConfirmPassword"
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
        </Form>
        </Formik>
      </div>
    </div>
  );
};

export default SignUp;