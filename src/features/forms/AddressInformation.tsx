import { Input } from "@/components/ui/input";
import { PersonalInformationProps } from "./PersonalInformation";


const AddressInformation = ({ register }: PersonalInformationProps) => {
  return (
    <>
      <h2 className="text-base font-semibold leading-7 text-gray-900">
        Address
      </h2>
      <p className="mt-1 text-sm leading-6 text-gray-600">
        Address where you can receive mail.
      </p>
      <Input {...register("country")} placeholder="Country" />
      <Input {...register("city")} placeholder="City" />
      <Input {...register("state")} placeholder="State" />
    </>
  );
};

export default AddressInformation;