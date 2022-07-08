import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import logout from "../images/logout.svg";
import { AUTH_TYPES } from "../redux/actions/authAction";

const ModalAvatar = ({ setIsAvatar }) => {
  const { auth } = useSelector((state) => state);
  const dispatch = useDispatch();

  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch({
      type: AUTH_TYPES.LOGOUT,
    });

    navigate("/");
  };

  return (
    <div
      onClick={() => setIsAvatar(false)}
      className="status_modal fixed top-0 left-0 w-full h-screen z-20 text-black drop-shadow-md"
    >
      <div className="follow_box w-[200px] border-1 border-solid border-black rounded-md bg-white p-[10px_10px] absolute top-[50px] right-[28px] overflow-auto">
        <div className="status_header flex justify-between items-center mb-1">
          <div className="mx-auto font-medium pb-3">{auth.logged}</div>
        </div>
        <div
          onClick={() => handleLogout()}
          className="text-white rounded-md flex flex-row justify-between px-4 py-2 items-center cursor-pointer bg-slate-700 hover:duration-300"
        >
          <img
            src={logout}
            alt="logout"
            className="h-5 w-5 fill-white stroke-white fonbold"
          />
          <div className="text-base font-medium">Log Out</div>
        </div>
      </div>
    </div>
  );
};

export default ModalAvatar;
