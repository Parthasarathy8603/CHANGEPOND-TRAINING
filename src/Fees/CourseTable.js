import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
const CourseTable = () => {
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
        setError('Error fetching data. Please try again.'); // Set an error message
      } finally {
        setLoading(false); // Set loading state to false regardless of success or failure
      }
    };

    fetchData();
  }, []); // The empty dependency array ensures that this effect runs once, similar to componentDidMount

  return (
    <div>
      <h2>Course Table</h2>
      {loading ? (
        <p>Loading...</p>
      ) : error ? (
        <p>{error}</p>
      ) : (
        <table className="table " style={{border: '2px solid black',textAlign:'center' }}>
          <thead>
            <tr className='text-center'>
              <th>Course ID</th>
              <th>Course Name</th>
              <th>Registration Fees</th>
              <th>Course Fees</th>
              <th>Total Fees</th>
            </tr>
          </thead>
          <tbody  className='text-center'>
            {courses.map(course => (
              <tr  key={course.courseid}>
                <td>{course.courseid}</td>
                <td>{course.coursename}</td>
                <td>{course.registrationfees}</td>
                <td>{course.coursefees}</td>
                <td>{course.totalfees}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
      <button>
            <Link to="/sidebar">Back</Link>
          </button>
    </div>
  );
};

export default CourseTable;
