import { Button } from "@/components/ui/button";
import { type SubmitHandler, useForm } from "react-hook-form";

type FormFields = {
  email: string;
  password: string;
};

function MyForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormFields>();

  const onSubmit: SubmitHandler<FormFields> = (data) => {
    console.log(data);
  };

  return (
    <section className="w-1/2 mt-10" onSubmit={handleSubmit(onSubmit)}>
      <div>
        <p className="py-3">React Hook Form</p>
      </div>
      <form className="flex flex-col space-y-4">
        <input
          {...register("email", {
            required: "Email is required",
            validate: (value) => {
              if (!value.includes("@")) {
                return "Email must contain @";
              }
              return true;
            },
          })}
          type="text"
          className="border border-gray-500 rounded-sm p-2"
          placeholder="Email"
        />
        {errors.email && (
          <span className="text-red-500">{errors.email.message}</span>
        )}
        <input
          {...register("password", {
            required: "Password is required",
            minLength: {
              value: 8,
              message: "Password must be at least 8 characters",
            },
          })}
          type="text"
          className="border border-gray-500 rounded-sm p-2"
          placeholder="Password"
        />
        {errors.password && (
          <span className="text-red-500">{errors.password.message}</span>
        )}
        <Button type="submit">Submit</Button>
      </form>
    </section>
  );
}

export default MyForm;
