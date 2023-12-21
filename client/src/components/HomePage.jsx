import React, { useEffect } from 'react';

function HomePage({ setStatus }) {
  return (
    <>
      <h1 id="title">Family Memories</h1>
      <form className="home">

        <button type="submit" className="homeButton" onClick={(e) => { e.preventDefault(); setStatus(1); }}> Add a Memory</button>
        <br />
        <button type="submit" className="homeButton" onClick={(e) => { e.preventDefault(); setStatus(2); }}>Search 🔍 </button>
      </form>
    </>
  );
}

export default HomePage;
