import React, { useState } from 'react';
import { QrReader } from 'react-qr-reader';

const Qrscan = (props) => {
  const [data, setData] = useState('Pas de résultat pour le moment');

  return (
    <>
      <QrReader
        onResult={(result, error) => {
          if (!!result) {
            setData(result?.text);
            window.open(result.text, '_blank');
          }

          if (!!error) {
            console.info(error);
          }
        }}
        style={{ width: '80%' }}
        facingMode="environment" 
      />
      <div className='text-center p-6'>
      <a className='text-blue-600' href={data}>{data}</a>

      </div>
    </>
  );
};

export default Qrscan;
