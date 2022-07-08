import React, { useState } from "react";
import DetailCustomer from "../components/DetailCustomer";
import SearchCustomer from "../components/calonCustomer/SearchCustomer";

const CalonCustomer = () => {
  const [custData, setCustData] = useState([]);

  return (
    <div className="text-white w-full h-[10vh]">
      <div className="">
        <div className="text-4xl font-bold">List Calon Customer</div>
        <br />

        <SearchCustomer setCustData={setCustData} />
      </div>

      <br />
      <hr className="stroke-white" />
      <br />

      {custData.id !== undefined ? (
        <DetailCustomer custData={custData} />
      ) : (
        <></>
      )}
    </div>
  );
};

export default CalonCustomer;
