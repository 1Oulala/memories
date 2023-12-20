import React, { useState, useEffect } from 'react';
import axios from 'axios';
import MemoryForm from './MemoryForm.jsx';
import SearchForm from './SearchForm.jsx';
import Display from './Display.jsx';
import HomePage from './HomePage.jsx';

function App() {
  const [memoryData, setMemoryData] = useState([]);
  const [status, setStatus] = useState(0);

  useEffect(() => { console.log('searching..'); }, [status]); // memoryData not rendering on time: consider moving handlearch to app

  return (
    <div className="app">
      { status === 0 && <HomePage setStatus={setStatus} />}
      <br />
      { status === 1 && <MemoryForm setStatus={setStatus} />}
      <br />
      {status === 2 && <SearchForm setMemoryData={setMemoryData} setStatus={setStatus} />}
      <br />
      {status === 3 && <Display memoryData={memoryData} setStatus={setStatus} /> }
    </div>
  );
}

export default App;
