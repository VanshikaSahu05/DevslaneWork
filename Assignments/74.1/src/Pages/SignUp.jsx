import { SiGnuprivacyguard } from "react-icons/si";
import { withFormik } from "formik";
import * as Yup from "yup";
import { Link } from "react-router-dom";
import Input from "./Input";
import axios from "axios";

function callApi(values, bag) {
  axios;
  axios
    .post("https://myeasykart.codeyogi.io/signup", {
      fullName: values.FirstName + " " + values.LastName,
      email: values.email,
      password: values.password,
    })
    .then((response) => {
      console.log("Signup successful", response.data);
    })
    .catch((error) => {
      if (error.response) {
        console.log("Signup error", error.response.data);
        alert(
          "Signup failed: " +
            (error.response.data.message || JSON.stringify(error.response.data))
        );
      } else if (error.request) {
        console.log("No response received", error.request);
        alert("No response from server. Please try again later.");
      } else {
        console.log("Error", error.message);
        alert("Error: " + error.message);
      }
    });
  // console.log("called", values);
}

const schema = Yup.object().shape({
  FirstName: Yup.string().required("FirstName is required"),
  LastName: Yup.string().required("LastName is required"),
  email: Yup.string().email("Invalid Email").required("Email is required"),
  password: Yup.string()
    .min(6, "Password must be at least 6 characters")
    .required("Password is required"),
  ConfirmPassword: Yup.string()
    .oneOf([Yup.ref("password"), null], "Passwords must match")
    .required("Confirm Password is required"),
});

const initialValues = {
  FirstName: "",
  LastName: "",
  email: "",
  password: "",
  ConfirmPassword: "",
};

export const SignUp = ({
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
        <SiGnuprivacyguard className="text-white text-7xl md:text-9xl" />
        <form onSubmit={handleSubmit} className="flex flex-col gap-3 w-full">
          <Input
            label="FirstName"
            id="FirstName"
            name="FirstName"
            type="text"
            placeholder="First Name"
            value={values.FirstName}
            errors={errors.FirstName}
            touched={touched.FirstName}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          <Input
            label="LastName"
            id="LastName"
            name="LastName"
            type="text"
            placeholder="Last Name"
            value={values.LastName}
            errors={errors.LastName}
            touched={touched.LastName}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          <Input
            label="Email"
            id="email"
            name="email"
            type="email"
            placeholder="Email"
            value={values.email}
            errors={errors.email}
            touched={touched.email}
            onChange={handleChange}
            onBlur={handleBlur}
          />

          <Input
            label="Password"
            id="password"
            name="password"
            type="password"
            placeholder="Password"
            value={values.password}
            errors={errors.password}
            touched={touched.password}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          <Input
            label="Confirm Password"
            id="ConfirmPassword"
            name="ConfirmPassword"
            type="password"
            placeholder="ConfirmPassword"
            value={values.ConfirmPassword}
            errors={errors.ConfirmPassword}
            touched={touched.ConfirmPassword}
            onChange={handleChange}
            onBlur={handleBlur}
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
const myHoc = withFormik({
  initialValues: initialValues,
  validationSchema: schema,
  handleSubmit: callApi,
});
const easySign = myHoc(SignUp);
export default easySign;
