import React from "react";
import { ticketData } from "../../assests/constants"; // Import the data
import Barchart from "../../component/chart";
import bannerdigital from "../../assests/image/digital.png";
import { data } from "../../assests/data";

const Dashboard = () => {
  return (
    <div className="container mx-auto h-[100vh] p-0 overflow-y-auto bg-white">
      <div className="relative h-[200px] md:h-[280px]">
        <img
          src={bannerdigital}
          className="absolute inset-0 object-cover w-full h-full"
          alt="Banner Image"
        />
      </div>

      <div className="container relative mx-auto p-3">
        <div
          className="flex justify-around bg-white py-4 w-[95%] md:w-11/12 mx-auto 
          border shadow-[0_4px_4px_0px_rgba(0,0,0,0.25)] rounded-lg relative z-10 
          mt-[-13.5%] md:mt-[-6.5%]"
        >
          {ticketData.map((ticket) => (
            <div key={ticket.id} className="flex items-center space-x-2">
              <img
                src={ticket.imgSrc}
                alt={ticket.title}
                className="w-10 md:w-20 h-20"
              />
              <div className="flex flex-col">
                <p className="text-black font-thin mb-0">{ticket.title}</p>
                <p className="text-black font-bold mb-0">{ticket.value}</p>

                {ticket.vector && (
                  <p className="text-[#3159A6] font-bold flex items-center">
                    <span className="mr-2">
                      <img
                        src={ticket.vector}
                        alt="Vector Icon"
                        className="inline-block w-4 h-4"
                      />
                    </span>
                    {ticket.isPositive ? "" : "-"}
                    {ticket.percentage}
                    <span className="text-black mx-1">{ticket.month}</span>
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-3">
        <div className="grid grid-cols-1 md:grid-cols-1 gap-4">
          <div className="w-full">
            <Barchart data={data.labels} />
          </div>
        </div>
      </div>

      <div className="container relative mx-auto p-3 mt-28 mb-4 ">
        <div
          className="flex justify-around bg-white py-4 w-[95%] md:w-11/12 mx-auto 
          border shadow-[0_4px_4px_0px_rgba(0,0,0,0.25)] rounded-lg relative z-10 
          mt-[-13.5%] md:mt-[-6.5%]"
        >
          {ticketData.map((ticket) => (
            <div key={ticket.id} className="flex items-center space-x-2">
              <img
                src={ticket.imgSrc}
                alt={ticket.title}
                className="w-10 md:w-20 h-20"
              />
              <div className="flex flex-col">
                <p className="text-black font-thin mb-0">{ticket.title}</p>
                <p className="text-black font-bold mb-0">{ticket.value}</p>

                {ticket.vector && (
                  <p className="text-[#3159A6] font-bold flex items-center">
                    <span className="mr-2">
                      <img
                        src={ticket.vector}
                        alt="Vector Icon"
                        className="inline-block w-4 h-4"
                      />
                    </span>
                    {ticket.isPositive ? "" : "-"}
                    {ticket.percentage}
                    <span className="text-black mx-1">{ticket.month}</span>
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
