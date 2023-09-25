import React, { useState } from "react";
import { Link } from "react-router-dom";
import { getAuth } from "firebase/auth";
import { toast } from "react-toastify";
import Loader from "../components/Loader";
import { useDispatch } from "react-redux";
import { loginUser } from "../redux/actions/authUserActions";

function LoginPage() {
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const auth = getAuth();

  const validateForm = (e) => {
    e.preventDefault();

    if (!email || !password) {
      toast.error("Please fill all the fields.");
      return false;
    } else {
      handleSubmit();
    }
  };

  const handleSubmit = () => {
    dispatch(loginUser(auth, email, password));
  };
  return (
    <div className="login-parent">
      {loading && <Loader />}
      <div className="row justify-content-center">
        <div className="col-12 col-sm-12 col-lg-6 order-sm-2 order-2 z1">
          <div className="login-form">
            <h2>Login</h2>

            <hr />

            <input
              type="text"
              className="form-control"
              placeholder="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              type="password"
              className="form-control"
              placeholder="password"
              value={password}
              onChange={(e) => 
                setPassword(e.target.value)
              }
            />

            <button className="my-3  auth-btn"  onClick={validateForm}>
              Login
            </button>

            <hr />

            <Link to="/register">Click Here To Register</Link>
          </div>
        </div>
        <div className="col-12 col-sm-12 col-lg-6 order-sm-1 order-1 z1">
          <lottie-player
            src="https://assets7.lottiefiles.com/packages/lf20_yr6zz3wv.json"
            background="transparent"
            speed="1"
            loop
            autoplay
          ></lottie-player>
        </div>
      </div>

      <div className="login-bottom "></div>
    </div>
  );
}

export default LoginPage;
