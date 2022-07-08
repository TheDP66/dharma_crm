import React, { useState } from "react";
import DetailProduct from "../components/DetailProduct";
import SearchProduk from "../components/produk/SearchProduk";

const Produk = () => {
  const [prodData, setProdData] = useState([]);

  return (
    <div className="text-white">
      <div className="">
        <div className="text-4xl font-bold">Master Produk</div>
        <br />

        <SearchProduk setProdData={setProdData} />
      </div>

      <br />
      <hr className="stroke-white" />
      <br />

      {prodData.id !== undefined ? (
        <DetailProduct prodData={prodData} />
      ) : (
        <></>
      )}
    </div>
  );
};

export default Produk;
