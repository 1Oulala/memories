import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Memo from './Memo.jsx';

function Display({
  memoryData,
  setStatus,
  handleSearch,
  searchTerms,
  handleDeleteMemory,
  setID,
}) {
  return (
    <div className="display">
      Found
      {' '}
      {memoryData.length}
      {' '}
      {memoryData.length === 1 ? 'memory' : 'memories'}
      <button
        className="return-home-btn"
        type="submit"
        onClick={(e) => {
          e.preventDefault();
          setStatus(0);
        }}
      >
        Return
      </button>
      <br />
      {memoryData.map((m, _id) => (
        // eslint-disable-next-line no-underscore-dangle
        <div key={m._id} className="memos">
          <Memo
            setID={setID}
            memory={m}
            handleDeleteMemory={handleDeleteMemory}
            searchTerms={searchTerms}
            handleSearch={handleSearch}
          />
        </div>
      ))}
    </div>
  );
}

export default Display;
