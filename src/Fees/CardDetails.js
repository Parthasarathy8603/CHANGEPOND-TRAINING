import React, { useState } from 'react';

const CardDetails = () => {
  const [formData, setFormData] = useState({
    cardNumber: '',
    cardHolder: '',
    expirationDate: '',
    cvv: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Implement your logic for handling credit card details securely here
    console.log('Submitted Credit Card Details:', formData);
    // Reset the form after submission
    setFormData({
      cardNumber: '',
      cardHolder: '',
      expirationDate: '',
      cvv: '',
    });
  };

  return (
    <div className="credit-card-form">
      <h1>Enter Credit Card Details</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Card Number:</label>
          <input
            type="text"
            name="cardNumber"
            value={formData.cardNumber}
            onChange={handleChange}
            maxLength="16"
            placeholder="Enter card number"
            required
          />
        </div>
        <div className="form-group">
          <label>Card Holder:</label>
          <input
            type="text"
            name="cardHolder"
            value={formData.cardHolder}
            onChange={handleChange}
            placeholder="Enter card holder name"
            required
          />
        </div>
        <div className="form-group">
          <label>Expiration Date:</label>
          <input
            type="text"
            name="expirationDate"
            value={formData.expirationDate}
            onChange={handleChange}
            maxLength="5"
            placeholder="MM/YY"
            required
          />
        </div>
        <div className="form-group">
          <label>CVV:</label>
          <input
            type="text"
            name="cvv"
            value={formData.cvv}
            onChange={handleChange}
            maxLength="3"
            placeholder="Enter CVV"
            required
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default CardDetails;
