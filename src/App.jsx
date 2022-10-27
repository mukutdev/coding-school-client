import { RouterProvider } from "react-router-dom";
import "./App.css";
import { router } from "./routes/Routes/Routes";

function App() {
  return (
    <div className="App bg-white dark:bg-slate-900">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
