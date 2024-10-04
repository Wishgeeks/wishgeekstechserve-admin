import React from "react";
import logo from "../../assests/image/wishi.png";

const Header = () => {
  return (
    <div className="bg-white shadow-lg fixed top-0 left-0 right-0 z-50">
      <div className="container-fluid  mx-auto px-4 md:px-20">
        <div className="flex justify-between items-center py-2">
          <div className="flex items-center">
            <img src={logo} alt="Logo" className="w-44" />
          </div>
          <div className="flex-1 text-center">
            {/* <p className="text-4xl font-bold text-[#338DFB]"> */}
            <p className="text-[#338DFB] font-bold text-3xl md:text-4xl mt-3 leading-snug tracking-tight">
              Techserve Business Success
            </p>
          </div>
          <div className="flex items-center">
            <button className="bg-gradient-to-r from-[#7cc8e8] to-[#109ad6] text-white px-4 py-2 rounded-lg shadow-md font-semibold">
              Sign up
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
