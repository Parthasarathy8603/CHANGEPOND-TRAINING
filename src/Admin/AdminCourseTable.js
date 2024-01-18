import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const AdminCourseTable = () => {
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:8080/getfee');
        setCourses(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
        setError('Error fetching data. Please try again.');
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  // Add your state variables for the form fields
  const [formData, setFormData] = useState({
    courseid: '',
    coursename: '',
    registrationfees: '',
    coursefees: '',
    totalfees: '',
  });

  // Function to handle form field changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  // Function to handle form submission (Add or Edit)
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Perform the necessary action (Add or Edit) using formData
      // Update the backend accordingly

      // After submitting, you may want to refetch the data
      const response = await axios.get('http://localhost:8080/getfee');
      setCourses(response.data);

      // Clear the form fields
      setFormData({
        courseid: '',
        coursename: '',
        registrationfees: '',
        coursefees: '',
        totalfees: '',
      });
    } catch (error) {
      console.error('Error submitting form:', error);
    }
  };

  // Function to handle course deletion
  const handleDelete = async (courseId) => {
    try {
      // Perform deletion using courseId
      // Update the backend accordingly

      // After deletion, you may want to refetch the data
      const response = await axios.get('http://localhost:8080/getfee');
      setCourses(response.data);
    } catch (error) {
      console.error('Error deleting course:', error);
    }
  };

  return (
    <div>
      <h2>Course Table</h2>
      {loading ? (
        <p>Loading...</p>
      ) : error ? (
        <p>{error}</p>
      ) : (
        <>
          <table className="table">
            <thead>
              <tr>
                <th>Course ID</th>
                <th>Course Name</th>
                <th>Registration Fees</th>
                <th>Course Fees</th>
                <th>Total Fees</th>
                <th style={{textAlign:'center'}}>Action</th>
              </tr>
            </thead>
            <tbody>
              {courses.map((course) => (
                <tr key={course.courseid}>
                  <td>{course.courseid}</td>
                  <td>{course.coursename}</td>
                  <td>{course.registrationfees}</td>
                  <td>{course.coursefees}</td>
                  <td>{course.totalfees}</td>
                  <td>
                    <button onClick={() => handleDelete(course.courseid)}>Delete</button>&emsp;
                    <button><Link  className='btn btn-success' to="/add">Add</Link></button>&emsp;
                    <button><Link  className='btn btn-success' to="/edit">Edit</Link></button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <button>
            <Link to="/">Back</Link>
          </button>
        </>
      )}
    </div>
  );
};

export default AdminCourseTable;
