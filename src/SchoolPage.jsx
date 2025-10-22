import React, { useState } from 'react';
import './SchoolPage.css';
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
  FaBars
} from 'react-icons/fa';

const SchoolPage = () => {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [formData, setFormData] = useState({
    studentName: '',
    rollNumber: '',
    grade: '',
    section: '',
    dateOfBirth: '',
    parentName: '',
    contactNumber: '',
    email: '',
    address: '',
    emergencyContact: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form Data:', formData);
    alert('Form submitted successfully!');
  };

  const handleReset = () => {
    setFormData({
      studentName: '',
      rollNumber: '',
      grade: '',
      section: '',
      dateOfBirth: '',
      parentName: '',
      contactNumber: '',
      email: '',
      address: '',
      emergencyContact: ''
    });
  };

  return (
    <div className="school-container">
      {/* Navbar */}
      <nav className="navbar">
        <div className="navbar-left">
          <button className="menu-toggle" onClick={() => setSidebarOpen(!sidebarOpen)}>
            <FaBars />
          </button>
          <FaSchool className="school-logo" />
          <h2>School Dashboard</h2>
        </div>
        <div className="navbar-right">
          <h1>School Name</h1>
        </div>
      </nav>

      <div className="main-content">
        {/* Sidebar */}
        <aside className={`sidebar ${sidebarOpen ? 'open' : 'closed'}`}>
          <div className="sidebar-header">
            <h3>Menu</h3>
          </div>
          <ul className="sidebar-menu">
            <li className="sidebar-item active">
              <FaChartLine className="icon" />
              <span>Dashboard</span>
            </li>
            <li className="sidebar-item">
              <FaUserGraduate className="icon" />
              <span>Students</span>
            </li>
            <li className="sidebar-item">
              <FaChalkboardTeacher className="icon" />
              <span>Teachers</span>
            </li>
            <li className="sidebar-item">
              <FaBookOpen className="icon" />
              <span>Courses</span>
            </li>
            <li className="sidebar-item">
              <FaCalendarCheck className="icon" />
              <span>Attendance</span>
            </li>
            <li className="sidebar-item">
              <FaClipboardList className="icon" />
              <span>Examinations</span>
            </li>
            <li className="sidebar-item">
              <FaMoneyBillWave className="icon" />
              <span>Finance</span>
            </li>
            <li className="sidebar-item">
              <FaBullhorn className="icon" />
              <span>Announcements</span>
            </li>
            <li className="sidebar-item">
              <FaFileAlt className="icon" />
              <span>Reports</span>
            </li>
            <li className="sidebar-item">
              <FaCog className="icon" />
              <span>Settings</span>
            </li>
          </ul>
        </aside>

        {/* Right Content Area */}
        <main className="content-area">
          <div className="form-container">
            <h2 className="form-title">Student Registration Form</h2>
            <form onSubmit={handleSubmit}>
              <div className="form-grid">
                <div className="form-group">
                  <label htmlFor="studentName">Student Name</label>
                  <input
                    type="text"
                    id="studentName"
                    name="studentName"
                    value={formData.studentName}
                    onChange={handleInputChange}
                    placeholder="Enter student name"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="rollNumber">Roll Number</label>
                  <input
                    type="text"
                    id="rollNumber"
                    name="rollNumber"
                    value={formData.rollNumber}
                    onChange={handleInputChange}
                    placeholder="Enter roll number"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="grade">Grade</label>
                  <input
                    type="text"
                    id="grade"
                    name="grade"
                    value={formData.grade}
                    onChange={handleInputChange}
                    placeholder="Enter grade"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="section">Section</label>
                  <input
                    type="text"
                    id="section"
                    name="section"
                    value={formData.section}
                    onChange={handleInputChange}
                    placeholder="Enter section"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="dateOfBirth">Date of Birth</label>
                  <input
                    type="date"
                    id="dateOfBirth"
                    name="dateOfBirth"
                    value={formData.dateOfBirth}
                    onChange={handleInputChange}
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="parentName">Parent/Guardian Name</label>
                  <input
                    type="text"
                    id="parentName"
                    name="parentName"
                    value={formData.parentName}
                    onChange={handleInputChange}
                    placeholder="Enter parent name"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="contactNumber">Contact Number</label>
                  <input
                    type="tel"
                    id="contactNumber"
                    name="contactNumber"
                    value={formData.contactNumber}
                    onChange={handleInputChange}
                    placeholder="Enter contact number"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="email">Email Address</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="Enter email address"
                  />
                </div>

                <div className="form-group full-width">
                  <label htmlFor="address">Address</label>
                  <input
                    type="text"
                    id="address"
                    name="address"
                    value={formData.address}
                    onChange={handleInputChange}
                    placeholder="Enter full address"
                  />
                </div>

                <div className="form-group full-width">
                  <label htmlFor="emergencyContact">Emergency Contact</label>
                  <input
                    type="tel"
                    id="emergencyContact"
                    name="emergencyContact"
                    value={formData.emergencyContact}
                    onChange={handleInputChange}
                    placeholder="Enter emergency contact number"
                  />
                </div>
              </div>

              <div className="form-actions">
                <button type="submit" className="btn btn-primary">
                  Submit
                </button>
                <button type="button" onClick={handleReset} className="btn btn-secondary">
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
