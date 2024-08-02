import Router from "./components/Router";

function App() {
  return (
    <main className="w-screen h-screen flex justify-center items-center font-['Pretendard']">
      <div className="w-144 flex flex-col gap-2 relative">
        <Router />
      </div>
    </main>
  );
}

export default App;
