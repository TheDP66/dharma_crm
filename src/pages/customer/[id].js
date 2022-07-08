import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import DetailCustomer from "../../components/DetailCustomer";
import TableLayanan from "../../components/TableLayanan";
import customers from "../../dataDummy/customers.json";

const Customer = () => {
  const { buyers } = useSelector((state) => state);
  const { id } = useParams();

  const [dataCust, setDataCust] = useState([]);
  const [load, setLoad] = useState(true);

  useEffect(() => {
    setLoad(true);
    setDataCust(buyers.data.filter((cust) => cust.customer.id + "" === id)[0]);
    setLoad(false);
  }, [buyers.data, id]);

  const handleRemove = (idx) => {};

  const handleSubmit = () => {};

  return (
    <div className="w-full mb-52 text-white">
      <div className="text-4xl font-medium">Detail Customer</div>

      <br />
      <hr className="stroke-white" />
      <br />

      <div className="">
        {!load && (
          <>
            <DetailCustomer custData={dataCust.customer} />
            <br />
            <br />
            <TableLayanan
              layanan={dataCust.layanan}
              handleRemove={handleRemove}
              handleSubmit={handleSubmit}
            />
          </>
        )}
      </div>
    </div>
  );
};

export default Customer;
