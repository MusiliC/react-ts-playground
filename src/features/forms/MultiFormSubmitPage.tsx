import { Button } from "@/components/ui/button"
import { MemberInputs } from "./MultiStepFormTwo";



type MultiFormSubmitPageProps = {
  data: Partial<MemberInputs>; 
};

const MultiFormSubmitPage = ({ data }: MultiFormSubmitPageProps) => {
  return (
    <div>
      <div>
        <h2 className="text-base font-semibold leading-7 text-gray-900">
          Confirm Data
        </h2>
      </div>

      <div className="py-5 grid grid-cols-1 gap-x-8 gap-y-5 sm:grid-cols-2">
        <p>First Name: {data.firstName || "N/A"}</p>
        <p>Last Name: {data.lastName || "N/A"}</p>
        <p>Email: {data.email || "N/A"}</p>
        <p>Country: {data.country || "N/A"}</p>
        <p>City: {data.city || "N/A"}</p>
        <p>State: {data.state || "N/A"}</p>
        <p>Next Of Kin: {data.relation || "N/A"}</p>
        <p>Location: {data.location || "N/A"}</p>
        <p>Number: {data.number || "N/A"}</p>
      </div>

      <Button type="submit">Submit</Button>
    </div>
  );
};

export default MultiFormSubmitPage