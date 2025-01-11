// import MultiStepForm from "@/features/forms/MultiStepForm";
import MultiStepFormTwo from "@/features/forms/MultiStepFormTwo";
import MyForm from "@/features/forms/MyForm";
import ReactSelect from "@/features/forms/ReactSelect";
import ReactSelectNoShadcn from "@/features/forms/ReactSelectNoShadcn";
import UserForm from "@/features/forms/UserForm";

function ParentForm() {
  return (
    <div>
      <MyForm />
      <UserForm
        onSuccess={() => {}}
        user={{
          id: 1,
          birthday: new Date(),
          firstName: "John",
          lastName: "Doe",
          email: "doe@gmail.com",
          role: "editor",
        }}
      />
      {/* <MultiStepForm /> */}
      <MultiStepFormTwo/>
      <ReactSelect/>
      <ReactSelectNoShadcn/>
    </div>
  );
}

export default ParentForm