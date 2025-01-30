import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
function App() {
  return (
    <>
      <h1 className="text-3xl bg-greenD animate-rotating font-bold underline">
        Hello world!
      </h1>
      <Suspense fallback={<div>Loading...</div>}>
        <RouterProvider router={router} />
      </Suspense>
    </>
  );
}

export default App;
