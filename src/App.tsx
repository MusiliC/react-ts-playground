import MyForm from "./features/forms/MyForm";
import UserForm from "./features/forms/UserForm";



function App() {
  return (
    <main className="min-h-screen w-5/6 mx-auto ">
      <div className="py-5">
        <p className="text-3xl w-1/2 text-start ">
          Welcome to my playground, just playing around with react and UI
        </p>
      </div>
      {/* components */}
      <div>      
        <MyForm/>
        <UserForm onSuccess={()=> {}}  user={{
          id: 1,
          birthday: new Date(),
          firstName: "John",
          lastName: "Doe",
          email:"doe@gmail.com",
          role: "editor"
        }} />
      </div>
    </main>
  );
}

export default App;
