import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Error from "./components/errorPage";
import RootLayout from "./pages/root";
import Properties from "./components/properties/index";
import PropertyDetail from "./components/propertyDetail/index";
import "./App.css";
const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <Error />,
    children: [
      { index: "true", element: <Properties /> },
      {
        path: "property/:id",
        element: <PropertyDetail />,
      },
    ],
  },
]);

function App() {
  return (
    <>
      <div className="body">
        <RouterProvider router={router} />
      </div>
    </>
  );
}

export default App;
