"use client"
import React, { useState, useEffect } from 'react';

export default function MedicalForm() {
  const [symptoms, setSymptoms] = useState([]);
  const [selectedSymptoms, setSelectedSymptoms] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://10.11.191.67:3001/symptoms');
        if (response.status > 400) {
          throw new Error('Failed to fetch data');
        }
        const data = await response.json();
        // Extracting names from the fetched data and updating state
        setSymptoms(data.map(symptom => symptom.symptoms));
      } catch (error) {
        setError(error.message || 'Error fetching data');
      }
    };

    fetchData();
  }, []);

  const handleCheckboxChange = (event) => {
    const { value, checked } = event.target;
    if (checked) {
      setSelectedSymptoms([...selectedSymptoms, value]);
    } else {
      setSelectedSymptoms(selectedSymptoms.filter(symptom => symptom !== value));
    }
  };

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="flex justify-center pt-8 pb-8">
      <form className="w-1/2 bg-slate-700 pl-14 pr-14 pt-4">
        <br />
        <details className='bg-white p-2 text-black w-72'>
          <summary>Choose Symptoms</summary>
          {/* Render checkboxes for each symptom */}
          {symptoms.map((symptom, index) => (
            <div key={index}>
              <label>
                <input
                  type="checkbox"
                  value={symptom}
                  onChange={handleCheckboxChange}
                  checked={selectedSymptoms.includes(symptom)}
                />
                {symptom}
              </label>
            </div>
          ))}
        </details>
        <br />
        <label htmlFor="notes">Additional Notes:</label>
        <br />
        <textarea name="notes" rows="10" className="text-black w-72"></textarea>
        <br/>
        <label htmlFor="file">Upload Files Here:</label>
        <br/>
        <input id="file" name="file" type="file" />
        <br/>
        <br/>
        <input type="submit" className="bg-slate-800 p-2 rounded-xl" />
      </form>
    </div>
  );
}
