import { useField } from "formik";
import { FaUser } from "react-icons/fa";
const Input = ({name,label, id, ...rest }) => {
    const field = useField(name)
    const [data,meta] = field;
  return (
    <>
      <div className="flex gap-2 items-center border-2 border-white px-3 py-2 rounded">
        <FaUser className="text-white" />
        <label htmlFor={id} className="sr-only">
          {label}
        </label>
        <input
        {...rest}
          id={id}
          name={name}
          value={data.value}
          onChange={data.onChange}
          onBlur={data.onBlur}
          className="pl-2 rounded-md w-full outline-none bg-transparent  placeholder-white"
        />
      </div>
      {meta.touched && meta.error && <p className="text-red-500 text-sm">{meta.error}</p>}
    </>
  );
};

export default Input;
