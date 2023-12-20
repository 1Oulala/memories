import React, { useEffect } from 'react';

function HomePage({ setStatus }) {
  return (
    <form className="home">
      <h1>Family Memories</h1>
      <button type="submit" onClick={(e) => { e.preventDefault(); setStatus(1); }}> Add a Memory</button>
      <br />
      <button type="submit" onClick={(e) => { e.preventDefault(); setStatus(2); }}>Search for a Memory</button>
    </form>
  );
}

export default HomePage;
