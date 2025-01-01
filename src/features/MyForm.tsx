import { Button } from "@/components/ui/button";
import { zodResolver } from "@hookform/resolvers/zod";
import { type SubmitHandler, useForm } from "react-hook-form";
import { z } from "zod";


const fromSchema = z.object({
    email: z.string().email(),
    password: z.string().min(8),
})

type FormFields = z.infer<typeof fromSchema>

function MyForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormFields>({
    resolver: zodResolver(fromSchema),
  });

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
          {...register("email")}
          type="text"
          className="border border-gray-500 rounded-sm p-2"
          placeholder="Email"
        />
        {errors.email && (
          <span className="text-red-500">{errors.email.message}</span>
        )}
        <input
          {...register("password")}
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
