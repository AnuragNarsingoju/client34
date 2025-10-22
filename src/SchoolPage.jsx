import React, { useState } from "react";
import {
  FaChartLine,
  FaUserGraduate,
  FaChalkboardTeacher,
  FaBookOpen,
  FaCalendarCheck,
  FaClipboardList,
  FaMoneyBillWave,
  FaBullhorn,
  FaFileAlt,
  FaCog,
  FaSchool,
  FaBars,
} from "react-icons/fa";

const SchoolPage = () => {
  const [sidebarLinks, setSidebarLinks] = useState([
    { icon: FaChartLine, label: "Dashboard", active: true },
    { icon: FaUserGraduate, label: "Students" },
    { icon: FaChalkboardTeacher, label: "Teachers" },
    { icon: FaBookOpen, label: "Courses" },
    { icon: FaCalendarCheck, label: "Attendance" },
    { icon: FaClipboardList, label: "Examinations" },
    { icon: FaMoneyBillWave, label: "Finance" },
    { icon: FaBullhorn, label: "Announcements" },
    { icon: FaFileAlt, label: "Reports" },
    { icon: FaCog, label: "Settings" },
  ]);

  const toggleSidebar = (label) => {
    setSidebarLinks((prevLinks) =>
      prevLinks.map((link) =>
        link.label === label
          ? { ...link, active: true }
          : { ...link, active: false }
      )
    );
  };

  const [formData, setFormData] = useState({
    studentName: "",
    rollNumber: "",
    grade: "",
    section: "",
    dateOfBirth: "",
    parentName: "",
    contactNumber: "",
    email: "",
    address: "",
    emergencyContact: "",
  });

  // Navbar menu items with dropdowns
  const navMenuItems = [
    {
      title: "option 1",
      subItems: [
        "sub-option 1",
        "sub-option 2",
        "sub-option 3",
        "sub-option 4",
        "sub-option 5",
      ],
    },
    {
      title: "option 2",
      subItems: [
        "sub-option 1",
        "sub-option 2",
        "sub-option 3",
        "sub-option 4",
        "sub-option 5",
      ],
    },
    {
      title: "option 3",
      subItems: [
        "sub-option 1",
        "sub-option 2",
        "sub-option 3",
        "sub-option 4",
        "sub-option 5",
      ],
    },
    {
      title: "option 4",
      subItems: [
        "sub-option 1",
        "sub-option 2",
        "sub-option 3",
        "sub-option 4",
        "sub-option 5",
      ],
    },
    {
      title: "option 5",
      subItems: [
        "sub-option 1",
        "sub-option 2",
        "sub-option 3",
        "sub-option 4",
        "sub-option 5",
      ],
    },
    {
      title: "option 6",
      subItems: [
        "sub-option 1",
        "sub-option 2",
        "sub-option 3",
        "sub-option 4",
        "sub-option 5",
      ],
    },
    {
      title: "option 7",
      subItems: [
        "sub-option 1",
        "sub-option 2",
        "sub-option 3",
        "sub-option 4",
        "sub-option 5",
      ],
    },
    {
      title: "option 8",
      subItems: [
        "sub-option 1",
        "sub-option 2",
        "sub-option 3",
        "sub-option 4",
        "sub-option 5",
      ],
    },
    {
      title: "option 9",
      subItems: [
        "sub-option 1",
        "sub-option 2",
        "sub-option 3",
        "sub-option 4",
        "sub-option 5",
      ],
    },
    {
      title: "option 10",
      subItems: [
        "sub-option 1",
        "sub-option 2",
        "sub-option 3",
        "sub-option 4",
        "sub-option 5",
      ],
    },
  ];

  const [activeNav, setActiveNav] = useState({
    mainIndex: null,
    subIndex: null,
  });

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

  const handleReset = () => {
    setFormData({
      studentName: "",
      rollNumber: "",
      grade: "",
      section: "",
      dateOfBirth: "",
      parentName: "",
      contactNumber: "",
      email: "",
      address: "",
      emergencyContact: "",
    });
  };

  return (
    <div className="flex flex-col h-screen overflow-hidden bg-gray-50 font-sans">
      {/* Navbar */}
      {/* Navbar */}
      <nav className="bg-white text-gray-800 shadow-sm z-[100] border-b border-gray-200">
        {/* Top Bar with Logo and School Name */}
        <div className="py-3 px-4 lg:py-4 lg:px-8 flex justify-between items-center border-b border-gray-100">
          <div className="flex items-center gap-2 lg:gap-4">
            <FaSchool className="text-xl lg:text-2xl text-gray-700" />
            <h2 className="text-base lg:text-xl font-semibold text-gray-800 m-0">
              School Dashboard
            </h2>
          </div>
          <div>
            <h1 className="text-lg lg:text-xl font-bold text-gray-800 m-0">
              School Name
            </h1>
          </div>
        </div>

        {/* Navigation Menu */}
        <div className="px-2 lg:px-8 py-0 overflow-x-auto scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-transparent">
          <ul className="flex items-center gap-0.5 lg:gap-1 m-0 p-0 list-none min-w-max">
            {navMenuItems.map((item, index) => {
              const isActiveMain = activeNav.mainIndex === index;

              return (
                <li key={index} className="relative group">
                  <button
                    className={`px-2 py-2 lg:px-4 lg:py-3 text-xs lg:text-sm font-medium cursor-pointer border-none bg-transparent uppercase tracking-wide relative whitespace-nowrap ${
                      isActiveMain
                        ? "text-gray-900 bg-gray-100 border-b-2 border-gray-800"
                        : "text-gray-600 hover:text-gray-900 hover:bg-gray-50"
                    }`}
                    onClick={() =>
                      setActiveNav({ mainIndex: index, subIndex: null })
                    }
                  >
                    {item.title}
                  </button>

                  <div className="absolute top-full left-0 mt-0 w-32 lg:w-40 bg-white shadow-md rounded-b opacity-0 invisible group-hover:opacity-100 group-hover:visible z-[200] border border-gray-200">
                    <ul className="py-2 m-0 p-0 list-none">
                      {item.subItems.map((subItem, subIndex) => {
                        const isActiveSub =
                          activeNav.mainIndex === index &&
                          activeNav.subIndex === subIndex;

                        return (
                          <li key={subIndex}>
                            <a
                              href="#"
                              className={`block px-3 py-2 lg:px-5 lg:py-3 text-xs lg:text-sm no-underline border-l-2 ${
                                isActiveSub
                                  ? "text-gray-900 bg-gray-50 border-gray-800"
                                  : "text-gray-600 border-transparent hover:text-gray-900 hover:bg-gray-50 hover:border-gray-400"
                              }`}
                              onClick={(e) => {
                                e.preventDefault();
                                setActiveNav({ mainIndex: index, subIndex });
                                console.log(
                                  `Clicked: ${item.title} > ${subItem}`
                                );
                              }}
                            >
                              {subItem}
                            </a>
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      </nav>

      <div className="flex flex-1 overflow-hidden">
        {/* Sidebar */}
        <aside
          className={`w-[280px] bg-gradient-to-b from-blue-900 to-cyan-700 text-white py-6 overflow-y-auto shadow-[4px_0_20px_rgba(0,0,0,0.2)] transition-all duration-300 ease-in-out border-r-[3px] border-cyan-500/50`}
        >
          <div className={`px-6 pb-4 border-b-2 border-gray-200 mb-4`}>
            <h3
              className={`opacity-100 text-xs font-bold text-cyan-200 uppercase tracking-[1.5px] m-0 [text-shadow:0_0_10px_rgba(103,232,249,0.5)]`}
            >
              Menu
            </h3>
          </div>
          <ul className="list-none p-0 m-0">
            {sidebarLinks.map((item, index) => (
              <li
                key={index}
                className={`flex items-center px-6 py-4 cursor-pointer transition-all duration-300 ease-in-out border-l-4 ${
                  item.active
                    ? "border-l-cyan-400 bg-gradient-to-r from-cyan-500/30 to-white/15 shadow-[0_4px_15px_rgba(6,182,212,0.4)]"
                    : "border-l-transparent hover:border-l-cyan-400 hover:bg-gradient-to-r hover:from-cyan-500/20 hover:to-white/10"
                } my-1 mx-2 relative rounded-r-[10px] hover:translate-x-[5px] group`}
                onClick={() => toggleSidebar(item.label)}
              >
                <item.icon
                  className={`text-lg lg:text-xl mr-2 lg:mr-3 xl:mr-4 w-5 lg:w-6 ${
                    item.active
                      ? "text-cyan-200 scale-[1.2] drop-shadow-[0_0_8px_rgba(103,232,249,0.6)]"
                      : "text-cyan-100 group-hover:text-white group-hover:scale-[1.2] group-hover:rotate-[5deg]"
                  } transition-all duration-300`}
                />
                <span
                  className={`opacity-100 text-xs lg:text-sm xl:text-[0.95rem] ${
                    item.active
                      ? "text-white font-bold"
                      : "text-cyan-100 font-semibold group-hover:text-white"
                  } transition-all duration-300`}
                >
                  {item.label}
                </span>
              </li>
            ))}
          </ul>
        </aside>

        {/* Right Content Area */}
        <main className="flex-1 bg-gray-100 p-4 lg:p-6 xl:p-10 overflow-y-auto scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-gray-100">
          <div className="bg-white rounded-lg p-6 lg:p-8 xl:p-12 shadow-sm max-w-full border border-gray-200">
            <h2 className="text-xl lg:text-2xl xl:text-3xl font-bold text-gray-800 mb-6 lg:mb-8 xl:mb-10 text-center pb-4 lg:pb-6 uppercase tracking-wide border-b-2 border-gray-800">
              Student Registration Form
            </h2>
            <form onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 gap-4 lg:gap-5 xl:gap-6 mb-6 lg:mb-8 px-2 lg:px-6 xl:px-10 mx-0 lg:mx-4 xl:mx-10">
                <div className="flex flex-col lg:flex-row lg:items-center gap-2">
                  <label
                    htmlFor="studentName"
                    className="text-xs lg:text-sm font-semibold text-gray-700 capitalize lg:w-40 xl:w-48 shrink-0"
                  >
                    Student Name
                  </label>
                  <input
                    type="text"
                    id="studentName"
                    name="studentName"
                    value={formData.studentName}
                    onChange={handleInputChange}
                    placeholder="Enter student name"
                    className="flex-1 p-3 lg:p-4 px-4 lg:px-5 border border-gray-300 rounded text-sm lg:text-base bg-white text-gray-900 placeholder:text-gray-400 focus:outline-none focus:border-gray-500 focus:ring-1 focus:ring-gray-500"
                  />
                </div>

                <div className="flex flex-col lg:flex-row lg:items-center gap-2">
                  <label
                    htmlFor="rollNumber"
                    className="text-xs lg:text-sm font-semibold text-gray-700 capitalize lg:w-40 xl:w-48 shrink-0"
                  >
                    Roll Number
                  </label>
                  <input
                    type="text"
                    id="rollNumber"
                    name="rollNumber"
                    value={formData.rollNumber}
                    onChange={handleInputChange}
                    placeholder="Enter roll number"
                    className="flex-1 p-3 lg:p-4 px-4 lg:px-5 border border-gray-300 rounded text-sm lg:text-base bg-white text-gray-900 placeholder:text-gray-400 focus:outline-none focus:border-gray-500 focus:ring-1 focus:ring-gray-500"
                  />
                </div>

                <div className="flex flex-col lg:flex-row lg:items-center gap-2">
                  <label
                    htmlFor="grade"
                    className="text-xs lg:text-sm font-semibold text-gray-700 capitalize lg:w-40 xl:w-48 shrink-0"
                  >
                    Grade
                  </label>
                  <input
                    type="text"
                    id="grade"
                    name="grade"
                    value={formData.grade}
                    onChange={handleInputChange}
                    placeholder="Enter grade"
                    className="flex-1 p-3 lg:p-4 px-4 lg:px-5 border border-gray-300 rounded text-sm lg:text-base bg-white text-gray-900 placeholder:text-gray-400 focus:outline-none focus:border-gray-500 focus:ring-1 focus:ring-gray-500"
                  />
                </div>

                <div className="flex flex-col lg:flex-row lg:items-center gap-2">
                  <label
                    htmlFor="section"
                    className="text-xs lg:text-sm font-semibold text-gray-700 capitalize lg:w-40 xl:w-48 shrink-0"
                  >
                    Section
                  </label>
                  <input
                    type="text"
                    id="section"
                    name="section"
                    value={formData.section}
                    onChange={handleInputChange}
                    placeholder="Enter section"
                    className="flex-1 p-3 lg:p-4 px-4 lg:px-5 border border-gray-300 rounded text-sm lg:text-base bg-white text-gray-900 placeholder:text-gray-400 focus:outline-none focus:border-gray-500 focus:ring-1 focus:ring-gray-500"
                  />
                </div>

                <div className="flex flex-col lg:flex-row lg:items-center gap-2">
                  <label
                    htmlFor="dateOfBirth"
                    className="text-xs lg:text-sm font-semibold text-gray-700 capitalize lg:w-40 xl:w-48 shrink-0"
                  >
                    Date of Birth
                  </label>
                  <input
                    type="date"
                    id="dateOfBirth"
                    name="dateOfBirth"
                    value={formData.dateOfBirth}
                    onChange={handleInputChange}
                    className="flex-1 p-3 lg:p-4 px-4 lg:px-5 border border-gray-300 rounded text-sm lg:text-base bg-white text-gray-900 placeholder:text-gray-400 focus:outline-none focus:border-gray-500 focus:ring-1 focus:ring-gray-500"
                  />
                </div>

                <div className="flex flex-col lg:flex-row lg:items-center gap-2">
                  <label
                    htmlFor="parentName"
                    className="text-xs lg:text-sm font-semibold text-gray-700 capitalize lg:w-40 xl:w-48 shrink-0"
                  >
                    Parent/Guardian Name
                  </label>
                  <input
                    type="text"
                    id="parentName"
                    name="parentName"
                    value={formData.parentName}
                    onChange={handleInputChange}
                    placeholder="Enter parent name"
                    className="flex-1 p-3 lg:p-4 px-4 lg:px-5 border border-gray-300 rounded text-sm lg:text-base bg-white text-gray-900 placeholder:text-gray-400 focus:outline-none focus:border-gray-500 focus:ring-1 focus:ring-gray-500"
                  />
                </div>

                <div className="flex flex-col lg:flex-row lg:items-center gap-2">
                  <label
                    htmlFor="contactNumber"
                    className="text-xs lg:text-sm font-semibold text-gray-700 capitalize lg:w-40 xl:w-48 shrink-0"
                  >
                    Contact Number
                  </label>
                  <input
                    type="tel"
                    id="contactNumber"
                    name="contactNumber"
                    value={formData.contactNumber}
                    onChange={handleInputChange}
                    placeholder="Enter contact number"
                    className="flex-1 p-3 lg:p-4 px-4 lg:px-5 border border-gray-300 rounded text-sm lg:text-base bg-white text-gray-900 placeholder:text-gray-400 focus:outline-none focus:border-gray-500 focus:ring-1 focus:ring-gray-500"
                  />
                </div>

                <div className="flex flex-col lg:flex-row lg:items-center gap-2">
                  <label
                    htmlFor="email"
                    className="text-xs lg:text-sm font-semibold text-gray-700 capitalize lg:w-40 xl:w-48 shrink-0"
                  >
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="Enter email address"
                    className="flex-1 p-3 lg:p-4 px-4 lg:px-5 border border-gray-300 rounded text-sm lg:text-base bg-white text-gray-900 placeholder:text-gray-400 focus:outline-none focus:border-gray-500 focus:ring-1 focus:ring-gray-500"
                  />
                </div>

                <div className="flex flex-col lg:flex-row lg:items-center gap-2 col-span-1">
                  <label
                    htmlFor="address"
                    className="text-xs lg:text-sm font-semibold text-gray-700 capitalize lg:w-40 xl:w-48 shrink-0"
                  >
                    Address
                  </label>
                  <input
                    type="text"
                    id="address"
                    name="address"
                    value={formData.address}
                    onChange={handleInputChange}
                    placeholder="Enter full address"
                    className="flex-1 p-3 lg:p-4 px-4 lg:px-5 border border-gray-300 rounded text-sm lg:text-base bg-white text-gray-900 placeholder:text-gray-400 focus:outline-none focus:border-gray-500 focus:ring-1 focus:ring-gray-500"
                  />
                </div>

                <div className="flex flex-col lg:flex-row lg:items-center gap-2 col-span-1">
                  <label
                    htmlFor="emergencyContact"
                    className="text-xs lg:text-sm font-semibold text-gray-700 capitalize lg:w-40 xl:w-48 shrink-0"
                  >
                    Emergency Contact
                  </label>
                  <input
                    type="tel"
                    id="emergencyContact"
                    name="emergencyContact"
                    value={formData.emergencyContact}
                    onChange={handleInputChange}
                    placeholder="Enter emergency contact number"
                    className="flex-1 p-3 lg:p-4 px-4 lg:px-5 border border-gray-300 rounded text-sm lg:text-base bg-white text-gray-900 placeholder:text-gray-400 focus:outline-none focus:border-gray-500 focus:ring-1 focus:ring-gray-500"
                  />
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-3 lg:gap-4 justify-center mt-6 lg:mt-8">
                {/* Submit Button */}
                <button
                  type="submit"
                  className="py-3 px-8 lg:py-3 lg:px-10 rounded text-sm lg:text-base font-semibold cursor-pointer uppercase tracking-wide bg-gray-800 text-white border border-gray-800 w-full sm:w-auto hover:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-gray-500"
                >
                  Submit
                </button>

                {/* Reset Button */}
                <button
                  type="button"
                  onClick={handleReset}
                  className="py-3 px-8 lg:py-3 lg:px-10 rounded text-sm lg:text-base font-semibold cursor-pointer uppercase tracking-wide bg-white text-gray-800 border border-gray-300 w-full sm:w-auto hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-gray-500"
                >
                  Reset
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
