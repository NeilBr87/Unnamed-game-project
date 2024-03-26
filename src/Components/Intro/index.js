import React, { useState, useEffect } from 'react';

const Intro = () => {
  const [userData, setUserData] = useState([]);
  const [password, setPassword] = useState('');
  const [loggedIn, setLoggedIn] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://x8ki-letl-twmt.n7.xano.io/api:QMm5lsNL/auth');
        const data = await response.json();
        setUserData(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  const handleLogin = async () => {
    try {
      const response = await fetch('https://x8ki-letl-twmt.n7.xano.io/api:QMm5lsNL/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ password }),
      });
      const data = await response.json();
      // Assuming the response contains information about successful login
      if (data.success) {
        setLoggedIn(true);
        // You can perform further actions here upon successful login
      } else {
        // Handle unsuccessful login
        console.error('Login failed:', data.message);
      }
    } catch (error) {
      console.error('Error logging in:', error);
    }
  };

  if (loggedIn) {
    // Redirect or render logged-in content
    return <div>You are logged in!</div>;
  }

  return (
    <div>
      <h2>User Data</h2>
      <div>
        {userData.map((auth) => (
          <div key={auth.id}>
            <p>{`ID number: ${auth.id}`}</p>
            <p>{`Username: ${auth.Username}`}</p>
            <p>Password</p>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
        ))}
        <button onClick={handleLogin}>Login</button>
      </div>

      {loggedIn && <div>You are logged in!</div>}
    </div>
  );
};

export default Intro;
