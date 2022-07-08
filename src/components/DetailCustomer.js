import React from "react";
import moment from "moment";

const DetailCustomer = ({ custData }) => {
  return (
    <div className="grid grid-cols-12 gap-6 w-full">
      <img
        src={custData.image}
        alt="profile"
        className="bg-white rounded-lg col-span-8 col-start-3 md:col-span-5 w-full h-auto"
      />

      <div className="rounded-md col-span-10 col-start-2 md:col-span-7 w-full text-base">
        <div className="text-4xl font-medium text-center md:text-left">
          {custData.firstName} {custData.lastName}
        </div>
        <div className="text-sm mt-2 text-center md:text-left">
          {custData.address.address}, {custData.address.city},{" "}
          {custData.address.postalCode}
        </div>
        <br />
        <div className="opacity-75 mt-3">
          <table className="table-auto  w-full">
            <tbody className="text-left">
              <tr className="grid grid-cols-12 py-4 border-y-[1px]">
                <th className="col-span-5">Tanggal Lahir</th>
                <td className="col-span-7">
                  {moment(custData.birthDate).format("DD MMMM YYYY")}
                </td>
              </tr>
              <tr className="grid grid-cols-12 py-4 border-b-[1px]">
                <th className="col-span-5">Email</th>
                <td className="col-span-7">{custData.email}</td>
              </tr>
              <tr className="grid grid-cols-12 py-4 border-b-[1px]">
                <th className="col-span-5">Jenis Kelamin</th>
                <td className="col-span-7">{custData.gender}</td>
              </tr>
              <tr className="grid grid-cols-12 py-4 border-b-[1px]">
                <th className="col-span-5">No. Telepon</th>
                <td className="col-span-7">{custData.phone}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default DetailCustomer;
