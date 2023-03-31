
import React, { useState } from 'react';

import './Style.css'
import image from './../images/emahoy.png'  

function Search() {

  const [transcription, setTranscription] = useState("");

  const handleSpeechRecognition = () => {
    const recognition = new window.webkitSpeechRecognition();
    recognition.onresult = (event) => {
      const speechToText = event.results[0][0].transcript;
      setTranscription(speechToText);
    };
    recognition.start();
  };

  return (
    <div>
        <div>
          <h1>Search</h1>
        </div>
        <input class="text-input" type="text" placeholder="Search..."/>
        <button class="button"> Search</button> 
        <p>{transcription}</p>
        <button class= "button" onClick={handleSpeechRecognition}><i class="fas fa-microphone"></i>Search Using Audio</button>
        
        <div className="search-result">
        </div>
   
 

    </div>
  )
}

export default Search 
