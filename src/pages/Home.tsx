import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

interface PackageType {
  name: string;
  reason: string;
}

function Home() {
  const [favPackages, setFavPackages] = useState<PackageType[]>([]);
  const navigate = useNavigate();

  // Create a separate variable for the local storage key
  const localStorageKey = 'favorite-packages';

  useEffect(() => {
    // Use the variable in the dependency array
    const items: any = window.localStorage.getItem(localStorageKey);
    setFavPackages(JSON.parse(items));
  }, [localStorageKey]); // Use the variable here

  const containerStyle: React.CSSProperties = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: '100vh', // Center content vertically
    padding: '10px 20px',
  };

  const buttonStyle: React.CSSProperties = {
    padding: '60px 30px',
    backgroundColor: '#007bff',
    color: '#fff',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
  };

  return (
    <div style={containerStyle}>
      <button onClick={() => navigate('/add-fav')} style={buttonStyle}>
        Add Favorite
      </button>
      <div style={{ marginTop: '20px' }}>
        {favPackages?.length > 0 ? (
          favPackages.map((item: PackageType, index: number) => (
            <div key={index} style={{ marginBottom: '10px' }}>
              <strong>Package Name:</strong> {item.name}
              <br />
              <strong>Reason:</strong> {item.reason}
            </div>
          ))
        ) : (
          <p>No favorite packages added yet.</p>
        )}
      </div>
    </div>
  );
}

export default Home;
