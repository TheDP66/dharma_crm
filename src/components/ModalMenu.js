import { XIcon } from "@heroicons/react/outline";
import React from "react";
import { Link } from "react-router-dom";

const ModalMenu = ({ setIsHam }) => {
  return (
    <div className="status_modal fixed top-0 left-0 w-full h-screen z-20 bg-primary drop-shadow-md">
      <div className="border-1 border-solid border-black rounded-md p-[10px_10px] absolute top-[30px] right-[28px] overflow-auto">
        <XIcon
          className="h-10 w-10 text-white font-bold"
          aria-hidden="true"
          onClick={() => setIsHam(false)}
        />
      </div>
      <div className="mt-[20vh] items-center text-center text-secondary">
        <Link onClick={() => setIsHam(false)} to={`/calonCustomer`}>
          <div className="my-5 text-3xl mx-auto py-6 cursor-pointer">
            Calon Customer
          </div>
        </Link>
        <Link onClick={() => setIsHam(false)} to={`/produk`}>
          <div className="my-5 text-3xl mx-auto py-6 cursor-pointer">
            Produk
          </div>
        </Link>
        <Link onClick={() => setIsHam(false)} to={`/inputLayanan`}>
          <div className="my-5 text-3xl mx-auto py-6 cursor-pointer">
            Input Layanan
          </div>
        </Link>
        <Link onClick={() => setIsHam(false)} to={`/customer`}>
          <div className="my-5 text-3xl mx-auto py-6 cursor-pointer">
            Customer
          </div>
        </Link>
      </div>
    </div>
  );
};

export default ModalMenu;
