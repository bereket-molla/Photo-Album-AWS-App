import './App.css';
import Upload from './components/Upload';
import Search from './components/Search';
import React, { useState } from 'react';


function App() {
    
  const [option, setOption] = useState('search');
  function  changeOption(option) {
    setOption(option);
  }   

  return (
    <div className="App">

      <div className="options">
        <button className="tab" onClick={() => changeOption('upload')}>Upload</button>
        <button className="tab" onClick={() => changeOption('search')}>Search</button>
      </div>
      <hr />
      {(option === "search") ? <Search/> : <Upload/>}
    </div>

  );
}

export default App;
