import { Input } from "@/components/ui/input";
import { PersonalInformationProps } from "./PersonalInformation";


export const NextOfKinInfo = ({register, errors}: PersonalInformationProps) => {
  return (
    <>
      <h2 className="text-base font-semibold leading-7 text-gray-900">
        Next Of Kin
      </h2>
      <p className="mt-1 text-sm leading-6 text-gray-600">
        Provide Next Of Kin details.
      </p>
      <Input {...register("relation")} placeholder="Relation" />
      {errors.relation && (
        <span className="text-red-500">{errors.relation.message}</span>
      )}
      <Input {...register("number")} placeholder="Phone Number" />
      {errors.number && (
        <span className="text-red-500">{errors.number.message}</span>
      )}
      <Input {...register("location")} placeholder="Location" />
      {errors.location && (
        <span className="text-red-500">{errors.location.message}</span>
      )}
    </>
  );
}
