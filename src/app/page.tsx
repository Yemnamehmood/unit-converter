'use client'
import { useState } from 'react';

export default function UnitConverter() {
  // Define the units as a union of specific strings
  const [value, setValue] = useState<number>(0);
  const [fromUnit, setFromUnit] = useState<'meters' | 'kilometers' | 'grams' | 'kilograms'>('meters');
  const [toUnit, setToUnit] = useState<'meters' | 'kilometers' | 'grams' | 'kilograms'>('kilometers');
  const [result, setResult] = useState<number | string>('');

  // Define the units and their conversion rates
  const units: { [key in 'meters' | 'kilometers' | 'grams' | 'kilograms']: number } = {
    meters: 1,
    kilometers: 0.001,
    grams: 1,
    kilograms: 0.001,
  };

  // Conversion logic
  const handleConversion = () => {
    const conversionRate = units[toUnit] / units[fromUnit]; // Fixed type-safe indexing
    const convertedValue = value * conversionRate;
    setResult(convertedValue.toFixed(2));
  };

  return (
    <div className="converter-container">
      <h1>Unit Converter</h1>
      <div className="input-container">
        <input
          type="number"
          value={value}
          onChange={(e) => setValue(Number(e.target.value))}
          placeholder="Enter value"
        />
        <select value={fromUnit} onChange={(e) => setFromUnit(e.target.value as 'meters' | 'kilometers' | 'grams' | 'kilograms')}>
          <option value="meters">Meters</option>
          <option value="kilometers">Kilometers</option>
          <option value="grams">Grams</option>
          <option value="kilograms">Kilograms</option>
        </select>
        <span>to</span>
        <select value={toUnit} onChange={(e) => setToUnit(e.target.value as 'meters' | 'kilometers' | 'grams' | 'kilograms')}>
          <option value="meters">Meters</option>
          <option value="kilometers">Kilometers</option>
          <option value="grams">Grams</option>
          <option value="kilograms">Kilograms</option>
        </select>
      </div>
      <button onClick={handleConversion} className="convert-button">Convert</button>
      <div className="result">{result !== '' && <p>Converted Value: {result}</p>}</div>

      <footer className="footer">
        <p>&copy; All rights reserved | Unit Converter by Yemna Mehmood</p>
      </footer>
    </div>
  );
}
