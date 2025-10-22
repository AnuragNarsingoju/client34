import React, { useState } from "react";

const SchoolPage = () => {
  const [sidebarActive, setSidebarActive] = useState(0);
  const [formData, setFormData] = useState({
    headerA: "",
    headerB: "",
    headerC: "",
    headerD: "",
    dateOfBirth: "",
    parentName: "",
    contactNumber: "",
    email: "",
    address: "",
    emergencyContact: "",
  });

  const navOptions = [
    { id: 1, label: "Option 1", subItems: ["Sub 1", "Sub 2", "Sub 3"] },
    { id: 2, label: "Option 2", subItems: ["Sub 1", "Sub 2", "Sub 3"] },
    { id: 3, label: "Option 3", subItems: ["Sub 1", "Sub 2", "Sub 3"] },
    { id: 4, label: "Option 4", subItems: ["Sub 1", "Sub 2", "Sub 3"] },
    { id: 5, label: "Option 5", subItems: ["Sub 1", "Sub 2", "Sub 3"] },
    { id: 6, label: "Option 6", subItems: ["Sub 1", "Sub 2", "Sub 3"] },
    { id: 7, label: "Option 7", subItems: ["Sub 1", "Sub 2", "Sub 3"] },
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data:", formData);
    alert("Form submitted successfully!");
  };

  return (
    <div className="flex flex-col h-screen overflow-hidden bg-black">
      {/* Top Navbar */}
      <nav className="bg-blue-800 text-white px-6 py-4 flex items-center gap-8 border-b-2 border-blue-900">
        {/* Logo and Title */}
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 bg-blue-700 rounded flex items-center justify-center text-white font-bold text-sm">
            Logo
          </div>
          <h2 className="text-xl font-semibold whitespace-nowrap">Title</h2>
        </div>

        {/* Navigation Options */}
        <div className="flex-1 flex items-center justify-end gap-6">
          {navOptions.map((option) => (
            <div key={option.id} className="relative group">
              <button className="text-white hover:text-gray-200 text-base font-normal px-2 py-1">
                {option.label}
              </button>
              {/* Dropdown */}
              <div className="absolute top-full left-0 mt-1 w-48 bg-white shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                <ul className="py-1">
                  {option.subItems.map((subItem, idx) => (
                    <li key={idx}>
                      <a
                        href="#"
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-800 no-underline"
                        onClick={(e) => e.preventDefault()}
                      >
                        {subItem}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </nav>

      <div className="flex flex-1 overflow-hidden">
        {/* Left Sidebar */}
        <aside className="w-64 bg-blue-800 text-white p-4 flex flex-col border-r-4 border-gray-400">
          <div className="flex-1 space-y-3">
            {[1, 2, 3, 4].map((num) => (
              <button
                key={num}
                className={`w-full text-left px-6 py-4 text-base font-normal border-2 rounded ${
                  sidebarActive === num
                    ? "border-white bg-blue-700"
                    : "border-white/70 bg-transparent hover:bg-blue-700"
                }`}
                onClick={() => setSidebarActive(num)}
              >
                Option {num}
              </button>
            ))}
          </div>

          {/* Logout Button */}
          <button className="w-full px-6 py-4 text-base font-semibold border-2 border-red-500 text-red-500 bg-transparent hover:bg-red-500 hover:text-white rounded mt-auto">
            Logout
          </button>
        </aside>

        {/* Main Content */}
        <main className="flex-1 bg-gray-300 p-6 overflow-y-auto">
          <div className="bg-white rounded shadow-sm p-8 max-w-5xl mx-auto">
            <form onSubmit={handleSubmit}>
              {/* Table Layout */}
              <table className="w-full border">
                <tbody>
                  <tr className="border-b border-gray-300">
                    <td className="py-4 px-6 text-blue-800 font-bold text-base w-1/3 border-r border-gray-300">
                      Header A
                    </td>
                    <td className="py-4 px-6">
                      <input
                        type="text"
                        name="headerA"
                        value={formData.headerA}
                        onChange={handleInputChange}
                        placeholder="Enter data for A"
                        className="w-full p-0 border-none text-gray-500 text-base focus:outline-none placeholder:text-gray-400"
                      />
                    </td>
                  </tr>

                  <tr className="border-b border-gray-300">
                    <td className="py-4 px-6 text-blue-800 font-bold text-base border-r border-gray-300">
                      Header B
                    </td>
                    <td className="py-4 px-6">
                      <input
                        type="text"
                        name="headerB"
                        value={formData.headerB}
                        onChange={handleInputChange}
                        placeholder="Enter data for B"
                        className="w-full p-0 border-none text-gray-500 text-base focus:outline-none placeholder:text-gray-400"
                      />
                    </td>
                  </tr>

                  <tr className="border-b border-gray-300">
                    <td className="py-4 px-6 text-blue-800 font-bold text-base border-r border-gray-300">
                      Header C
                    </td>
                    <td className="py-4 px-6">
                      <input
                        type="text"
                        name="headerC"
                        value={formData.headerC}
                        onChange={handleInputChange}
                        placeholder="Enter data for C"
                        className="w-full p-0 border-none text-gray-500 text-base focus:outline-none placeholder:text-gray-400"
                      />
                    </td>
                  </tr>

                  <tr className="border-b border-gray-300">
                    <td className="py-4 px-6 text-blue-800 font-bold text-base border-r border-gray-300">
                      Header D
                    </td>
                    <td className="py-4 px-6">
                      <input
                        type="text"
                        name="headerD"
                        value={formData.headerD}
                        onChange={handleInputChange}
                        placeholder="Enter data for D"
                        className="w-full p-0 border-none text-gray-500 text-base focus:outline-none placeholder:text-gray-400"
                      />
                    </td>
                  </tr>

                  {/* <tr className="border-b border-gray-300">
                    <td className="py-4 px-6 text-blue-800 font-bold text-base border-r border-gray-300">
                      Date of Birth
                    </td>
                    <td className="py-4 px-6">
                      <input
                        type="date"
                        name="dateOfBirth"
                        value={formData.dateOfBirth}
                        onChange={handleInputChange}
                        className="w-full p-0 border-none text-gray-500 text-base focus:outline-none"
                      />
                    </td>
                  </tr>

                  <tr className="border-b border-gray-300">
                    <td className="py-4 px-6 text-blue-800 font-bold text-base border-r border-gray-300">
                      Parent Name
                    </td>
                    <td className="py-4 px-6">
                      <input
                        type="text"
                        name="parentName"
                        value={formData.parentName}
                        onChange={handleInputChange}
                        placeholder="Enter parent name"
                        className="w-full p-0 border-none text-gray-500 text-base focus:outline-none placeholder:text-gray-400"
                      />
                    </td>
                  </tr>

                  <tr className="border-b border-gray-300">
                    <td className="py-4 px-6 text-blue-800 font-bold text-base border-r border-gray-300">
                      Contact Number
                    </td>
                    <td className="py-4 px-6">
                      <input
                        type="tel"
                        name="contactNumber"
                        value={formData.contactNumber}
                        onChange={handleInputChange}
                        placeholder="Enter contact number"
                        className="w-full p-0 border-none text-gray-500 text-base focus:outline-none placeholder:text-gray-400"
                      />
                    </td>
                  </tr>

                  <tr className="border-b border-gray-300">
                    <td className="py-4 px-6 text-blue-800 font-bold text-base border-r border-gray-300">
                      Email Address
                    </td>
                    <td className="py-4 px-6">
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="Enter email"
                        className="w-full p-0 border-none text-gray-500 text-base focus:outline-none placeholder:text-gray-400"
                      />
                    </td>
                  </tr>

                  <tr className="border-b border-gray-300">
                    <td className="py-4 px-6 text-blue-800 font-bold text-base border-r border-gray-300">
                      Address
                    </td>
                    <td className="py-4 px-6">
                      <input
                        type="text"
                        name="address"
                        value={formData.address}
                        onChange={handleInputChange}
                        placeholder="Enter address"
                        className="w-full p-0 border-none text-gray-500 text-base focus:outline-none placeholder:text-gray-400"
                      />
                    </td>
                  </tr>

                  <tr className="border-b border-gray-300">
                    <td className="py-4 px-6 text-blue-800 font-bold text-base border-r border-gray-300">
                      Emergency Contact
                    </td>
                    <td className="py-4 px-6">
                      <input
                        type="tel"
                        name="emergencyContact"
                        value={formData.emergencyContact}
                        onChange={handleInputChange}
                        placeholder="Enter emergency contact"
                        className="w-full p-0 border-none text-gray-500 text-base focus:outline-none placeholder:text-gray-400"
                      />
                    </td>
                  </tr> */}
                </tbody>
              </table>

              {/* Submit Button */}
              <div className="flex justify-center mt-8">
                <button
                  type="submit"
                  className="py-3 px-16 bg-blue-800 text-white text-base font-semibold rounded hover:bg-blue-900 focus:outline-none"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </main>
      </div>
    </div>
  );
};

export default SchoolPage;
