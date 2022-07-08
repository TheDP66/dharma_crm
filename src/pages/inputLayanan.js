import moment from "moment";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import SearchCustomer from "../components/calonCustomer/SearchCustomer";
import DetailCustomer from "../components/DetailCustomer";
import DetailProduct from "../components/DetailProduct";
import SearchProduk from "../components/produk/SearchProduk";
import TableLayanan from "../components/TableLayanan";
import { insertBuyers } from "../redux/actions/buyersAction";

const InputLayanan = () => {
  const [custData, setCustData] = useState([]);
  const [prodData, setProdData] = useState([]);
  const [layananData, setLayananData] = useState([]);

  const dispatch = useDispatch();

  const handleAdd = () => {
    let newLayanan = [];
    newLayanan.push(prodData);

    setLayananData([...layananData, ...newLayanan]);
  };

  const handleRemove = (idx) => {
    const newLayanan = [...layananData];
    newLayanan.splice(idx, 1);
    setLayananData(newLayanan);
  };

  const handleSubmit = () => {
    const dibuat = moment().unix();

    dispatch(insertBuyers({ custData, layananData, dibuat }));

    setCustData([]);
    setProdData([]);
    setLayananData([]);
  };

  return (
    <div className="text-white mb-52">
      <div className="">
        <div className="text-4xl font-bold">Input Layanan</div>
        <br />

        <hr className="stroke-white" />
        <br />
      </div>

      <div className="">
        Pilih Calon Customer
        <SearchCustomer setCustData={setCustData} />
        <br />
        {custData.id !== undefined && (
          <>
            <DetailCustomer custData={custData} />
            <br />
            <hr className="stroke-white" />
            <br />
            Pilih Layanan
            <SearchProduk setProdData={setProdData} />
          </>
        )}
        <br />
        {prodData.id !== undefined && (
          <>
            <DetailProduct prodData={prodData} />

            <div
              onClick={() => handleAdd()}
              className="w-1/2 ml-auto col-span-2 cursor-pointer bg-blue-600 hover:bg-blue-700 hover:duration-300 rounded-lg my-auto py-2 text-center"
            >
              Tambah Layanan
            </div>
          </>
        )}
        <br />
        <hr className="stroke-white" />
        <br />
        Layanan
        <TableLayanan
          layanan={layananData}
          handleRemove={handleRemove}
          handleSubmit={handleSubmit}
        />
      </div>
    </div>
  );
};

export default InputLayanan;
