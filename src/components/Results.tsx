import React, { useState } from 'react';

interface ChildProps {
  packages: string[];
}

const Results: React.FC<ChildProps> = (props) => {
  const [selectedOption, setSelectedOption] = useState<string>('');

  const handleChangeOption = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedOption(e.target.value);
    window.localStorage.setItem('currentSelectedPackage', e.target.value);
  };

  return (
    <div style={resultsContainer}>
      <label style={labelStyle}>Results</label>
      <br />
      {props.packages.map((item, idx) => (
        <div key={idx} style={resultItem}>
          <input
            type="radio"
            name="packages"
            id={item}
            value={item}
            onChange={handleChangeOption}
            checked={selectedOption === item}
            style={radioInputStyle}
          />
          <label htmlFor={item} style={labelForStyle}>
            {item}
          </label>
        </div>
      ))}
    </div>
  );
};

// Define styles as objects
const resultsContainer = {
  backgroundColor: '#f5f5f5',
  padding: '18px 20px',
  borderRadius: '10px',
  boxShadow: '0 0 10px rgba(0, 0, 0, 0.4)',
};

const labelStyle = {
  fontSize: '18px',
  fontWeight: 'bold',
};

const resultItem = {
  display: 'flex',
  alignItems: 'center',
  margin: '10px 5px',
};

const radioInputStyle = {
  marginRight: '10px',
};

const labelForStyle = {
  fontSize: '16px',
};

export default Results;
