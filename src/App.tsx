import Button from "./features/reusable-components/Button";

function App() {
  return (
    <main className="min-h-screen w-5/6 mx-auto ">
      <div className="py-5">
        <p className="text-3xl w-1/2 mx-auto ">
          Welcome to my playground, just playing around with react and UI
        </p>
        <Button>Click Me To Get Started</Button>
      </div>
    </main>
  );
}

export default App;
