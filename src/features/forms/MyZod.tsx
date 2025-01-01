
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

const userFormSchema = z.object({
  firstName: z.string().nullish(),
  email: z.string().email(),
  profileUrl: z.string().url(),
  age: z.number().min(18).optional(),
  friends: z.array(z.string()).nullable(),
  settings: z.object({
    isSubscribed: z.boolean()
  })
});


// creating user type from zod definition
type UserForm = z.infer<typeof userFormSchema>;

// const user: User = {
//   firstName: "Master",
//   email: "master@gmail.com",
//   profileUrl: "https://master.com",
//   // age: 19, optional -> its not a must you state the property
//   // friends: ["Brian"], -> nullable -> its  a must you state the property and you can give it to null
//   friends: null,
//   settings: {
//     isSubscribed: true
//   },
// };


// validate -> user parse()/or safeParse()
// console.log(userSchema.parse(user));



function MyZod() {
  const form = useForm<UserForm>({
    resolver: zodResolver(userFormSchema),
  });

  function handleSubmit(data: UserForm) {
    const result = userFormSchema.safeParse(data);
    if (result.success) {
      console.log(result.data);
      // handle success
    } else {
      console.log(result.error.errors);
      // handle error
    }

  }
  return <div>Zod Tut</div>;

}

export default MyZod
