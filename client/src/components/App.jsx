import React, { useState, useEffect } from 'react';
import axios from 'axios';
import MemoryForm from './MemoryForm.jsx';
import SearchForm from './SearchForm.jsx';
import Display from './Display.jsx';
import HomePage from './HomePage.jsx';

function App() {
  const [memoryData, setMemoryData] = useState([]);
  const [status, setStatus] = useState(0);
  const [searchTerms, setSearchTerms] = useState({
    year: '',
    month: '',
    name: '',
    place: '',
  });

  // eslint-disable-next-line no-return-assign
  const searchFor = (key, value) => {
    const tempObj = { ...searchTerms };
    tempObj[key] = value;
    setSearchTerms(tempObj);
  };
  // Handle the search
  const handleSearch = (obj) => {
    const temp = {};
    const keys = Object.keys(obj);
    const terms = keys.filter((term) => obj[term].length > 0)
      // eslint-disable-next-line no-return-assign
      .map((val) => temp[val] = obj[val]);
      // make get request with the given terms
    axios.get('/memories/search', { params: { ...temp } })
      .then((response) => {
        setMemoryData([...response.data]);
        setStatus(3);
      })
      .catch((error) => { console.error('search failed..:', error); });
  };

  return (
    <div className="app">
      { status === 0 && <HomePage setStatus={setStatus} />}
      <br />
      { status === 1 && <MemoryForm setStatus={setStatus} />}
      <br />
      {status === 2 && (
      <SearchForm
        handleSearch={handleSearch}
        searchTerms={searchTerms}
        searchFor={searchFor}
        setMemoryData={setMemoryData}
        setStatus={setStatus}
      />
      )}
      <br />
      {status === 3 && <Display memoryData={memoryData} setStatus={setStatus} /> }
    </div>
  );
}

export default App;
