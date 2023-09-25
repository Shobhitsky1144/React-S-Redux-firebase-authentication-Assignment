import React, { useState } from "react";
import { Link } from "react-router-dom";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import Loader from "../components/Loader";
import { toast } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";
import { registerUser } from "../redux/actions/authUserActions";

function RegisterPage() {
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [cpassword, setCPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const auth = getAuth();

  const validateForm = (e) => {
    e.preventDefault();

    if (!email || !password || !cpassword) {
      toast.error("Please fill all the fields.");
      return false;
    } else if (password.length < 6) {
      toast.error("Password length must be greater than 6 characters.");
      return false;
    } else if (password !== cpassword) {
      toast.error("Passwords do not match.");
      return false;
    } else {
      handleSubmit();
    }
  };

  const handleSubmit = () => {
    dispatch(registerUser(auth, email, password,name,phone));
  };

  return (
    <div className="register-parent mt-4">
      {loading && <Loader />}
      <div className="register-top "></div>
      <div className="row justify-content-center">
        <div className="col-md-5">
          <lottie-player
            src="https://assets7.lottiefiles.com/packages/lf20_yr6zz3wv.json"
            background="transparent"
            speed="1"
            loop
            autoplay
          ></lottie-player>
        </div>

        <div className="col-md-6 z1">
          <div className="register-form">
            <h2>Register</h2>

            <hr />

            <input
              type="text"
              className="form-control"
              placeholder="email"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
            <input
              type="password"
              className="form-control"
              placeholder="password"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
            <input
              type="text"
              className="form-control"
              placeholder="confirm password"
              value={cpassword}
              onChange={(e) => {
                setCPassword(e.target.value);
              }}
            />
             <input
              type="text"
              className="form-control"
              placeholder="name"
              value={name}
              onChange={(e) => {
                setName(e.target.value);
              }}
            />
             <input
              type="text"
              className="form-control"
              placeholder="phone"
              value={phone}
              onChange={(e) => {
                setPhone(e.target.value);
              }}
            />

            <button className="my-3 auth-btn" onClick={validateForm}>
              REGISTER
            </button>

            <hr />

            <Link to="/login">Click Here To Login</Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RegisterPage;
