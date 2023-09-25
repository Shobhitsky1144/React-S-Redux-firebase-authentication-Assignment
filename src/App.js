
import "./App.css";

import {
  Route,
  Switch,

} from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";

import "./stylesheets/Layout.css";
import "./stylesheets/authentication.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Home from "./pages/Home";
import { useDispatch, useSelector } from "react-redux";

function App() {
  return (
    <div className="App">
      <ToastContainer />

      <Switch>
       
        <Route exact path="/login">
          <LoginPage />
        </Route>
        <Route exact path="/register">
          <RegisterPage />
        </Route>

        <Route exact path="/">
          <ProtectedRoutes>
            <Home />
          </ProtectedRoutes>
        </Route>
      
      </Switch>
    </div>
  );
}

export default App;

export const ProtectedRoutes = ({ children }) => {
  const { currentUser } = useSelector((state) => state.loginUserReducer);

  if (currentUser) {
    return children;
  } else {
    return (window.location.href = "/login");
  }
};
