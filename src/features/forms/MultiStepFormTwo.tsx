import { useState } from "react";
import { progressStepsType } from "./MultiStepForm";
import ProgressBar from "../ui/ProgressBar";
import PersonalInformation from "./PersonalInformation";
import AddressInformation from "./AddressInformation";
import { NextOfKinInfo } from "./NextOfKinInfo";
import FormProgressButtons from "../ui/FormProgressButtons";
import { SubmitHandler, useForm } from "react-hook-form";
import { MyMultiStepFormSchema } from "@/types/MyMultiStepFormSchema";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import MultiFormSubmitPage from "./MultiFormSubmitPage";

export type MemberInputs = z.infer<typeof MyMultiStepFormSchema>;

const steps: progressStepsType[] = [
  {
    id: "Step 1",
    name: "Personal Information",
    fields: ["firstName", "lastName", "email"],
  },
  {
    id: "Step 2",
    name: "Address",
    fields: ["country","city", "state"],
  },
  {
    id: "Step 3",
    name: "Next of Kin",
    fields: ["relation", "number", "location"],
  },
  { id: "Step 4", name: "Complete" },
];

function MultiStepFormTwo() {
  const {
    register,
    handleSubmit,
    watch,
    reset,
    trigger,
    formState: { errors },
  } = useForm<MemberInputs>({
    resolver: zodResolver(MyMultiStepFormSchema),
  });

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [previousStep, setPreviousStep] = useState(0);
  const [currentStep, setCurrentStep] = useState(0);
  const [formData, setFormData] = useState<Partial<MemberInputs>>({});

  type FieldName = keyof MemberInputs;

  const next = async () => {
    const fields = steps[currentStep].fields;
    const output = await trigger(fields as FieldName[], {
      shouldFocus: true,
    });
    if (!output) return;
  
    const currentData = watch();
    setFormData((prev) => ({ ...prev, ...currentData }));

    if (currentStep < steps.length - 1) {
      setPreviousStep(currentStep);
      setCurrentStep((step) => step + 1);
    }
  };

  const prev = () => {
    if (currentStep > 0) {
      setPreviousStep(currentStep);
      setCurrentStep((step) => step - 1);
    }
  };

  const handleFormSubmit: SubmitHandler<MemberInputs> = (data) => {
    console.log(data);
    reset();
  };

  return (
    <div className="w-1/2 my-10">
      <div>
        <p className="py-3">My Multi-Step Form</p>
      </div>

      <div>
        <ProgressBar steps={steps} currentStep={currentStep} />
      </div>

      {/* form */}
      <form
        action=""
        className="my-5"
        onSubmit={handleSubmit(handleFormSubmit)}
      >
        {currentStep === 0 && (
          <PersonalInformation errors={errors} register={register} />
        )}
        {currentStep === 1 && (
          <AddressInformation errors={errors} register={register} />
        )}
        {currentStep === 2 && (
          <NextOfKinInfo errors={errors} register={register} />
        )}
        {currentStep === 3 && <MultiFormSubmitPage data={formData} />}
      </form>

      <FormProgressButtons
        steps={steps}
        currentStep={currentStep}
        prev={prev}
        next={next}
      />
    </div>
  );
}

export default MultiStepFormTwo;
