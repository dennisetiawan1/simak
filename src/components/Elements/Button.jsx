// src/components/atoms/Button.js
import React from 'react';

const Button = ({ onClick, children, isActive }) => (
  <button
    className={`tab ${isActive ? 'active' : ''}`}
    onClick={onClick}
  >
    {children}
  </button>
);

export default Button;
