// Card.js
import React from 'react';

const Card = ({ title, content }) => (
  <div className="card m-3" style={{ width: '18rem' }}>
    <div className="card-body">
      <h5 className="card-title">{title}</h5>
      <p className="card-text">{content}</p>
    </div>
  </div>
);

export default Card;
