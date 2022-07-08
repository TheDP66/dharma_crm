import { useSelector } from "react-redux";
import { Route, Navigate, Outlet } from "react-router-dom";

const PrivateRouter = ({ props }) => {
  const { auth } = useSelector((state) => state);

  return auth.login ? <Outlet /> : <Navigate to="/" />;
};

export default PrivateRouter;
