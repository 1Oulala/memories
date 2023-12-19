import React, { useState } from 'react';
import axios from 'axios';

const MemoryForm = ({}) => {
  const [storyDetails, setStoryDetails] = useState({
    story: '',
    year: 2023,
    month: '',
    name: '',
    place: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('/api/memories', {
      story,
      year,
      month,
      name,
      place,
    })
      .then((response) => {
        console.log('Memory saved successfully!');
      })
      .catch((error) => { console.error('Error saving memory:', error);});
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="story">Story/Event:</label>
      <br/>
      <textarea
        id="story"
        value={storyDetails.story}
        onChange={(e) => setStoryDetails({...storyDetails, story: e.target.value})}
        required
      />
      <br/>
      <label htmlFor="year">Year:</label>
      <input type="number"
        id="year"
        value={storyDetails.year}
        onChange={(e) => setStoryDetails({...storyDetails, year: e.target.value})}
        required/>
      <br/>

      <label htmlFor="month">Month:</label>
      {/* <input type="number" id="month" value={month} onChange={(e) => setMonth(e.target.value)} required/> */}
        <select id="month" name="month"
          value={storyDetails.month}
          onChange={(e) => setStoryDetails({...storyDetails, month: e.target.value})}>
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
      <br/>

      <label htmlFor="name">Name:</label>
      <input type="text"
        id="name"
        value={storyDetails.name}
        onChange={(e) => setStoryDetails({...storyDetails, name: e.target.value})}
        required/>
      <br/>

      <label htmlFor="place">Place:</label>
      <input type="text"
        id="place" value={storyDetails.place}
        onChange={(e) => setStoryDetails({...storyDetails, place: e.target.value})}
        required/>
      <br/>

      <button type="submit">Save Memory</button>
    </form>
  );
};

export default MemoryForm;