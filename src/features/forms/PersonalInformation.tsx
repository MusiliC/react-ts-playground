import { Input } from "@/components/ui/input";
import { type UseFormRegister } from "react-hook-form";
import { MemberInputs } from "./MultiStepFormTwo";

export type PersonalInformationProps = {
  register: UseFormRegister<MemberInputs>;
};

function PersonalInformation({ register }: PersonalInformationProps) {
  return (
    <>
      <h2 className="text-base font-semibold leading-7 text-gray-900">
        Personal Information
      </h2>
      <p className="mt-1 text-sm leading-6 text-gray-600">
        Provide your personal details.
      </p>
      <Input {...register("firstName")} placeholder="First Name" />
      <Input {...register("lastName")} placeholder="Last Name" />
      <Input {...register("email")} placeholder="Email" />
    </>
  );
}

export default PersonalInformation;
