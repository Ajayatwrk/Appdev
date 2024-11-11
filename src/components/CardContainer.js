import React from 'react';
import './CardContainer.css';

const CardContainer = () => {
  return (
    <div className="card-container">
      <div className="card">
        <h3>Card 1</h3>
        <p>Card 1 content</p>
      </div>
      <div className="card">
        <h3>Card 2</h3>
        <p>Card 2 content</p>
      </div>
      <div className="card">
        <h3>Card 3</h3>
        <p>Card 3 content</p>
      </div>
    </div>
  );
};

export default CardContainer;
