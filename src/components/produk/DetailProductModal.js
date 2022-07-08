import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { updateProduct } from "../../redux/actions/productsAction";

const DetailProductModal = ({ setIsEdit, data }) => {
  const initialState = {
    title: "",
    description: "",
    price: 0,
    discountPercentage: 0,
    thumbnail: "",
    category: "",
  };
  const [prodData, setProdData] = useState(initialState);
  const { title, description, price, discountPercentage, category, thumbnail } =
    prodData;

  const dispatch = useDispatch();

  useEffect(() => {
    setProdData(data);
  }, [data]);

  const handleInput = (e) => {
    const { name, value } = e.target;
    setProdData({ ...prodData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    dispatch(updateProduct({ newProduct: prodData }));
  };

  return (
    <div className="status_modal fixed top-0 left-0 bg-[#0008] w-full h-screen z-20">
      <div className="h-[80vh] pb-10 follow_box w-[40vw] min-w-[450px] border-1 border-solid border-[#222] rounded-md bg-white p-[10px_10px] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 overflow-auto">
        <div className="status_header flex justify-between items-center border-b-[1px] mb-5">
          <h5 className="text-black mx-auto text-center text-xl tracking-widest font-medium mb-1">
            Update Layanan
          </h5>
          <span
            className="text-3xl text-black cursor-pointer -translate-y-1"
            onClick={() => setIsEdit(false)}
          >
            &times;
          </span>
          <hr />
        </div>

        <form
          onSubmit={handleSubmit}
          className="rounded-md text-black max-w-[400px] w-full h-[400px] mx-auto"
        >
          <div className="status_body mb-3">
            <div className="mb-5">
              <h3 className="font-semibold text-lg mt-3">Thumbnail</h3>
              <img
                src={thumbnail}
                alt="thumbnail"
                className="mb-2 rounded-sm"
              />
              <input
                type={"text"}
                className="form-control w-full py-2 px-3 rounded-lg ring-neutral-300 ring-1 focus:outline-none focus:ring-neutral-500 focus:ring-2 focus:border-neutral-200"
                id="thumbnail"
                name="thumbnail"
                value={thumbnail}
                onChange={handleInput}
              />
            </div>
            <div className="mb-5">
              <h3 className="font-semibold text-lg mt-3">Judul</h3>
              <input
                type={"text"}
                className="form-control w-full py-2 px-3 rounded-lg ring-neutral-300 ring-1 focus:outline-none focus:ring-neutral-500 focus:ring-2 focus:border-neutral-200"
                id="title"
                name="title"
                value={title}
                onChange={handleInput}
              />
            </div>
            <div className="mb-5">
              <h3 className="font-semibold text-lg mt-3">Harga</h3>
              <input
                type={"text"}
                className="form-control w-full py-2 px-3 rounded-lg ring-neutral-300 ring-1 focus:outline-none focus:ring-neutral-500 focus:ring-2 focus:border-neutral-200"
                id="price"
                name="price"
                value={price}
                onChange={handleInput}
                pattern="[0-9]*"
              />
            </div>
            <div className="mb-5">
              <h3 className="font-semibold text-lg mt-3">Diskon</h3>
              <input
                type={"text"}
                className="form-control w-full py-2 px-3 rounded-lg ring-neutral-300 ring-1 focus:outline-none focus:ring-neutral-500 focus:ring-2 focus:border-neutral-200"
                id="discountPercentage"
                name="discountPercentage"
                value={discountPercentage}
                onChange={handleInput}
                pattern="[0-9, .]*"
              />
            </div>
            <div className="mb-5">
              <h3 className="font-semibold text-lg mt-3">Kategori</h3>
              <select
                name="category"
                id="category"
                className="custom-select text-capitalize w-full py-2 px-3 rounded-lg ring-neutral-300 ring-1 focus:outline-none focus:ring-neutral-500 focus:ring-2 focus:border-neutral-200"
                onChange={handleInput}
                value={category}
              >
                <option value="Dedicated Connectivity">
                  Dedicated Connectivity
                </option>
                <option value="Broadband Internet Connectivity">
                  Broadband Internet Connectivity
                </option>
                <option value="Solusi Bisnis">Solusi Bisnis</option>
              </select>
            </div>
            <div className="mb-5">
              <h3 className="font-semibold text-lg mt-3">Deskripsi</h3>
              <textarea
                className="min-h-[210px] border-none outline-none resize-y w-full py-2 px-3 rounded-lg ring-neutral-300 ring-1 focus:outline-none focus:ring-neutral-500 focus:ring-2 focus:border-neutral-200"
                name="description"
                onChange={handleInput}
                value={description}
                placeholder={""}
              />
            </div>
          </div>

          <div className="status_footer mt-3 pb-5">
            <button
              type="submit"
              className="w-full rounded-md text-lg py-2 font-semibold tracking-widest hover:bg-sky-400 bg-sky-300 hover:text-neutral-200"
            >
              Update
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default DetailProductModal;
