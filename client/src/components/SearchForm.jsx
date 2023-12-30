import React, { useState } from 'react';

function SearchForm({
  setMemoryData,
  setStatus,
  handleSearch,
  searchTerms,
  searchFor,
}) {
  const submitSearch = (e) => {
    e.preventDefault();
    handleSearch(searchTerms);
  };

  return (
    <>
      <div className="search-title">
        <h3 className="title-line">Search for a memory </h3>
        Use any of the terms below:
      </div>

      <form id="searchForm" onSubmit={submitSearch}>
        <label htmlFor="year" className="search-label">
          Year:
        </label>
        <input
          type="number"
          className="search-year"
          value={searchTerms.year}
          onChange={(e) => searchFor('year', e.target.value)}
        />
        <br />

        <label htmlFor="month" className="search-label">
          Month:
        </label>
        <select
          className="search-month"
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

        <label htmlFor="name" className="search-label">
          Name:
        </label>
        <input
          type="text"
          className="search-name"
          value={searchTerms.name}
          onChange={(e) => searchFor('name', e.target.value)}
        />
        <br />

        <label htmlFor="place" className="search-label">
          Place:
        </label>
        <input
          type="text"
          className="search-place"
          value={searchTerms.place}
          onChange={(e) => searchFor('place', e.target.value)}
        />
        <br />
        <div className="search-btns">
          <button
            className="returnButton"
            type="submit"
            onClick={(e) => {
              e.preventDefault();
              setStatus(0);
            }}
          >
            {'<<'}
            {' '}
            Go Back
          </button>
          <button className="returnButton" type="submit">
            Search 🔍
          </button>
        </div>
      </form>
    </>
  );
}

export default SearchForm;
