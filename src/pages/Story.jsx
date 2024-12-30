import React, { useEffect, useState } from 'react';
import axios from 'axios';

const About = () => {
  const [aboutData, setAboutData] = useState(null);

  useEffect(() => {
    axios
      .get('https://server-dl1g.onrender.com/api/about')
      .then((response) => {
        setAboutData(response.data); // Save the fetched data to state
      })
      .catch((error) => {
        console.error('Error fetching about data:', error);
      });
  }, []);

  if (!aboutData) {
    return <div>Loading...</div>; // Display loading message while fetching
  }

  return (
    <div className="container">
      <h1 className="text-center my-4">{aboutData.title}</h1>
      <p >{aboutData.description}</p>
    </div>
  );
};

export default About;
