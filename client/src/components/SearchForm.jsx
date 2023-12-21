import React, { useState } from 'react';
import axios from 'axios';

function SearchForm({
  setMemoryData, setStatus, handleSearch, searchTerms, searchFor,
}) {
  const submitSearch = (e) => {
    e.preventDefault();
    handleSearch(searchTerms);
  };

  return (
  // setSearchTerms((prevSearchTerms) => prevSearchTerms[key] = value)
    <form id="searchForm" onSubmit={submitSearch}>
      <h3>Search for a memory</h3>
      <h5>Use any of the terms below: </h5>
      <br />

      <label htmlFor="year">Year:</label>
      <input
        type="number"
        className="year"
        value={searchTerms.year}
        onChange={(e) => searchFor('year', e.target.value)}
      />
      <br />

      <label htmlFor="month">Month:</label>
      <select
        className="month"
        name="month"
        value={searchTerms.month}
        onChange={(e) => searchFor('month', e.target.value)}
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
        onChange={(e) => searchFor('name', e.target.value)}
      />
      <br />

      <label htmlFor="place">Place:</label>
      <input
        type="text"
        className="place"
        value={searchTerms.place}
        onChange={(e) => searchFor('place', e.target.value)}
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
