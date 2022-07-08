import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const TableLayanan = ({ layanan, handleRemove, handleSubmit }) => {
  const [total, setTotal] = useState(0);
  const { page } = useParams();

  useEffect(() => {
    let harga = 0;

    layanan.forEach((item) => {
      harga += item.price - (item.price * item.discountPercentage) / 100;
    });

    setTotal(harga);
  }, [layanan]);

  return (
    <div className="">
      <table className="table-auto w-full border-collapse border border-slate-500">
        <thead>
          <tr>
            <th className="border border-slate-600 py-4 bg-white bg-opacity-10">
              No.
            </th>
            <th className="border border-slate-600 py-4 bg-white bg-opacity-10">
              Nama Layanan
            </th>
            <th className="border border-slate-600 py-4 bg-white bg-opacity-10">
              Harga
            </th>
            <th className="border border-slate-600 py-4 bg-white bg-opacity-10">
              Diskon
            </th>
            <th className="border border-slate-600 py-4 bg-white bg-opacity-10">
              Harga Akhir
            </th>
            {page === "inputLayanan" && (
              <th className="border border-slate-600 py-4 bg-white bg-opacity-10">
                Action
              </th>
            )}
          </tr>
        </thead>
        <tbody>
          {layanan.map((item, idx) => (
            <tr key={idx}>
              <td className="border border-slate-600 py-3 text-center">
                {idx + 1}
              </td>
              <td className="border border-slate-600 py-3 pl-4">
                {item.title}
              </td>
              <td className="border border-slate-600 py-3 pr-4 text-right">
                Rp
                {item.price
                  .toString()
                  .replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1.")}
              </td>
              <td className="border border-slate-600 py-3 pr-4 text-right">
                {item.discountPercentage}%
              </td>
              <td className="border border-slate-600 py-3 pr-4 text-right">
                Rp
                {item.discountPercentage !== "0" ? (
                  <>
                    {(item.price - (item.price * item.discountPercentage) / 100)
                      .toFixed(0)
                      .toString()
                      .replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1.")}
                  </>
                ) : (
                  <>
                    {item.price
                      .toString()
                      .replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1.")}
                  </>
                )}
              </td>
              {page === "inputLayanan" && (
                <td className="border border-slate-600 py-2 flex">
                  <span
                    onClick={() => handleRemove(idx)}
                    className="bg-red-600 mx-auto px-4 py-1 rounded-md hover:bg-red-700 hover:duration-300 cursor-pointer"
                  >
                    Hapus
                  </span>
                </td>
              )}
            </tr>
          ))}
        </tbody>
        {layanan.length > 0 && (
          <tfoot>
            <tr>
              <td
                className="border border-slate-600 py-3 bg-white bg-opacity-10 text-center text-lg font-medium"
                colSpan={4}
              >
                Total
              </td>
              <td className="border border-slate-600 py-3 pr-4 text-right">
                Rp
                {total
                  .toFixed(0)
                  .toString()
                  .replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1.")}
              </td>
              {page === "inputLayanan" && (
                <td className="border border-slate-600 py-3 flex">
                  <span
                    onClick={() => handleSubmit()}
                    className="bg-blue-600 mx-auto px-4 py-1 rounded-md hover:bg-blue-700 hover:duration-300 cursor-pointer"
                  >
                    Submit
                  </span>
                </td>
              )}
            </tr>
          </tfoot>
        )}
      </table>
    </div>
  );
};

export default TableLayanan;
