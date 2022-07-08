import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";

const SearchCustomer = ({ setCustData }) => {
  const { customers } = useSelector((state) => state);
  const [custList, setCustList] = useState([]);

  const handleChange = (e) => {
    let { value } = e.target;

    if (value !== "") {
      setCustData(customers.data.filter((cust) => cust.id + "" === value)[0]);
    } else {
      setCustData("");
    }
  };

  const inputChange = (e) => {
    if (e.target.value === "") {
      setCustList(customers.data);
    } else {
      setCustList(
        customers.data.filter(
          (cust) =>
            cust.firstName
              .toLowerCase()
              .includes(e.target.value.toLowerCase()) ||
            cust.lastName.toLowerCase().includes(e.target.value.toLowerCase())
        )
      );
    }
  };

  useEffect(() => {
    if (custList.length === 0) {
      setCustList(customers.data);
    }
  }, [custList.length, customers.data]);

  return (
    <div className="grid grid-cols-12 gap-4">
      <input
        type="text"
        className="text-black py-1 px-2 lg:col-span-4 md:col-span-6 col-span-12 rounded-md"
        placeholder={"Filter berdasarkan nama"}
        onChange={(e) => inputChange(e)}
      />

      <select
        name="customers"
        id="customers"
        className="lg:col-span-4 md:col-span-6 col-span-12 bg-gray-800 text-base focus:border-white border-[1px] rounded-md py-1 px-1"
        onChange={(e) => handleChange(e)}
      >
        <option value={""} defaultValue className="text-center">
          -- Pilih Calon Customer --
        </option>
        {customers.data &&
          custList.map((cust, index) => (
            <option key={index} value={cust.id} className="text-center">
              {cust.firstName} {cust.lastName}
            </option>
          ))}
      </select>
    </div>
  );
};

export default SearchCustomer;
