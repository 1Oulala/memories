import React, { useEffect } from 'react';

function Memo({ memory, setStatus }) {
  return (
    <div className="memo">
      <p className="memoDetail">
        Details:
        <br />
        {memory.detail}
      </p>
      <br />
      <p className="memoDetail">
        When:
        {' '}
        {memory.month}
        /
        {memory.year}
      </p>
      <p className="memoDetail">
        Name:
        {' '}
        {memory.name}
      </p>
      <p className="memoDetail">
        state/city:
        {' '}
        {memory.place}
      </p>
      <button type="button" className="delete">delete memory</button>
      <br />
    </div>
  );
}

export default Memo;
