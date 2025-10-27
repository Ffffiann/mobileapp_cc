import React, { useState } from 'react';
import './App.css';

export default function App() {
  const [input, setInput] = useState('');

  const handleClick = (value) => {
    if (value === 'C') setInput('');
    else if (value === '=') {
      try {
        setInput(eval(input).toString());
      } catch {
        setInput('Error');
      }
    } else {
      setInput(input + value);
    }
  };

  const buttons = [
    '7','8','9','/',
    '4','5','6','*',
    '1','2','3','-',
    '0','.','=','+',
    'C'
  ];

  return (
    <div style={styles.container}>
      <div style={styles.calculator}>
        <input style={styles.display} value={input} readOnly />
        <div style={styles.buttons}>
          {buttons.map((btn) => (
            <button
              key={btn}
              style={styles.button}
              onClick={() => handleClick(btn)}
            >
              {btn}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

const styles = {
  container: {
    display: 'flex',
    height: '100vh',
    alignItems: 'center',
    justifyContent: 'center',
    background: '#f1f1f1',
  },
  calculator: {
    background: 'white',
    padding: 20,
    borderRadius: 20,
    width: 250,
    boxShadow: '0 0 10px rgba(0,0,0,0.2)',
  },
  display: {
    width: '100%',
    height: 50,
    marginBottom: 10,
    textAlign: 'right',
    fontSize: 24,
    border: '1px solid #ccc',
    borderRadius: 10,
    padding: '5px 10px',
  },
  buttons: {
    display: 'grid',
    gridTemplateColumns: 'repeat(4, 1fr)',
    gap: 10,
  },
  button: {
    height: 50,
    fontSize: 20,
    borderRadius: 10,
    border: 'none',
    background: '#ececec',
    cursor: 'pointer',
  }
};
