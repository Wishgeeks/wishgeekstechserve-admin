import React from "react";

const Users = () => {
  const tableData = [
    {
      id: "WGTS9019",
      UserName: "John Doe",
      Email: "john.doe@example.com",
      Location: "New York, USA",
      Date: "2024-09-01",
      PlanTaken: "Premium",
      NoofTickets: 5,
    },
    {
      id: "WGTS9020",
      UserName: "Jane Smith",
      Email: "jane.smith@example.com",
      Location: "London, UK",
      Date: "2024-09-02",
      PlanTaken: "Standard",
      NoofTickets: 3,
    },
    {
      id: "WGTS9021",
      UserName: "Michael Brown",
      Email: "michael.brown@example.com",
      Location: "Sydney, Australia",
      Date: "2024-09-03",
      PlanTaken: "Basic",
      NoofTickets: 8,
    },
    {
      id: "WGTS9022",
      UserName: "Emily Davis",
      Email: "emily.davis@example.com",
      Location: "Toronto, Canada",
      Date: "2024-09-04",
      PlanTaken: "Premium",
      NoofTickets: 2,
    },
  ];

  return (
    <>
      <div className="container h-[100vh] overflow-y-auto bg-white p-4">
      <div className="flex items-center justify-between mb-4 mt-3 border-b border-gray-300">
      <h1 className="text-3xl font-medium mt-24 text-gray-500">Users</h1>
        </div>

        <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200  bg-white mb-5">
            <thead className="bg-[#338dfb] text-white">
              <tr>
                <th className="px-6 py-3 text-xs font-bold uppercase tracking-wider text-left border cursor-pointer">
                  User Name
                </th>
                <th className="px-6 py-3 text-xs font-bold uppercase tracking-wider text-left border cursor-pointer">
                  Email
                </th>
                <th className="px-6 py-3 text-xs font-bold uppercase tracking-wider text-left border cursor-pointer">
                  Location
                </th>

                <th className="px-6 py-3 text-xs font-bold uppercase tracking-wider text-left border">
                  Date
                </th>
                <th className="px-6 py-3 text-xs font-bold uppercase tracking-wider text-left border">
                  Plan Taken
                </th>
                <th className="px-6 py-3 text-xs font-bold uppercase tracking-wider text-left border">
                  No of Tickets
                </th>
              </tr>
            </thead>

            <tbody className="bg-white divide-y divide-gray-200">
              {tableData.length > 0 ? (
                tableData.map((data) => (
                  <tr key={data.id}>
                 <td className="px-6 py-4 text-xs  border  font-medium">
                      {data.UserName}
                    </td>
                 <td className="px-6 py-4 text-xs  border  font-medium">
                      {data.Email}
                    </td>
                 <td className="px-6 py-4 text-xs  border  font-medium">
                      {data.Location}
                    </td>
                 <td className="px-6 py-4 text-xs  border  font-medium">
                      {data.Date}
                    </td>
                 <td className="px-6 py-4 text-xs  border  font-medium">
                      {data.PlanTaken}
                    </td>
                 <td className="px-6 py-4 text-xs  border  font-medium">
                      {data.NoofTickets}
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
      </div>
    </>
  );
};

export default Users;
