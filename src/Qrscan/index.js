import React, { useState } from 'react';
import { QrReader } from 'react-qr-reader';

const Qrscan = (props) => {
  const [data, setData] = useState('Pas de résultat pour le moment');


  const handleScan = (result) => {
    if (result) {
      setData(result.text);
      window.open(result.text, '_blank'); 
    }
  };


  const handleError = (error) => {
    console.error(error);
  };


  return (
    <>
      <QrReader
        onScan={handleScan}
        onError={handleError}
        style={{ width: '60%' }}
      />
      {data && (
        <p>
          Lien : {' '}
          <a href={data} target="_blank" rel="noopener noreferrer">
            {data}
          </a>
        </p>
      )}
    </>
  );
};
export default Qrscan;
