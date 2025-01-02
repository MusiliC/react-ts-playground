import { Input } from "@/components/ui/input";
import { PersonalInformationProps } from "./PersonalInformation";


const AddressInformation = ({ register, errors }: PersonalInformationProps) => {
  return (
    <>
      <h2 className="text-base font-semibold leading-7 text-gray-900">
        Address
      </h2>
      <p className="mt-1 text-sm leading-6 text-gray-600">
        Address where you can receive mail.
      </p>
      <Input {...register("country")} placeholder="Country" />
      {errors.country && (
        <span className="text-red-500">{errors.country.message}</span>
      )}
      <Input {...register("city")} placeholder="City" />
      {errors.city && (
        <span className="text-red-500">{errors.city.message}</span>
      )}
      <Input {...register("state")} placeholder="State" />
      {errors.state && (
        <span className="text-red-500">{errors.state.message}</span>
      )}
    </>
  );
};

export default AddressInformation;