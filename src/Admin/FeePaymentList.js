import React, { useState, useEffect } from 'react';
import axios from 'axios';

const FeePaymentList = () => {
  // State to store the fetched data
  const [feePayments, setFeePayments] = useState([]);

  useEffect(() => {
    // Function to fetch data from the backend
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:8080/payments/all');
        // Assuming your backend endpoint for fetching fee payments is 'http://your-backend-api-endpoint/fee-payments'
        
        // Set the fetched data to the state
        setFeePayments(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    // Call the fetchData function
    fetchData();
  }, []); // The empty dependency array ensures that this effect runs once when the component mounts

  return (
    <div>
      <h1>Fee Payments List</h1>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Registration ID</th>
            <th>Full Name</th>
            <th>Course ID</th>
            <th>Course Name</th>
            <th>Total Course Fee</th>
            <th>Payment Type</th>
            <th>Amount Paid</th>
            <th>Pending Amount</th>
            <th>Payment Option</th>
            <th>Installment Count</th>
            <th>Payment Date</th>
          </tr>
        </thead>
        <tbody>
          {feePayments.map((payment) => (
            <tr key={payment.id}>
              <td>{payment.id}</td>
              <td>{payment.regId}</td>
              <td>{payment.fullName}</td>
              <td>{payment.courseId}</td>
              <td>{payment.courseName}</td>
              <td>{payment.totalCourseFee}</td>
              <td>{payment.paymentType}</td>
              <td>{payment.amountPay}</td>
              <td>{payment.pendingAmount}</td>
              <td>{payment.paymentOption}</td>
              <td>{payment.installcount}</td>
              <td>{payment.paydate}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default FeePaymentList;
