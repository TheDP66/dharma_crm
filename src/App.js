import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import PageRender from "./customRouter/PageRender";
import PrivateRouter from "./customRouter/PrivateRouter";
import NavBar from "./components/NavBar";
import { useEffect } from "react";

import "./index.css";
import { useDispatch, useSelector } from "react-redux";

import dataCustomers from "./dataDummy/customers.json";
import { getCustomers } from "./redux/actions/customersAction";

import dataProducts from "./dataDummy/products.json";
import { getProducts } from "./redux/actions/productsAction";
import Login from "./pages/login";
import Register from "./pages/register";

function App() {
  const { customers, products, auth } = useSelector((state) => state);
  const dispatch = useDispatch();

  useEffect(() => {
    if (customers.data.length === 0) {
      dispatch(getCustomers({ customers: dataCustomers.users }));
    }
  }, [customers.data.length, dispatch]);

  useEffect(() => {
    if (products.data.length === 0) {
      dispatch(getProducts({ products: dataProducts.products }));
    }
  }, [products.data.length, dispatch]);

  return (
    <Router>
      {auth.login && <NavBar />}

      <div className="bg-primary w-full px-[2vw] lg:px-[20vw] pt-5 overflow-y-auto h-screen">
        <Routes>
          <Route exact path="/" element={<Login />} />
          <Route exact path="/register" element={<Register />} />

          <Route exact path="/" element={<PrivateRouter />}>
            <Route exact path="/:page" element={<PageRender />} />
          </Route>
          <Route exact path="/" element={<PrivateRouter />}>
            <Route exact path="/:page/:id" element={<PageRender />} />
          </Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
