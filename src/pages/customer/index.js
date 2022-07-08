import moment from "moment";
import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Customer = () => {
  const { buyers } = useSelector((state) => state);

  return (
    <div className="text-white mb-52">
      <div className="">
        <div className="text-4xl font-bold">List Customer</div>
        <br />

        <hr className="stroke-white" />
        <br />
      </div>
      <div className="">
        <table className="table-auto w-full border-collapse border border-slate-500">
          <thead>
            <tr>
              <th className="border border-slate-600 py-4 bg-white bg-opacity-10">
                No.
              </th>
              <th className="border border-slate-600 py-4 bg-white bg-opacity-10">
                Nama Customer
              </th>
              <th className="border border-slate-600 py-4 bg-white bg-opacity-10">
                Mulai Langganan Tgl.
              </th>
              <th className="border border-slate-600 py-4 bg-white bg-opacity-10">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {buyers.data.map((item, idx) => (
              <tr key={idx}>
                <td className="border border-slate-600 py-3 text-center">
                  {idx + 1}
                </td>
                <td className="border border-slate-600 py-3 pl-4">
                  {item.customer.firstName} {item.customer.lastName}
                </td>
                <td className="border border-slate-600 py-3 text-center">
                  {moment.unix(item.dibuat).format("DD MMMM YYYY, HH:MM")} WIB
                </td>
                <td className="border border-slate-600 py-3 flex h-[50px]">
                  <Link
                    to={`/customer/${item.customer.id}`}
                    className={"mx-auto"}
                  >
                    <span className="bg-blue-600 mx-auto px-4 py-1 rounded-md h-full my-auto hover:bg-blue-700 hover:duration-300 cursor-pointer">
                      Detail
                    </span>
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Customer;
