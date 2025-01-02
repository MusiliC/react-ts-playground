import { Input } from "@/components/ui/input";
import { FieldErrors, type UseFormRegister } from "react-hook-form";
import { MemberInputs } from "./MultiStepFormTwo";

export type PersonalInformationProps = {
  register: UseFormRegister<MemberInputs>;
  errors: FieldErrors<MemberInputs>;
};

function PersonalInformation({ register, errors }: PersonalInformationProps) {
  return (
    <>
      <h2 className="text-base font-semibold leading-7 text-gray-900">
        Personal Information
      </h2>
      <p className="mt-1 text-sm leading-6 text-gray-600">
        Provide your personal details.
      </p>
      <Input {...register("firstName")} placeholder="First Name" />
      {errors.firstName && (
        <span className="text-red-500">{errors.firstName.message}</span>
      )}
      <Input {...register("lastName")} placeholder="Last Name" />
      {errors.lastName && (
        <span className="text-red-500">{errors.lastName.message}</span>
      )}
      <Input {...register("email")} placeholder="Email" />
      {errors.email && (
        <span className="text-red-500">{errors.email.message}</span>
      )}
    </>
  );
}

export default PersonalInformation;
