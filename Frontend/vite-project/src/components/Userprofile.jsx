import React, { useState, useEffect } from 'react';
import Nav from './Nav';
import User from './User';
import axios from 'axios';
import toast from 'react-hot-toast';
import { useNavigate } from "react-router-dom";

function Userprofile() {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchUser = async () => {
      const userId = localStorage.getItem('userID'); // Fetch userID from localStorage

      if (!userId) {
        console.error("User ID is missing");
        setError("User ID is missing");
        setLoading(false);
        return;
      }

      try {
        const response = await axios.get(`http://localhost:4000/api/user/${userId}`);
        const userData = response.data;
        console.log("Fetched User Data:", userData);
        setUser(userData);
      } catch (error) {
        console.error("Error fetching user data:", error.response ? error.response.data : error.message);
        setError('Failed to fetch user data');
      } finally {
        setLoading(false); // Stop the loading state
      }
    };

    fetchUser();
  }, []);

  // useEffect(() => {
  //   const fetchUser = async () => {
  //     const userId = localStorage.getItem('userID'); // Fetch userID from localStorage
  //     console.log("User ID from localStorage:", userId);

  //     if (!userId) {
  //       navigate("/"); // Redirect to login if no user ID is found
  //       return;
  //     }

  //     try {
  //       // Fetch user data using the userId
  //       const response = await axios.get(`http://localhost:4000/api/user/${userId}`);
  //       const userData = await response.data.json();
  //       console.log("Fetched User Data:", userData);
  //       setUser(userData);
  //     } catch (err) {
  //       console.error("Error fetching user data:", err);
  //       setError('Failed to fetch user data');
  //     } finally {
  //       setLoading(false); // Stop the loading state
  //     }
  //   };

  //   fetchUser();
  // }, [navigate]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  if (!user) {
    return <div>No user data found</div>;
  }

  const handleLogout = async () => {
    localStorage.removeItem("token");
    localStorage.removeItem("userID");
    toast.success("Logged out successfully");
    navigate("/"); // Redirect to login page
  };

  return (
    <>
      <Nav
        name="Logout"
        on={handleLogout}
      />
      <User userData={user} />
    </>
  );
}

export default Userprofile;
