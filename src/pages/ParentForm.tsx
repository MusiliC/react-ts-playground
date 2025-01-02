import MultiStepForm from "@/features/forms/MultiStepForm";
import MyForm from "@/features/forms/MyForm";
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
      <MultiStepForm />
    </div>
  );
}

export default ParentForm