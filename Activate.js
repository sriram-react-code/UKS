import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';

const Activate = () => {
  const { token } = useParams();

  useEffect(() => {
    const activateAccount = async () => {
      const response = await fetch(`http://localhost:5000/activate/${token}`);
      const data = await response.text();
      alert(data);
    };

    activateAccount();
  }, [token]);

  return <h2>Activating your account...</h2>;
};

export default Activate;
