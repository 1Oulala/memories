import React, { useState } from 'react';
import axios from 'axios';

function MemoryForm({ setStatus }) {
  const [memoryDetails, setMemoryDetails] = useState({
    detail: '',
    year: 2023,
    month: '',
    name: '',
    place: '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('/memories', { ...memoryDetails })
      .then(() => {
        console.log('Memory saved successfully!');
        setStatus(0);
      })
      .catch((error) => { console.error('Error saving memory:', error); });
  };

  return (
    <form id="memoryForm" onSubmit={handleSubmit}>
      <label htmlFor="detail">Details:</label>
      <br />
      <textarea
        className="detail"
        value={memoryDetails.detail}
        onChange={(e) => setMemoryDetails({ ...memoryDetails, detail: e.target.value })}
        required
      />
      <br />
      <label htmlFor="year">Year:</label>
      <input
        type="number"
        className="year"
        value={memoryDetails.year}
        onChange={(e) => setMemoryDetails({ ...memoryDetails, year: e.target.value })}
        required
      />
      <br />

      <label htmlFor="month">Month:</label>
      <select
        className="month"
        name="month"
        value={memoryDetails.month}
        onChange={(e) => setMemoryDetails({ ...memoryDetails, month: e.target.value })}
      >
        <option value="Jan">Jan</option>
        <option value="Feb">Feb</option>
        <option value="Mar">Mar</option>
        <option value="Apr">Apr</option>
        <option value="May">May</option>
        <option value="Jun">Jun</option>
        <option value="Jul">Jul</option>
        <option value="Aug">Aug</option>
        <option value="Sep">Sep</option>
        <option value="Oct">Oct</option>
        <option value="Nov">Nov</option>
        <option value="Dec">Dec</option>
      </select>
      <br />

      <label htmlFor="name">Name:</label>
      <input
        type="text"
        className="name"
        value={memoryDetails.name}
        onChange={(e) => setMemoryDetails({ ...memoryDetails, name: e.target.value })}
        required
      />
      <br />

      <label htmlFor="place">Place/Location:</label>
      <input
        type="text"
        className="place"
        value={memoryDetails.place}
        onChange={(e) => setMemoryDetails({ ...memoryDetails, place: e.target.value })}
        required
      />
      <br />

      <button className="returnButton" type="submit" onClick={(e) => { e.preventDefault(); setStatus(0); }}>
        {'<<'}
        {' '}
        Go Back
      </button>

      <button className="returnButton" type="submit">Save Memory</button>
    </form>
  );
}

export default MemoryForm;
