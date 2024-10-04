import React from "react";

const Pending = () => {
  const tableData = [
    {
      id: "WGTS9019",
      Subject: "Company A",
      UserEmail: "userA@example.com",
      Assign: "John Doe",
      Preview: "Preview",
      Status: "Unresolved",
    },
    {
      id: "WGTS9020",
      Subject: "Company B",
      UserEmail: "userB@example.com",
      Assign: "Jane Doe",
      Preview: "Preview",
      Status: "Unresolved",
    },
    {
      id: "WGTS9021",
      Subject: "Company B",
      UserEmail: "userB@example.com",
      Assign: "Jane Doe",
      Preview: "Preview",
      Status: "Unresolved",
    },
    {
      id: "WGTS9022",
      Subject: "Company B",
      UserEmail: "userB@example.com",
      Assign: "Jane Doe",
      Preview: "Preview",
      Status: "Unresolved",
    },
  ];
  return (
    <>
          <div className="container h-[100vh] overflow-y-auto bg-white p-4">
      <div className="flex items-center justify-between mb-4 mt-3 border-b border-gray-300">
      <h1 className="text-3xl font-medium mt-24 text-gray-500">Pending</h1>
        </div>

        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200  bg-white mb-5">
            <thead className="bg-[#338dfb] text-white">
              <tr>
                <th className="px-6 py-3 text-xs font-bold uppercase tracking-wider text-left border cursor-pointer">
                  ID
                </th>
                <th className="px-6 py-3 text-xs font-bold uppercase tracking-wider text-left border cursor-pointer">
                  Subject
                </th>
                <th className="px-6 py-3 text-xs font-bold uppercase tracking-wider text-left border cursor-pointer">
                  User Email
                </th>
                <th className="px-6 py-3 text-xs font-bold uppercase tracking-wider text-left border cursor-pointer">
                  Assign
                </th>
                <th className="px-6 py-3 text-xs font-bold uppercase tracking-wider text-left border cursor-pointer">
                  Preview
                </th>
                <th className="px-6 py-3 text-xs font-bold uppercase tracking-wider text-left border cursor-pointer">
                  Status
                </th>
              </tr>
            </thead>

            <tbody className="bg-white divide-y divide-gray-200">
              {tableData.length > 0 ? (
                tableData.map((data) => (
                  <tr key={data.id}>
                    <td className="px-6 py-4 text-xs  border  font-medium">
                      {data.id}
                    </td>
                    <td className="px-6 py-4 text-xs  border  font-medium">
                      {data.Subject}
                    </td>
                    <td className="px-6 py-4 text-xs  border  font-medium">
                      {data.UserEmail}
                    </td>
                    <td className="px-6 py-4 text-xs text-[#3b82f6] border  font-medium  ">
                      <div
                        className=" px-2 py-2 text-center"
                        style={{
                          border: "1px solid #3b82f6  ",
                          borderRadius: "0.5rem",
                        }}
                      >
                        {data.Assign}
                      </div>
                    </td>
                    <td className="px-6 py-4 text-xs text-[#3b82f6] border  font-medium  ">
                      <div
                        className=" px-2 py-2 text-center"
                        style={{
                          border: "1px solid #3b82f6  ",
                          borderRadius: "0.5rem",
                        }}
                      >
                        {data.Preview}
                      </div>
                    </td>
                    <td className="px-6 py-4 text-xs text-[#c60508] font-medium  border ">
                      <div
                        className=" px-2 py-2 text-center"
                        style={{
                          border: "1px solid #C60508  ",
                          borderRadius: "0.5rem",
                        }}
                      >
                        {data.Status}
                      </div>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="6" className="px-6 py-4 text-xs  text-center">
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

export default Pending;
