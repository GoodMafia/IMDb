import React from 'react';
import { Link } from 'react-router-dom';
import './Error404.scss';

export default function Error404() {
  return (
    <div className="error-container">
      <h1 className="error-message">Упс! Кажется, такой страницы не существует</h1>
      <div className="links">
        <Link className="error-link" to="/">Home</Link>
        <Link className="error-link" to="/search">Search on YT</Link>
        <Link className="error-link" to="/register">Register</Link>
      </div>
    </div>
  );
}