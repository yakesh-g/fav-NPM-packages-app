import React from 'react';

interface ChildProps {
  handleClose: () => void;
}

const ErrorPopUp: React.FC<ChildProps> = (props) => {
  // Define the overlay style with explicit type annotations
  const overlayStyle: React.CSSProperties = {
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  };

  // Define the modal style with explicit type annotations
  const modalStyle: React.CSSProperties = {
    backgroundColor: 'white',
    padding: '20px',
    borderRadius: '5px',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.2)',
    textAlign: 'center',
  };

  // Define the message style with explicit type annotations
  const messageStyle: React.CSSProperties = {
    fontSize: '18px',
    marginBottom: '20px',
  };

  // Define the close button style with explicit type annotations
  const closeButtonStyle: React.CSSProperties = {
    backgroundColor: '#007BFF',
    color: 'white',
    border: 'none',
    padding: '10px 20px',
    borderRadius: '5px',
    fontSize: '16px',
    cursor: 'pointer',
  };

  return (
    <div style={overlayStyle}>
      <div style={modalStyle}>
        <p style={messageStyle}>
          Please select a Package or Reason to add to the favorites list.
        </p>
        <button style={closeButtonStyle} onClick={props.handleClose}>
          Close
        </button>
      </div>
    </div>
  );
};

export default ErrorPopUp;
