import { HTMLInputTypeAttribute } from "react";
import { useFormContext } from "react-hook-form";
import FormErrorMessage from "./FormErrorMessage";

interface Props {
  name: string;
  type: HTMLInputTypeAttribute;
  label: string;
  errorMessage: any;
  textarea?: boolean;
}

const FormInput = ({ name, type, label, errorMessage, textarea }: Props) => {
  const { register } = useFormContext();

  return (
    <div className="flex flex-col w-full">
      <label className="relative w-full cursor-pointer">
        <input {...register(name)} required type={type} className="input" />
        <span className="body-2 input-text absolute left-0 bottom-0 !text-white text-opacity-80 transition duration-200">
          {label}
        </span>
      </label>
      {errorMessage && <FormErrorMessage errorMessage={errorMessage} />}
    </div>
  );
};

export default FormInput;
