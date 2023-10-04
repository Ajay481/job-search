import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./App.css";
import LoginScreen from "./components/LoginScreen";
import LandingScreen from "./components/LandingScreen";
import JobDetail from "./components/JobDetail";
import { Provider } from "react-redux";
import store from "./utils/store";
import Preview from "./components/Preview";

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <LoginScreen />,
  },
  {
    path: "/landing",
    element: <LandingScreen />,
  },
  {
    path: "/jobdetail/:jobId",
    element: <JobDetail />,
  },
  {
    path: "/preview/:jobId",
    element: <Preview/>,
  },
]);

function App() {
  return (
    <div>
      <Provider store={store}>
        <RouterProvider router={appRouter} />
      </Provider>
    </div>
  );
}

export default App;
