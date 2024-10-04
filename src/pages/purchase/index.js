import { data } from "../../assests/data";
import Linechart from "../../component/linechart";
import { FaSearch } from "react-icons/fa";
import { useState } from "react";

const Purchase_History = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedOption, setSelectedOption] = useState("Service_Candidates");

  const serviceCandidatesData = [
    {
      id: "WGTS9019",
      UserName: "John Doe",
      Service: "Web Development",
      Location: "New York, USA",
      Start_date: "2024-09-01",
      End_date: "2024-10-01",
      Purchased: "Card",
    },
    {
      id: "WGTS9020",
      UserName: "Jane Smith",
      Service: "SEO Optimization",
      Location: "Los Angeles, USA",
      Start_date: "2024-09-05",
      End_date: "2024-10-05",
      Purchased: "Card",
    },
  ];

  const bothCandidatesData = [
    {
      id: "WGTS9021",
      UserName: "Michael Brown",
      Service: "Graphic Design",
      Location: "Chicago, USA",
      Start_date: "2024-09-10",
      End_date: "2024-10-10",
      Purchased: "Card",
    },
    {
      id: "WGTS9022",
      UserName: "Emily Davis",
      Service: "Content Writing",
      Location: "Houston, USA",
      Start_date: "2024-09-15",
      End_date: "2024-10-15",
      Purchased: "Card",
    },
    {
      id: "WGTS9019",
      UserName: "John Doe",
      Service: "Web Development",
      Location: "New York, USA",
      Start_date: "2024-09-01",
      End_date: "2024-10-01",
      Purchased: "Card",
    },
    {
      id: "WGTS9020",
      UserName: "Jane Smith",
      Service: "SEO Optimization",
      Location: "Los Angeles, USA",
      Start_date: "2024-09-05",
      End_date: "2024-10-05",
      Purchased: "Card",
    },
  ];

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleSelectChange = (e) => {
    setSelectedOption(e.target.value);
  };

  const filteredData =
    selectedOption === "Service_Candidates"
      ? serviceCandidatesData
      : bothCandidatesData;

  return (
    <>
       <div className="container h-[100vh] overflow-y-auto bg-white p-4">
        <div className="flex items-center justify-between mb-2 mt-3 border-b border-gray-300">
          <h1 className="text-3xl font-medium mt-24 text-gray-500">
            Purchase History
          </h1>
        </div>

        <div className="overflow-x-auto">
          <div className="flex items-center justify-between">
            <h1 className="text-[25px] font-semibold text-blue-500 my-4">
              {selectedOption === "Service_Candidates"
                ? "Service Candidates"
                : "Both Candidates"}
            </h1>

            <div className="flex items-center space-x-4">
              <div className="relative">
                <input
                  type="text"
                  className="block w-64 pl-10 pr-4 py-1 border rounded-md text-gray-700 placeholder-gray-400 focus:outline-none focus:border-blue-500"
                  placeholder="Search..."
                  value={searchQuery}
                  onChange={handleSearchChange}
                />
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <FaSearch className="text-gray-400" />
                </div>
              </div>

              <div>
                <select
                  className="block border border-blue-500 rounded-md py-1 px-3 focus:outline-none focus:border-blue-500"
                  value={selectedOption}
                  onChange={handleSelectChange}
                >
                  <option
                    value="Service_Candidates"
                    className="font-semibold text-[14px]"
                  >
                    Service Candidates
                  </option>
                  <option value="Both_Candidates">Both Candidates</option>
                </select>
              </div>
            </div>
          </div>
          <table className="min-w-full divide-y divide-gray-200 bg-white mb-5">
            <thead className="bg-[#338dfb] text-white">
              <tr>
                <th className="px-6 py-3 text-xs font-bold uppercase tracking-wider text-left border cursor-pointer">
                  User Name
                </th>
                <th className="px-6 py-3 text-xs font-bold uppercase tracking-wider text-left border cursor-pointer">
                  Service
                </th>
                <th className="px-6 py-3 text-xs font-bold uppercase tracking-wider text-left border cursor-pointer">
                  Location
                </th>
                <th className="px-6 py-3 text-xs font-bold uppercase tracking-wider text-left border">
                  Start date
                </th>
                <th className="px-6 py-3 text-xs font-bold uppercase tracking-wider text-left border">
                  End date
                </th>
                <th className="px-6 py-3 text-xs font-bold uppercase tracking-wider text-left border">
                  Purchased by
                </th>
              </tr>
            </thead>

            <tbody className="bg-white divide-y divide-gray-200">
              {filteredData.length > 0 ? (
                filteredData
                  .filter((data) =>
                    data.UserName.toLowerCase().includes(
                      searchQuery.toLowerCase()
                    )
                  )
                  .map((data) => (
                    <tr key={data.id}>
                      <td className="px-6 py-4 text-xs border font-medium">
                        {data.UserName}
                      </td>
                      <td className="px-6 py-4 text-xs border font-medium">
                        {data.Service}
                      </td>
                      <td className="px-6 py-4 text-xs border font-medium">
                        {data.Location}
                      </td>
                      <td className="px-6 py-4 text-xs border font-medium">
                        {data.Start_date}
                      </td>
                      <td className="px-6 py-4 text-xs border font-medium">
                        {data.End_date}
                      </td>
                      <td className="px-6 py-4 text-xs border font-medium">
                        {data.Purchased}
                      </td>
                    </tr>
                  ))
              ) : (
                <tr>
                  <td
                    colSpan="6"
                    className="px-6 py-4 text-xs text-gray-500 text-center"
                  >
                    No data available
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>

        <div className="mt-2 mb-20">
          <div className="grid grid-cols-1 md:grid-cols-1 gap-4">
            <div className="w-full">
              <Linechart data={data.Line} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Purchase_History;
