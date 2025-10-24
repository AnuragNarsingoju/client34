import React, { useState, useEffect } from "react";

const SchoolPageNew = () => {
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [enrollmentNumber, setEnrollmentNumber] = useState("");
  const [isDarkTheme, setIsDarkTheme] = useState(false);
  const [formData, setFormData] = useState({
    studentName: "",
    fatherName: "",
    motherName: "",
    dateOfBirth: "",
    email: "",
    phoneNumber: "",
    address: "",
    course: "",
    semester: "",
    academicYear: "",
    
  });

  // News ticker data - more comprehensive news items
  const newsItems = [
    "MHRM / MA Social work Last date or submission or proposal date- 15-03-2024.",
    "New admissions open for 2024-25 academic year - Apply now!",
    "Examination results will be declared on 20th March 2024.",
    "Study material distribution starts from 1st April 2024.",
    "Online classes schedule updated for all programmes.",
    "Fee payment deadline extended to 25th March 2024.",
    "Student portal maintenance scheduled for 18th March 2024.",
    "Career guidance workshop on 22nd March 2024.",
    "Library services now available 24/7 online.",
    "Scholarship applications open for meritorious students.",
    "International conference on Distance Education - 30th March 2024.",
    "Alumni meet scheduled for 5th April 2024.",
  ];

  // Navigation menu items with dropdowns
  const navItems = [
    {
      label: "HOME",
      dropdown: [],
    },
    {
      label: "ABOUT UNIVERSITY",
      dropdown: [
        "University History",
        "Vision & Mission",
        "Administration",
        "Faculty",
        "Infrastructure",
      ],
    },
    {
      label: "PROGRAMMES",
      dropdown: [
        "Undergraduate Programmes",
        "Postgraduate Programmes",
        "Certificate Courses",
        "Diploma Courses",
        "Research Programmes",
      ],
    },
    {
      label: "STUDY CENTRES",
      dropdown: [
        "Regional Centres",
        "Study Centre Locations",
        "Contact Information",
        "Facilities",
      ],
    },
    {
      label: "ADMISSIONS",
      dropdown: [
        "Admission Notifications",
        "Admission Application form",
        "Fee Particulars",
        "Method of Instruction",
        "PROSPECTOUS",
        "LATERAL ENTRY ADMISSIONS",
        "ACADEMIC SCHEDULE",
      ],
    },
    {
      label: "STUDENT SERVICES",
      dropdown: [
        "Student Portal",
        "Library Services",
        "Career Guidance",
        "Scholarship Information",
        "Student Support",
      ],
    },
    {
      label: "EXAMINATIONS",
      dropdown: [
        "Exam Schedule",
        "Results",
        "Hall Tickets",
        "Exam Guidelines",
        "Revaluation",
      ],
    },
    {
      label: "e-Services/ERP",
      dropdown: [
        "Student Login",
        "Faculty Login",
        "Online Payment",
        "Document Verification",
        "Help Desk",
      ],
    },
    {
      label: "STUDY MATERIAL",
      dropdown: [
        "Course Materials",
        "E-Books",
        "Video Lectures",
        "Assignment Guidelines",
        "Reference Books",
      ],
    },
    {
      label: "CONTACT US",
      dropdown: [
        "Contact Information",
        "Office Hours",
        "Location Map",
        "Feedback",
        "Complaints",
      ],
    },
  ];

  // Sidebar menu items
 const sidebarItems = [
  { label: "DASHBOARD" },
  { label: "ACADEMICS" },
  { label: "SERVICES" },
  { label: "ACCOUNT" },
  { label: "STUDENTS" },
  { label: "FACULTY" },
  { label: "ATTENDANCE" },
  { label: "EXAM RESULTS" },
  { label: "LIBRARY" },
  { label: "HOSTEL" },
  { label: "TRANSPORT" },
  { label: "SETTINGS" },
  { label: "HELP & SUPPORT" }

];

  const handleInputChange = (field, value) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (enrollmentNumber.trim()) {
      alert(`Searching for enrollment number: ${enrollmentNumber}\n\nAdditional fields:\n${Object.entries(formData).map(([key, value]) => `${key}: ${value}`).join('\n')}`);
    } else {
      alert("Please enter an enrollment number");
    }
  };

  const toggleTheme = () => {
    setIsDarkTheme(!isDarkTheme);
  };

  return (
    <div
      className={`min-h-screen transition-colors duration-300 ${
        isDarkTheme ? "bg-gray-900" : "bg-white"
      }`}
    >
      {/* Top News Ticker */}
      <div className="bg-[#e2227a] text-white py-2 px-4 flex items-center">
        <span className="font-semibold mr-4 whitespace-nowrap">
          Latest News:
        </span>
        <div className="flex-1 overflow-hidden">
          <div className="animate-scroll font-bold whitespace-nowrap text-yellow-300">
            {/* Duplicate the news items for seamless looping */}
            {[...newsItems, ...newsItems].map((item, index) => (
              <span key={index} className="mr-12 inline-block">
                {item} •
              </span>
            ))}
          </div>
        </div>
        <button className="text-white-500 px-4 py-1 hover:underline  text-sm font-bold">
          Click Here For Admission Application Form
        </button>
      </div>

      {/* Main Header */}
      <header className="bg-white">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          {/* Left - University Logo */}
          {/* <div className="flex-shrink-0">
            <img
              src="/header1.png"
              alt="University Logo"
              className="w-40 h-40 object-contain"
            />
          </div> */}

          {/* Center - University Name */}
          <div className="text-center flex-1">
   
           
            <h2 className="text-2xl font-bold text-blue-900 mb-2">
             Admin panel 
            </h2>
            </div>
            
            {/* <img
              src="/header3.png"
              alt="University Name"
              className="w-108 h-64 object-contain"
            /> */}


          {/* Right - Azadi Ka Amrit Mahotsav Logo */}
          {/* <div className="flex-shrink-0">
            <img
              src="/header2.png"
              alt="Azadi Ka Amrit Mahotsav"
              className="w-68 h-52 object-contain"
            />
          </div> */}
        </div>
      </header>

      {/* Navigation Bar */}
      <nav className="bg-[#12457a] text-white">
        <div className="flex items-center justify-between px-2">
          <div className="flex items-center justify-between space-x-1">
            {navItems.map((item, index) => (
              <div
                key={index}
                className="relative group hover:text-red-500"
                onMouseEnter={() => setActiveDropdown(index)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <button className="px-4 py-4 text-sm font-medium transition-all duration-300 ease-in-out flex items-center hover:text-red-500">
                  <span className="text-white hover:text-yellow-300 hover:underline transition-colors duration-300 flex items-center justify-center">
                    {item.label}
                    {item.dropdown.length > 0 && (
                      <svg
                        className="ml-1 w-3 h-3 transition-transform duration-300 group-hover:rotate-180"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                          clipRule="evenodd"
                        />
                      </svg>
                    )}
                  </span>
                </button>

                {/* Dropdown Menu */}
                {item.dropdown.length > 0 && activeDropdown === index && (
                  <div className="absolute top-full left-0 bg-[#12457b] shadow-xl z-50 min-w-64 border border-red-500/20 animate-fadeIn">
                    {item.dropdown.map((dropdownItem, dropdownIndex) => (
                      <a
                        key={dropdownIndex}
                        href="#"
                        className="block px-4 py-3 text-sm text-white hover:underline last:border-b-0 border-b border-gray-300 border-dashed"
                        onClick={(e) => e.preventDefault()}
                      >
                        {dropdownItem}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main
        className={`transition-colors duration-300 ${
          isDarkTheme ? "bg-gray-800" : "bg-white"
        }`}
      >
        <div className="flex border-t border-b">
          {/* Sidebar */}
          <aside
            className={`w-64 p-6 shadow-sm transition-colors duration-300 ${
              isDarkTheme ? "bg-[#12457a]" : "bg-[#12457a]"
            }`}
          >
            <h3
              className={`text-lg font-bold mb-6 text-center transition-colors duration-300 ${
                isDarkTheme ? "text-white" : "text-white"
              }`}
            >
              Quick Access
            </h3>
            <div
              className={`space-y-2 border transition-colors duration-300 ${
                isDarkTheme ? "border-gray-600" : "border-gray-300"
              }`}
            >
              {sidebarItems.map((item, index) => (
                <div
                  key={index}
                  className={`relative group border transition-colors duration-300 ${
                    isDarkTheme ? "border-gray-600" : "border-gray-300"
                  }`}
                >
                  <button
                    className={`w-full text-left px-4 py-3 text-sm font-medium hover:bg-[#12457b] hover:text-yellow-300 hover:underline transition-all duration-300 border transition-colors duration-300 ${
                      isDarkTheme
                        ? "text-white border-gray-600"
                        : "text-white border-gray-300"
                    }`}
                  >
                    <span className="flex items-center justify-between">
                      {item.label}
                    </span>
                  </button>
                </div>
              ))}
            </div>
          </aside>

          {/* Main Content Area */}
          <div className="flex-1 w-full">
            {/* Results Banner */}
            {/* <div
              className="text-center py-4 transition-colors duration-300"
              style={{ backgroundColor: '#f5c5b0'}}
            >
              <h2 className="text-md font-bold transition-colors duration-300" style={{color:'#cf080f'}}>
                August 2023 - RESULTS
              </h2>
            </div> */}

            {/* Enrollment Form */}
            <div
              className={`border p-6 shadow-sm transition-colors duration-300 ${
                isDarkTheme
                  ? "bg-gray-700 border-gray-600"
                  : "bg-white border-gray-300"
              }`}
            >
              <form onSubmit={handleSubmit} >
                <div className="flex items-center space-x-4 border border-gray-600">
                  <label
                    htmlFor="enrollment"
                    className={`mx-2 text-md font-medium whitespace-nowrap transition-colors duration-300 w-64 ${
                      isDarkTheme ? "text-gray-200" : "text-gray-800"
                    }`}
                  >
                    Enter Enrolment / Register Number
                  </label>
                  <input
                    type="text"
                    id="enrollment"
                    value={enrollmentNumber}
                    onChange={(e) => setEnrollmentNumber(e.target.value)}
                    className={`flex-1 px-4 py-2 border focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors duration-300 ${
                      isDarkTheme
                        ? "bg-gray-600 border-gray-700 text-white placeholder-gray-400"
                        : "border-gray-600"
                    }`}
                    placeholder="Enter your enrollment number"
                  />
                </div>

                <div className="flex items-center space-x-4 border border-gray-600">
                  <label
                    htmlFor="studentName"
                    className={`mx-2 text-md font-medium whitespace-nowrap transition-colors duration-300 w-64 ${
                      isDarkTheme ? "text-gray-200" : "text-gray-800"
                    }`}
                  >
                    Student Name
                  </label>
                  <input
                    type="text"
                    id="studentName"
                    value={formData.studentName}
                    onChange={(e) => handleInputChange("studentName", e.target.value)}
                    className={`flex-1 px-4 py-2 border focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors duration-300 ${
                      isDarkTheme
                        ? "bg-gray-600 border-gray-700 text-white placeholder-gray-400"
                        : "border-gray-600"
                    }`}
                    placeholder="Enter student name"
                  />
                </div>

                <div className="flex items-center space-x-4 border border-gray-600">
                  <label
                    htmlFor="fatherName"
                    className={`mx-2 text-md font-medium whitespace-nowrap transition-colors duration-300 w-64 ${
                      isDarkTheme ? "text-gray-200" : "text-gray-800"
                    }`}
                  >
                    Father's Name
                  </label>
                  <input
                    type="text"
                    id="fatherName"
                    value={formData.fatherName}
                    onChange={(e) => handleInputChange("fatherName", e.target.value)}
                    className={`flex-1 px-4 py-2 border focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors duration-300 ${
                      isDarkTheme
                        ? "bg-gray-600 border-gray-700 text-white placeholder-gray-400"
                        : "border-gray-600"
                    }`}
                    placeholder="Enter father's name"
                  />
                </div>

                <div className="flex items-center space-x-4 border border-gray-600">
                  <label
                    htmlFor="motherName"
                    className={`mx-2 text-md font-medium whitespace-nowrap transition-colors duration-300 w-64 ${
                      isDarkTheme ? "text-gray-200" : "text-gray-800"
                    }`}
                  >
                    Mother's Name
                  </label>
                  <input
                    type="text"
                    id="motherName"
                    value={formData.motherName}
                    onChange={(e) => handleInputChange("motherName", e.target.value)}
                    className={`flex-1 px-4 py-2 border focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors duration-300 ${
                      isDarkTheme
                        ? "bg-gray-600 border-gray-700 text-white placeholder-gray-400"
                        : "border-gray-600"
                    }`}
                    placeholder="Enter mother's name"
                  />
                </div>

                <div className="flex items-center space-x-4 border border-gray-600">
                  <label
                    htmlFor="dateOfBirth"
                    className={`mx-2 text-md font-medium whitespace-nowrap transition-colors duration-300 w-64 ${
                      isDarkTheme ? "text-gray-200" : "text-gray-800"
                    }`}
                  >
                    Date of Birth
                  </label>
                  <input
                    type="date"
                    id="dateOfBirth"
                    value={formData.dateOfBirth}
                    onChange={(e) => handleInputChange("dateOfBirth", e.target.value)}
                    className={`flex-1 px-4 py-2 border focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors duration-300 ${
                      isDarkTheme
                        ? "bg-gray-600 border-gray-700 text-white placeholder-gray-400"
                        : "border-gray-600"
                    }`}
                    placeholder="Enter date of birth"
                  />
                </div>

                <div className="flex items-center space-x-4 border border-gray-600">
                  <label
                    htmlFor="email"
                    className={`mx-2 text-md font-medium whitespace-nowrap transition-colors duration-300 w-64 ${
                      isDarkTheme ? "text-gray-200" : "text-gray-800"
                    }`}
                  >
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    value={formData.email}
                    onChange={(e) => handleInputChange("email", e.target.value)}
                    className={`flex-1 px-4 py-2 border focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors duration-300 ${
                      isDarkTheme
                        ? "bg-gray-600 border-gray-700 text-white placeholder-gray-400"
                        : "border-gray-600"
                    }`}
                    placeholder="Enter email address"
                  />
                </div>

                <div className="flex items-center space-x-4 border border-gray-600">
                  <label
                    htmlFor="phoneNumber"
                    className={`mx-2 text-md font-medium whitespace-nowrap transition-colors duration-300 w-64 ${
                      isDarkTheme ? "text-gray-200" : "text-gray-800"
                    }`}
                  >
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phoneNumber"
                    value={formData.phoneNumber}
                    onChange={(e) => handleInputChange("phoneNumber", e.target.value)}
                    className={`flex-1 px-4 py-2 border focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors duration-300 ${
                      isDarkTheme
                        ? "bg-gray-600 border-gray-700 text-white placeholder-gray-400"
                        : "border-gray-600"
                    }`}
                    placeholder="Enter phone number"
                  />
                </div>

                <div className="flex items-center space-x-4 border border-gray-600">
                  <label
                    htmlFor="address"
                    className={`mx-2 text-md font-medium whitespace-nowrap transition-colors duration-300 w-64 ${
                      isDarkTheme ? "text-gray-200" : "text-gray-800"
                    }`}
                  >
                    Address
                  </label>
                  <input
                    type="text"
                    id="address"
                    value={formData.address}
                    onChange={(e) => handleInputChange("address", e.target.value)}
                    className={`flex-1 px-4 py-2 border focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors duration-300 ${
                      isDarkTheme
                        ? "bg-gray-600 border-gray-700 text-white placeholder-gray-400"
                        : "border-gray-600"
                    }`}
                    placeholder="Enter address"
                  />
                </div>

                <div className="flex items-center space-x-4 border border-gray-600">
                  <label
                    htmlFor="course"
                    className={`mx-2 text-md font-medium whitespace-nowrap transition-colors duration-300 w-64 ${
                      isDarkTheme ? "text-gray-200" : "text-gray-800"
                    }`}
                  >
                    Course
                  </label>
                  <input
                    type="text"
                    id="course"
                    value={formData.course}
                    onChange={(e) => handleInputChange("course", e.target.value)}
                    className={`flex-1 px-4 py-2 border focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors duration-300 ${
                      isDarkTheme
                        ? "bg-gray-600 border-gray-700 text-white placeholder-gray-400"
                        : "border-gray-600"
                    }`}
                    placeholder="Enter course name"
                  />
                </div>

                <div className="flex items-center space-x-4 border border-gray-600">
                  <label
                    htmlFor="semester"
                    className={`mx-2 text-md font-medium whitespace-nowrap transition-colors duration-300 w-64 ${
                      isDarkTheme ? "text-gray-200" : "text-gray-800"
                    }`}
                  >
                    Semester
                  </label>
                  <input
                    type="text"
                    id="semester"
                    value={formData.semester}
                    onChange={(e) => handleInputChange("semester", e.target.value)}
                    className={`flex-1 px-4 py-2 border focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors duration-300 ${
                      isDarkTheme
                        ? "bg-gray-600 border-gray-700 text-white placeholder-gray-400"
                        : "border-gray-600"
                    }`}
                    placeholder="Enter semester"
                  />
                </div>

                <div className="flex items-center space-x-4 border border-gray-600">
                  <label
                    htmlFor="academicYear"
                    className={`mx-2 text-md font-medium whitespace-nowrap transition-colors duration-300 w-64 ${
                      isDarkTheme ? "text-gray-200" : "text-gray-800"
                    }`}
                  >
                    Academic Year
                  </label>
                  <input
                    type="text"
                    id="academicYear"
                    value={formData.academicYear}
                    onChange={(e) => handleInputChange("academicYear", e.target.value)}
                    className={`flex-1 px-4 py-2 border focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors duration-300 ${
                      isDarkTheme
                        ? "bg-gray-600 border-gray-700 text-white placeholder-gray-400"
                        : "border-gray-600"
                    }`}
                    placeholder="Enter academic year (e.g., 2023-24)"
                  />
                </div>

                <div className="text-center border border-gray-600">
                  <button
                    type="submit"
                    className={`border px-2 rounded-sm transition-colors duration-300 ${
                      isDarkTheme
                        ? "bg-gray-200 border-gray-500 text-white hover:bg-gray-500"
                        : "bg-gray-200 border-gray-500 text-gray-800 hover:bg-gray-50"
                    }`}
                  >
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-[#1e2c75] text-white py-6">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          {/* Left - Social Media */}
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-2">
              <button
                onClick={toggleTheme}
                className="w-8 h-4 bg-yellow-400 rounded-full flex items-center transition-all duration-300 hover:scale-110 cursor-pointer"
              >
                <div
                  className={`w-3 h-3 bg-white rounded-full transition-transform duration-300 ${
                    isDarkTheme ? "ml-5" : "ml-1"
                  }`}
                ></div>
              </button>
            </div>
            <span className="text-sm">Follow Us On</span>
            <div className="flex space-x-3">
              <a
                href="#"
                className="text-white hover:underline hover:text-red-500 transition-colors "
              >
                <img src="/icons/facebook.png" alt="Facebook" className="w-4 h-4" />
              </a>
              <a
                href="#"
                className="text-white hover:underline hover:text-red-500 transition-colors"
              >
                <img src="/icons/twitter.png" alt="Twitter" className="w-4 h-4" />
              </a>
              <a
                href="#"
                className="text-white hover:underline hover:text-red-500 transition-colors"
              >
                <img src="/icons/instagram.png" alt="Instagram" className="w-4 h-4" />
              </a>
              <a
                href="#"
                className="text-white hover:underline hover:text-red-500 transition-colors"
              >   
                <img src="/icons/linkedin.png" alt="LinkedIn" className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Right - Copyright */}
          <div className="text-sm">© All Rights Reserved @ 2023 ANU</div>
        </div>
      </footer>
    </div>
  );
};

export default SchoolPageNew;