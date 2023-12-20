import React, { useState } from 'react';
import Memo from './Memo.jsx';

function Display({ memoryData, setStatus }) {
  // Implement actual rendering of memory data here
  const [searchTerms, setSearchTerms] = useState({});

  return (
    <div>
      Found
      {' '}
      {memoryData.length}
      {' '}
      memories
      <button className="returnButton" type="submit" onClick={(e) => { e.preventDefault(); setStatus(0); }}>Return</button>
      <br />
      {memoryData.map((m, _id) => (
        // eslint-disable-next-line no-underscore-dangle
        <div key={m._id}>
          <Memo memory={m} setStatus={setStatus} />
        </div>
      ))}
    </div>
  );
}

export default Display;
