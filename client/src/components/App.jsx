import React, { useState } from 'react';
import axios from 'axios';
import MemoryForm from './MemoryForm.jsx';

const App = () => {
  return (
    <div className="app">
      <h1> Welcome to Familly Memories</h1>
      <MemoryForm />
    </div>
  )
}

export default App
