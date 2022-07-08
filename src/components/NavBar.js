import React, { useState } from "react";
import { Link } from "react-router-dom";
import Avatar from "./Avatar";
import { MenuIcon } from "@heroicons/react/outline";
import ModalMenu from "./ModalMenu";

const NavBar = () => {
  const [isHam, setIsHam] = useState(false);

  return (
    <div className="sticky top-0 left-0 z-10 h-14 bg-black max-w-full mx-auto px-5 drop-shadow-sm">
      {isHam && <ModalMenu setIsHam={setIsHam} />}
      <div className="flex h-full w-full justify-between items-center align-middle">
        {/* Title / Logo */}
        <Link to={`/`}>
          <div className="text-white text-xl tracking-widest hover:duration-300 hover:text-secondary">
            PT. SMART
          </div>
        </Link>

        {/* Menu md & lg*/}
        <div className="hidden rounded-full right-0 text-white flex-row md:flex align-middle justify-center items-center">
          <Link to={`/calonCustomer`}>
            <div className="mx-3 hover:duration-300 hover:border-secondary border-[1px] border-black px-4 py-1 rounded-xl cursor-pointer">
              Calon Customer
            </div>
          </Link>
          <Link to={`/produk`}>
            <div className="mx-3 hover:duration-300 hover:border-secondary border-[1px] border-black px-4 py-1 rounded-xl cursor-pointer">
              Produk
            </div>
          </Link>
          <Link to={`/inputLayanan`}>
            <div className="mx-3 hover:duration-300 hover:border-secondary border-[1px] border-black px-4 py-1 rounded-xl cursor-pointer">
              Input Layanan
            </div>
          </Link>
          <Link to={`/customer`}>
            <div className="mx-3 hover:duration-300 hover:border-secondary border-[1px] border-black px-4 py-1 rounded-xl cursor-pointer">
              Customer
            </div>
          </Link>
          <Avatar />
        </div>

        {/* Menu sm */}
        <div className="md:hidden rounded-full right-0 text-white flex-row flex align-middle justify-center items-center">
          <Avatar />
          <MenuIcon
            className="ml-3 h-7 w-7 cursor-pointer hover:stroke-secondary hover:duration-300"
            aria-hidden="true"
            onClick={() => setIsHam(true)}
          />
        </div>
      </div>
    </div>
  );
};

export default NavBar;
