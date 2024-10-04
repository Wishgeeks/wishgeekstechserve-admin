import React, { useState } from "react";

const Inbox = () => {
  const [tableData, setTableData] = useState([
    {
      id: "WGTS9019",
      Subject: "Company A",
      UserEmail: "userA@example.com",
      Assign: "John Doe",
      Preview: "supportA@example.com",
    },
    {
      id: "WGTS9020",
      Subject: "Company B",
      UserEmail: "userB@example.com",
      Assign: "Jane Doe",
      Preview: "supportB@example.com",
    },
  ]);

  const assignOptions = [
    { name: "John Doe", email: "john@example.com", phone: "123-456-7890" },
    { name: "Jane Doe", email: "jane@example.com", phone: "987-654-3210" },
    { name: "Alice Smith", email: "alice@example.com", phone: "456-123-7890" },
    { name: "Bob Johnson", email: "bob@example.com", phone: "321-654-9870" },
  ];

  const handleAssignChange = (id, event) => {
    const selectedName = event.target.value;

    // Find the selected option's data
    const selectedOption = assignOptions.find(
      (option) => option.name === selectedName
    );

    // Update the tableData state
    setTableData((prevData) =>
      prevData.map((item) =>
        item.id === id
          ? { ...item, Assign: selectedName, UserEmail: selectedOption.email } // Update based on selected name
          : item
      )
    );
  };

  return (
    <>
      <div className="container h-[100vh] overflow-y-auto bg-white p-4">
        <div className="flex items-center justify-between mb-4 mt-3 border-b border-gray-300">
          <h1 className="text-3xl font-medium mt-24 text-gray-500">Inbox</h1>
        </div>

        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200 bg-white mb-5">
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
                    <td className="px-6 py-4 text-xs text-[#3b82f6] border  font-medium">
                      <select
                        value={data.Assign}
                        onChange={(event) => handleAssignChange(data.id, event)}
                        style={{
                          border: "1px solid #3b82f6",
                          borderRadius: "0.5rem",
                        }}
                        className="px-2 py-2 w-9/12"
                      >
                        {assignOptions.map((option) => (
                          <option key={option.name} value={option.name}>
                            {option.name}
                          </option>
                        ))}
                      </select>
                    </td>
                    <td className="px-6 py-4 text-xs text-[#3b82f6] border  font-medium">
                      <div
                        className="px-2 py-2 text-center"
                        style={{
                          border: "1px solid #3b82f6",
                          borderRadius: "0.5rem",
                        }}
                      >
                        {data.Preview}
                      </div>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td
                    colSpan="5"
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

export default Inbox;
