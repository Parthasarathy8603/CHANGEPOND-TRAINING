import React, { useState } from 'react';
import axios from 'axios';

const ExamFees = ({ onSubmit }) => {
  const [formData, setFormData] = useState({
    id: '',
    regId: '',
    fullName: '',
    courseId: '',
    courseName: '',
    examFees: '', 
    paymentType: '',
    paydate: ''
  });

  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const [errors, setErrors] = useState({});
  const [selectedDate, setSelectedDate] = useState(new Date());




  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleDateChange = (e) => {
    const { value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      paydate: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const validationErrors = validateForm(formData);
    setErrors(validationErrors);

    // If there are validation errors, don't proceed with form submission
    if (Object.keys(validationErrors).length > 0) {
      return;
    }



    try {
      await axios.post('http://localhost:8080/examfees', formData);
      console.log(formData);
      window.location.href = '/payment'; // Redirect to the default page after successful submission
    } catch (error) {
      console.error('Error creating user:', error);
    }
  };

  const validateForm = (data) => {
    let errors = {};

    if (!errors.regId) {
      errors.regId = 'Student ID is required';
    }
    if (!data.fullName) {
      errors.fullName = 'Student Name is required';
    }
    if (!data.courseId) {
      errors.courseId = 'Course ID is required';
    }
    if (!data.courseName) {
      errors.courseName = 'Course Name is required';
    }
    if (!data.examFees) {
      errors.examFees = 'Exam Fees is required';
    }

    return errors;
  };

  return (
    <div>
      {isFormSubmitted ? (
        <p className="submitted-message">Form submitted successfully!</p>
      ) : (
        <div className="container" style={{width:'50%'}}>
          <h1>Payment of Course Fee</h1>
          <form>
            <div>
              <label>Student ID:</label>
              <input type="text" name="regId" value={formData.regId} onChange={handleChange} />
              {errors.regId && <p className="error">{errors.regId}</p>}
            </div>

            <div>
              <label>Student Name:</label>
              <input type="text" name="fullName" value={formData.fullName} onChange={handleChange} />
              {errors.fullName && <p className="error">{errors.fullName}</p>}
            </div>

            <div>
              <label>Course ID:</label>
              <input type="text" name="courseId" value={formData.courseId} onChange={handleChange} />
              {errors.courseId && <p className="error">{errors.courseId}</p>}
            </div>

            <div>
              <label>Course Name:</label>
              <input type="text" name="courseName" value={formData.courseName} onChange={handleChange} />
              {errors.courseName && <p className="error">{errors.courseName}</p>}
            </div>

            <div>
              <label>Exam Fees:</label>
              <input type="number" name="examFees" value={formData.examFees} onChange={handleChange} />
              {errors.examFees && <p className="error">{errors.examFees}</p>}
            </div>

            <div className="form-group">
              <label htmlFor="paymentType">Payment Type:</label>
              <select
                id="paymentType"
                name="paymentType"
                value={formData.paymentType}
                onChange={handleChange}
                required
              >
                <option value="">Select Payment Type</option>
                <option value="Credit Card">Credit Card</option>
                <option value="Debit Card">Debit Card</option>
                <option value="Net Banking">Net Banking</option>
                <option value="UPI Payment">UPI Payment</option>
              </select>
            </div>
            

            <div>
            <label htmlFor="date">Date : </label>
            <input
              type="date"
              id="datePicker"
              value={selectedDate.toISOString().split('T')[0]} // Convert to 'YYYY-MM-DD' format
              onChange={handleDateChange}
              max={new Date().toISOString().split('T')[0]} // Set the maximum date to today
            />
          </div><br></br>
            <button type="submit" onClick={handleSubmit} style={{border:''}}>Submit</button>
          </form>
        </div>
      )}
    </div>
  );
};

export default ExamFees;