import React from 'react';
import { useQuery } from 'react-query';
import './Dictionary.css';

function DictionaryResult({ word }) {
  const { data, error, isLoading } = useQuery(
    ['dictionary', word],
    async () => {
      if (!word) return null;
      const response = await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`);
      if (!response.ok) {
        throw new Error('Error fetching data');
      }
      return response.json();
    },
    { enabled: !!word }
  );

  if (isLoading) return <div className='dictionary-result'>Loading...</div>;
  if (error) return <div className='dictionary-result'>Error fetching data</div>;

  return (
    <div className='dictionary-result'>
      {data && data.length > 0 ? (
        <div>
          <h3>{data[0].word}</h3>
          {data[0].meanings.map((meaning, index) => (
            <div key={index}>
              <p><strong>Part of Speech:</strong> {meaning.partOfSpeech}</p>
              {meaning.definitions.map((def, idx) => (
                <p key={idx}><strong>Definition {idx + 1}:</strong> {def.definition}</p>
              ))}
            </div>
          ))}
        </div>
      ) : (
        <p>No results found</p>
      )}
    </div>
  );
}

export default DictionaryResult;
