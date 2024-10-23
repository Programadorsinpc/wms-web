import "./App.css";
import MainLayout from "./layouts/MainLayout";

function App() {
  return (
    <>
      {/* <h1 className="text-3xl font-bold underline">Hello world!</h1> */}
      <MainLayout>
        <div className="self-center text-2xl text-black">Contenido dentro del Layout</div>
      </MainLayout>
    </>
  );
}

export default App;
