import { Input } from "@/components/ui/input";
import { PersonalInformationProps } from "./PersonalInformation";


export const NextOfKinInfo = ({register}: PersonalInformationProps) => {
  return (
    <>
      <h2 className="text-base font-semibold leading-7 text-gray-900">
        Next Of Kin
      </h2>
      <p className="mt-1 text-sm leading-6 text-gray-600">
        Provide Next Of Kin details.
      </p>
      <Input {...register("relation")} placeholder="Relation" />
      <Input {...register("number")} placeholder="Phone Number" />
      <Input {...register("location")} placeholder="Location" />
    </>
  );
}
