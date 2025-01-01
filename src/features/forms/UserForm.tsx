/* eslint-disable @typescript-eslint/no-unused-vars */
import { Input } from "@/components/ui/input";
import { User } from "@/types/User";
import { zodResolver } from "@hookform/resolvers/zod";
import { SubmitHandler, useForm } from "react-hook-form";
import { z } from "zod";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const formSchema = z.object({
  birthday: z.date(),
  email: z.string().email(),
  firstName: z.string(),
  lastName: z.string(),
  role: z.union([z.literal("editor"), z.literal("viewer")]),
});

type FormValues = z.infer<typeof formSchema>;

type UserFormProps = {
  onSuccess?: () => void;
  user?: User;
};

function UserForm({ user }: UserFormProps) {
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<FormValues>({
    defaultValues: user
      ? {
          birthday: new Date(user.birthday),
          firstName: user.firstName,
          lastName: user.lastName,
          email: user.email,
          role: user.role,
        }
      : undefined,
    resolver: zodResolver(formSchema),
  });

  type UserFormProps = {
    onSuccess?: () => void;
    user?: User;
  };

  const onSubmit: SubmitHandler<FormValues> = async (data) => {

    if(user){
    await fetch(`/api/user/${user.id}`, {
      method: "PATCH",
      body: JSON.stringify(data),
    });
    }else{
          await fetch("/api/user", {
            method: "POST",
            body: JSON.stringify(data),
          });
    }

    console.log(data);

  };

  return (
    <section className="w-1/2 my-10">
      <div>
        <p className="py-3">React Reusable Component User Form</p>
      </div>
      <form
        className="flex flex-col space-y-4"
        onSubmit={handleSubmit(onSubmit)}
      >
        <Input {...register("firstName")} placeholder="First Name" />
        <Input {...register("lastName")} placeholder="Last Name" />
        <Input {...register("email")} placeholder="Email" />
        <Input
          type="date"
          {...register("birthday")}
          placeholder="BirthDay Date"
        />
        <Select
          defaultValue={user ? user.role : undefined}
          onValueChange={(value: FormValues["role"]) => setValue("role", value)}
        >
          <SelectTrigger>
            <SelectValue placeholder="Select Role" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectLabel>Roles</SelectLabel>
              <SelectItem value="editor">Editor</SelectItem>
              <SelectItem value="viewer">Viewer</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
      </form>
    </section>
  );
}

export default UserForm;
