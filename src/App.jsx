import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import Signup from "./pages/SignupPage";
import Login from "./pages/LoginPage";
import ExpenseTrackerPage from "./pages/ExpenseTrackerPage";
import Layout from "./UI/Layout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />, // 👈 wrap everything in Layout
    children: [
      { index: true, element: <Home /> }, // Home as default
      { path: "login", element: <Login /> },
      { path: "signup", element: <Signup /> },
      { path: "Expenses", element: <ExpenseTrackerPage /> },
    ],
  },
]);
function App() {
  return (
    <div className="w-full">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
