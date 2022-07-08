import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { AUTH_TYPES } from "../redux/actions/authAction";

const Login = () => {
  // membuat objek untuk state awal
  const initialState = { username: "", password: "" };
  // memasangkan initial state ke userData
  const [userData, setUserData] = useState(initialState);
  const { username, password } = userData;

  const [typePass, setTypePass] = useState(false);

  const { auth } = useSelector((state) => state);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleChangeInput = (e) => {
    const { name, value } = e.target;

    setUserData({
      ...userData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    let ada = false;

    for (let idx = 0; idx < auth.user.length; idx++) {
      if (auth.user[idx].username === username) {
        if (auth.user[idx].password === password) {
          ada = true;
          dispatch({
            type: AUTH_TYPES.LOGIN,
            payload: { login: true, user: auth.user[idx].username },
          });
          navigate("/calonCustomer");
        }
      }
    }

    if (!ada) {
      alert("Username/password salah!");
    }
  };

  return (
    <div className="w-full min-h-full flex justify-center items-center rounded-md">
      <form
        onSubmit={handleSubmit}
        className={
          "bg-white text-white bg-opacity-5 max-w-[400px] w-full border-[1px] px-12 py-6 justify-center rounded-lg"
        }
      >
        <div className="mb-4 text-white text-4xl tracking-widest hover:duration-300 hover:text-secondary text-center">
          PT. SMART
        </div>
        <hr />
        <br />
        <div className="mb-3">
          <div className="mb-4">
            <label htmlFor="username" className="text-base pl-3 mb-3">
              Username
            </label>
            <input
              type="text"
              className="text-black w-full py-2 px-3 mt-2 rounded-lg ring-neutral-300 ring-1 focus:outline-none focus:ring-neutral-500 focus:ring-2 focus:border-neutral-200"
              id="username"
              name="username"
              value={username}
              onChange={handleChangeInput}
              placeholder="Enter your username"
              autoComplete="username"
            />
          </div>
        </div>
        <div className="mb-3">
          <div className="mb-4">
            <label htmlFor="password" className="text-base pl-3 mb-3">
              Password
            </label>
            <div className="pass">
              <input
                type={typePass ? "text" : "password"}
                className="text-black w-full py-2 px-3 mt-2 rounded-lg ring-neutral-300 ring-1 focus:outline-none focus:ring-neutral-500 focus:ring-2 focus:border-neutral-200"
                id="password"
                onChange={handleChangeInput}
                value={password}
                name="password"
                autoComplete="current-password"
                placeholder="Enter your password"
              />
              <small
                onClick={() => setTypePass(!typePass)}
                className="text-white font-medium ml-[calc(100%_-_31px)] w-full cursor-pointer opacity-75"
              >
                {typePass ? "Hide" : "Show"}
              </small>
            </div>
          </div>
        </div>
        <button
          type="submit"
          className="w-full border-[1px] py-1 rounded-md mt-3 hover:bg-white hover:text-black hover:duration-300"
          disabled={username && password ? false : true}
        >
          Login
        </button>

        <p className="my-2 text-sm">
          You don't have an account?{" "}
          <Link to={"/register"} style={{ color: "crimson" }}>
            Register Now
          </Link>
        </p>
      </form>
    </div>
  );
};

export default Login;
