import React, { useState } from 'react';
import axios from 'axios';

function SearchForm({ setMemoryData, setStatus }) {
  const [searchTerms, setSearchTerms] = useState({
    year: '',
    month: '',
    name: '',
    place: '',
  });

  const handleSearch = (e) => {
    e.preventDefault();
    console.log('::::', searchTerms);
    const temp = {};
    const keys = Object.keys(searchTerms);
    const terms = keys.filter((term) => searchTerms[term].length > 0)
      // eslint-disable-next-line no-return-assign
      .map((val) => temp[val] = searchTerms[val]);
    console.log('terms:::', temp);
    axios.get('/memories/terms', { params: { ...temp } })
      .then((response) => {
        console.log(response.data);
        setMemoryData([...response.data]);
        setStatus(3);
      })
      .catch((error) => { console.error('Error getting the memory:', error); });
  };

  return (

    <form id="searchForm" onSubmit={handleSearch}>
      <h3>Search for a memory</h3>
      <h5>Use any of the terms below: </h5>
      <br />

      <label htmlFor="year">Year:</label>
      <input
        type="number"
        className="year"
        value={searchTerms.year}
        onChange={(e) => setSearchTerms({ ...searchTerms, year: e.target.value })}
      />
      <br />

      <label htmlFor="month">Month:</label>
      {/* <input type="number" className="month" value={month}
        onChange={(e) => setMonth(e.target.value)} required/> */}
      <select
        className="month"
        name="month"
        value={searchTerms.month}
        onChange={(e) => setSearchTerms({ ...searchTerms, month: e.target.value })}
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
        value={searchTerms.name}
        onChange={(e) => setSearchTerms({ ...searchTerms, name: e.target.value })}
      />
      <br />

      <label htmlFor="place">Place:</label>
      <input
        type="text"
        className="place"
        value={searchTerms.place}
        onChange={(e) => setSearchTerms({ ...searchTerms, place: e.target.value })}
      />
      <br />

      <button className="returnButton" type="submit" onClick={(e) => { e.preventDefault(); setStatus(0); }}>
        {'<<'}
        {' '}
        Go Back
      </button>

      <button type="submit">Search 🔍</button>
    </form>
  );
}

export default SearchForm;
