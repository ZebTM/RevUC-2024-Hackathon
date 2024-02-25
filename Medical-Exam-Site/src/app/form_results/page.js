"use client"
import React, { useState, useEffect } from 'react';

export default function FormResults() {
  const [symptoms, setSymptoms] = useState([]);
  const [error, setError] = useState(null);

  const fetchData = () => {
    fetch('http://10.11.191.67:3000/symptoms')
      .then(response => {
        if (!response.ok) {
          throw new Error('Failed to fetch data');
        }
        return response.json();
      })
      .then(data => {
        setSymptoms(data);
      })
      .catch(error => {
        setError(error.message || 'Error fetching data');
      });
  };

  useEffect(() => {
    fetchData();
  }, []); // Empty dependency array to run only once

  return (
    <div>
      <h2>Results</h2>
      {error && <p>Error: {error}</p>}
      {symptoms.map((item, index) => (
        <p key={index}>{item.symptoms}</p>
      ))}
    </div>
  );
}

  