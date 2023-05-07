import React, { useState } from 'react';
import QrScanner from 'react-qr-scanner';

import styles from './Qrscan.module.css';

import { QrReader } from 'react-qr-reader';

const Qrscan = () => {
  const [result, setResult] = useState('No result');

  const handleError = (err) => {
    console.error(err);
  };

  const handleScan = (result) => {
    if (result) {
      setResult(result);
    }
  };

  const previewStyle = {
    height: 240,
    width: 320,
  };

  return (
    <div className={styles.container}>
      <QrScanner
        delay={500}
        style={previewStyle}
        onError={handleError}
        onScan={handleScan}
      />
      <div className={styles.result}>{result}</div>
    </div>
  );
};

export default Qrscan;
