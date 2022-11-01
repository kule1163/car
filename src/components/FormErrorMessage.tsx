interface Props {
  errorMessage: any;
}

const FormErrorMessage = ({ errorMessage }: Props) => {
  return (
    <>
      {errorMessage && (
        <p className="text-red-500 body-2">
          <span className="text-red-500">*</span>
          {errorMessage}
        </p>
      )}
    </>
  );
};

export default FormErrorMessage;
