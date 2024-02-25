'use client'
import { useState } from 'react';
// import { NextResponse } from 'next/server';
// import { getAccessToken, withApiAuthRequired } from '@auth0/nextjs-auth0';

// const GET = withApiAuthRequired(async function GET(req) {
//   const res = new NextResponse();
//   const { accessToken } = await getAccessToken(req, res);
//   return accessToken;
// });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://10.11.191.67:3000/symptomList');
        if (response.status > 400) {
          throw new Error('Failed to fetch data');
        }
        const data = await response.json();
        // Extracting names from the fetched data and updating state
        setSymptoms(data.map(symptom => symptom.name));
      } catch (error) {
        setError(error.message || 'Error fetching data');
      }
    };
  })

// async function createHeader() {
//   let x = await GET();
//   const header = {'Header': `Bearer ${x}`};
//   return header;
// }

// /status
async function MedicalForm() {
  //let headers = await createHeader();
  //let retval = await fetch("http://10.11.191.67:3001/status");
  const [ symptomList, setSymptomList ] = useState( [] )
  const [ notes, setNotes ] = useState('')
  const [ filePath, setPath ] = useState('');
  //let headers = await createHeader();
  //let retval = await fetch("http://10.11.191.67:3001/status");
  return (
    <div className="flex justify-center pt-8 pb-8">
      <form className="w-1/2 bg-slate-700 pl-14 pr-14 pt-4 rounded-xl">
        <br />
        <details className="text-black bg-white p-1 w-72">
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
        <input type="submit" className="bg-white p-1 text-black" />
      </form>
    </div>
  );
}
