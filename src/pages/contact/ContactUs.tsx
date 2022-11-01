import { useForm, FormProvider, SubmitHandler } from "react-hook-form";
import FormInput from "../../components/FormInput";
import { zodResolver } from "@hookform/resolvers/zod";
import { contactSchema, ContactInput } from "./formValidation";
import PrimaryBox from "../../components/framer/PrimaryBox";
import PrimaryButton from "../../components/framer/PrimaryButton";

const ContactUs = () => {
  const methods = useForm<ContactInput>({
    resolver: zodResolver(contactSchema),
  });
  const { register, handleSubmit } = methods;

  const onSubmit: SubmitHandler<ContactInput> = (data) => {
    console.log(data);
  };
  return (
    <div id="contact" className="flex flex-col gap-16">
      <div className="w-full m-container">
        <div className="flex items-center w-full lg:flex-col lg:child:text-center">
          <div className="flex justify-between flex-1 itemx-center lg:justify-center">
            <PrimaryBox direction="left">
              <div className="flex flex-col gap-5">
                <div className="heading heading-1">Contact us</div>
                <div className="w-7/12 body body-1 lg:mb-8 lg:w-full">
                  To find out more information about cars and quotes, fill out
                  the form on the side or contact us by phone.
                </div>
              </div>
            </PrimaryBox>
          </div>
          <div className="flex-1 w-full">
            <PrimaryBox direction="right">
              <FormProvider {...methods}>
                <form
                  onSubmit={handleSubmit(onSubmit)}
                  className="flex flex-col w-full gap-10"
                >
                  <div className="grid flex-1 w-full grid-cols-2 gap-x-9 gap-y-16 ">
                    <div className="w-full col-span-1">
                      <FormInput
                        label="Your Name"
                        name="namee"
                        errorMessage={methods.formState.errors.name}
                        type="text"
                      />
                    </div>
                    <div className="w-full col-span-1">
                      <FormInput
                        label="Your Email"
                        name="email"
                        errorMessage={methods.formState.errors.name}
                        type="text"
                      />
                    </div>
                    <div className="w-full col-span-1">
                      <FormInput
                        label="Phone Number"
                        name="phone"
                        errorMessage={methods.formState.errors.name}
                        type="text"
                      />
                    </div>
                    <div className="w-full col-span-1">
                      <FormInput
                        label="Country"
                        name="country"
                        errorMessage={methods.formState.errors.name}
                        type="text"
                      />
                    </div>
                    <div className="w-full col-span-2">
                      <textarea
                        {...register("message")}
                        placeholder="Message"
                        className="text-white placeholder-white input body-2"
                      />
                    </div>
                  </div>
                  <div className="self-start flex-grow-0">
                    <PrimaryButton type="submit">
                      <span>send</span>
                    </PrimaryButton>
                  </div>
                </form>
              </FormProvider>
            </PrimaryBox>
          </div>
        </div>
      </div>
      <div className="h-[45vh] w-full">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3506.2233913121413!2d77.4051603706222!3d28.50292593193056!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce626851f7009%3A0x621185133cfd1ad1!2sGeeksforGeeks!5e0!3m2!1sen!2sin!4v1585040658255!5m2!1sen!2sin"
          width="100%"
          height="100%"
          aria-hidden="false"
        ></iframe>
      </div>
    </div>
  );
};

export default ContactUs;
