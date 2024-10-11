import React, { useState } from 'react';
import './Dictionary.css'
import DictionaryResult from './DictionaryResult';
function Dictionary() {

    const [word, setWord] = useState('');
    const [searchTerm, setSearchTerm] = useState('');

    const handleSearch = () => {
        if(word){
            setSearchTerm(word);
        }
    }

  return (
    <div>
        <div className='container-dictionary'>
      <h3>By <u>Salad Mohamed</u></h3>
      <h4>Type a word to find its meaning</h4>

      <div className="dictionary-field">
        <input type="text"
         placeholder='Type a word'
         value={word}
         onChange={(e) => setWord(e.target.value)}/>
        <button onClick={handleSearch}>Search</button>
      </div>
    </div>
    <div className="results-container">
    {searchTerm && (
        <div className="result-container">
          <DictionaryResult word={searchTerm} />
        </div>
      )}
    </div>
    </div>
  )
}

export default Dictionary