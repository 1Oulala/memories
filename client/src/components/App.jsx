import React, { useState, useEffect } from 'react';
import axios from 'axios';
import MemoryForm from './MemoryForm.jsx';
import SearchForm from './SearchForm.jsx';
import Display from './Display.jsx';
import HomePage from './HomePage.jsx';

function App() {
  const [memoryData, setMemoryData] = useState([]);
  const [status, setStatus] = useState(0);
  const [id, setID] = useState('');
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
  // setMemory Alias
  const resetMemoryData = (value) => {
    const temp = [...memoryData];
    setMemoryData(temp);
  };

  // Handle the search
  const handleSearch = (obj) => {
    const temp = {};
    const keys = Object.keys(obj);
    const terms = keys
      .filter((term) => obj[term].length > 0)
      // eslint-disable-next-line no-return-assign
      .map((val) => (temp[val] = obj[val]));
    // make get request with the given terms
    axios
      .get('/memories/search', { params: { ...temp } })
      .then((response) => {
        setMemoryData([...response.data]);
        setStatus(3);
      })
      .catch((error) => {
        console.error('search failed:', error);
      });
  };
  // deletes Memory based on id
  const handleDeleteMemory = () => {
    axios
      .delete(`/memories/${id}`)
      .then(() => handleSearch(searchTerms))
      .catch((err) => console.log('Error deleting:', err));
  };
  useEffect(() => {
    if (id === '') {
      return;
    }
    handleDeleteMemory();
  }, [id]);

  return (
    <div className="app">
      {status === 0 && <HomePage setStatus={setStatus} />}
      <br />
      {status === 1 && <MemoryForm setStatus={setStatus} />}
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
      {status === 3 && (
        <Display
          setID={setID}
          memoryData={memoryData}
          setStatus={setStatus}
          searchTerms={searchTerms}
          handleSearch={handleSearch}
          handleDeleteMemory={handleDeleteMemory}
        />
      )}
    </div>
  );
}

export default App;
