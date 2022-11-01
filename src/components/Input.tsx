import { HTMLInputTypeAttribute } from "react";

interface Props {
  label: string;
  type: HTMLInputTypeAttribute;
}

const Input = ({ label, type }: Props) => {
  return (
    <label className="relative m-20 cursor-pointer">
      <input
        required
        type={type}
        className="body-1 border-b-2 !border-b-white bg-transparent text-white placeholder-opacity-0 outline-none transition duration-200"
      />
      <span className="body-1 input-text absolute left-0 bottom-0 !text-white text-opacity-80 transition duration-200">
        {label}
      </span>
    </label>
  );
};

export default Input;
