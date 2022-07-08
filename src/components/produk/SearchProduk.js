import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";

const SearchProduk = ({ setProdData }) => {
  const { products } = useSelector((state) => state);
  const [prodCate, setProdCate] = useState([
    "Dedicated Connectivity",
    "Broadband Internet Connectivity",
    "Solusi Bisnis",
  ]);
  const [prodList, setProdList] = useState([]);

  useEffect(() => {
    setProdData(products);
  }, [products, setProdData]);

  const handleChangeP = (e) => {
    let { value } = e.target;

    if (value !== "") {
      setProdData(products.data.filter((prod) => prod.id + "" === value)[0]);
    } else {
      setProdData("");
    }
  };

  const handleChangeC = (e) => {
    let { value } = e.target;

    if (value !== "") {
      setProdList(products.data.filter((prod) => prod.category === value));
    }
  };

  const inputChangeI = (e) => {
    if (e.target.value === "") {
      setProdList(products.data);
    } else {
      setProdList(
        products.data.filter((prod) =>
          prod.title.toLowerCase().includes(e.target.value.toLowerCase())
        )
      );
    }
  };

  return (
    <div className="grid grid-cols-12 gap-4">
      <input
        type="text"
        className="text-black py-1 px-2 col-span-12 lg:col-span-4 rounded-md"
        onChange={(e) => inputChangeI(e)}
        placeholder={"Filter produk berdasarkan nama"}
      />

      <select
        name="categories"
        id="categories"
        className="bg-gray-800 text-base focus:border-white border-[1px] rounded-md py-1 px-1 col-span-12 md:col-span-6 lg:col-span-4"
        onChange={(e) => handleChangeC(e)}
      >
        <option value={""} defaultValue className="text-center">
          -- Pilih Kategori --
        </option>
        {prodCate.map((prod, index) => (
          <option key={index} value={prod} className="text-center">
            {prod}
          </option>
        ))}
      </select>

      <select
        name="products"
        id="products"
        className="bg-gray-800 text-base focus:border-white border-[1px] rounded-md py-1 px-1 col-span-12 md:col-span-6 lg:col-span-4"
        onChange={(e) => handleChangeP(e)}
      >
        <option value={""} selected={true} className="text-center">
          -- Pilih Produk --
        </option>
        {products.data &&
          prodList.map((prod, index) => (
            <option key={index} value={prod.id} className="text-center">
              {prod.title}
            </option>
          ))}
      </select>
    </div>
  );
};

export default SearchProduk;
