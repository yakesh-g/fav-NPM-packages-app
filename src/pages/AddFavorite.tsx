import React, { useState } from 'react';
import SearchBar from '../components/SearchBar';
import WhyTextBox from '../components/WhyTextBox';
import ErrorPopUp from '../components/ErrorPopUp';
import { useNavigate } from 'react-router-dom';

function AddFavorite() {
  const [errorPop, setErrorPop] = useState<boolean>(false);
  const navigate = useNavigate();
  const handleClosePopUp = () => {
    setErrorPop(false);
  };

  const handleClick = () => {
    const selectedOption: any = window.localStorage.getItem('currentSelectedPackage');
    const reason: any = window.localStorage.getItem('currentReason');
    if (selectedOption && reason) {
      const favPackage: any = {
        name: selectedOption,
        reason: reason,
      };
      let favItems: any = [];
      if (window.localStorage.getItem('favorite-packages') !== null) {
        const items: any = window.localStorage.getItem('favorite-packages');
        favItems = JSON.parse(items);
      }
      favItems.push(favPackage);
      window.localStorage.setItem('favorite-packages', JSON.stringify(favItems));
      window.localStorage.removeItem('currentSelectedPackage');
      window.localStorage.removeItem('currentReason');
      navigate('/');
    } else {
      setErrorPop(true);
    }
  };

  const containerStyle: React.CSSProperties = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: '100vh', // Center content vertically
    padding: '10px 10px 10px 10px',
    marginTop: '10px',
  };

  return (
    <div style={containerStyle}>
      {errorPop && <ErrorPopUp handleClose={handleClosePopUp} />}
      <SearchBar />
      <WhyTextBox />
      <button
        onClick={handleClick}
        style={{
          marginTop: '15px',
          padding: '10px 20px',
          backgroundColor: '#007bff',
          color: '#fff',
          border: 'none',
          borderRadius: '5px',
          cursor: 'pointer',
          marginBottom: '8px',
        }}
      >
        Submit
      </button>
    </div>
  );
}

export default AddFavorite;
