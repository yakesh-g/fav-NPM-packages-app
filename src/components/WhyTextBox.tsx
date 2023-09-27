import React, { useState } from 'react';

function WhyTextBox() {
  const Reason = 'This is the reason why it is my favorite';
  const [reason, setReason] = useState<string>('');

  const handleReasonChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    window.localStorage.setItem('currentReason', e.target.value);
    setReason(e.target.value);
  };

  return (
    <>
      <div style={headerStyle}>Why is this your favorite?</div>
      <textarea
        style={textareaStyle}
        onChange={handleReasonChange}
        value={reason}
        placeholder={Reason}
      ></textarea>
    </>
  );
}

const headerStyle: React.CSSProperties = {
  fontSize: '20px',
  fontWeight: 'bold',
  marginBottom: '5px',
  marginTop: '5px',
  padding: '5px',
  color: '#333',
  textAlign: 'center', // Center the text horizontally
};


const textareaStyle = {
  width: '550px',
  height: '200px',
  padding: '5px 5px 10px 20px',
  border: '1px solid #ccc',
  borderRadius: '20px',
  fontSize: '16px',
  fontFamily: 'Roboto',
  color: '#333',// Text color
}

export default WhyTextBox;
