import React, { useState } from "react";
import ReactStars from "react-rating-stars-component";
import DetailProductModal from "./produk/DetailProductModal";
import { useParams } from "react-router-dom";

const DetailProduct = ({ prodData }) => {
  const [isEdit, setIsEdit] = useState(false);

  const { page } = useParams();

  return (
    <div className="grid grid-cols-12 gap-6 w-full mb-10">
      {isEdit && <DetailProductModal setIsEdit={setIsEdit} data={prodData} />}

      <div className="text-4xl font-medium col-span-12 md:col-span-10">
        {prodData.title}
      </div>
      {page === "produk" && (
        <div
          onClick={() => setIsEdit(true)}
          className="col-span-12 md:col-span-2 cursor-pointer bg-blue-600 hover:bg-blue-700 hover:duration-300 rounded-lg my-auto py-2 text-center"
        >
          Edit Data
        </div>
      )}
      <div className="col-span-12 md:col-span-6 grid grid-cols-12 gap-2">
        <div className="bg-white rounded-lg w-auto col-span-12 h-[300px]">
          <img
            src={prodData.thumbnail}
            alt="thumbnail"
            className="rounded-lg col-span-12 h-full mx-auto"
          />
        </div>
      </div>
      <div className="col-span-12 md:col-span-6 grid grid-cols-12 gap-2 mt-3">
        <table className="table-auto w-full col-span-12">
          <tbody className="text-left">
            <tr className="grid grid-cols-12 pb-8 pt-2">
              <th className="col-span-12 text-4xl">
                Rp
                {prodData.discountPercentage !== "0" ? (
                  <>
                    {(
                      prodData.price -
                      (prodData.price * prodData.discountPercentage) / 100
                    )
                      .toFixed(0)
                      .toString()
                      .replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1.")}
                  </>
                ) : (
                  <>
                    {prodData.price
                      .toString()
                      .replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1.")}
                  </>
                )}
              </th>
              <td className="col-span-12 text-base flex opacity-50">
                {prodData.discountPercentage !== "0" && (
                  <>
                    <span className="text-red-400">
                      {prodData.discountPercentage}%&nbsp;&nbsp;
                    </span>
                    <span className="line-through">
                      $
                      {prodData.price
                        .toString()
                        .replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1.")}
                    </span>
                  </>
                )}
              </td>
            </tr>
            <tr className="grid grid-cols-12 py-4 border-y-[1px] opacity-75 ">
              <th className="col-span-5">Category</th>
              <td className="col-span-7">{prodData.category}</td>
            </tr>
            <tr className="grid grid-cols-12 py-4 border-b-[1px]">
              <th className="col-span-5 my-auto">Rating</th>
              <td className="col-span-7 flex flex-row my-auto">
                <ReactStars
                  activeColor={"#FAFA33"}
                  count={5}
                  halfIcon
                  size={23}
                  value={prodData.rating}
                  edit={false}
                />
                &nbsp; &nbsp;
                <span className="my-auto">{prodData.rating}/5</span>
              </td>
            </tr>
          </tbody>
        </table>
        <div className="col-span-12">
          <div className="text-base opacity-60">Description :</div>
          <div className="text-lg">{prodData.description}</div>
        </div>
      </div>
    </div>
  );
};

export default DetailProduct;
