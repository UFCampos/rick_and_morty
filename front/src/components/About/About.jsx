import React, { useEffect, useState } from 'react';
import ReactMarkdown from 'react-markdown';
import axios from 'axios';

const About = () => {
  const [markdown, setMarkdown] = useState('');

  useEffect(() => {
    axios
      .get('https://raw.githubusercontent.com/UFCampos/UFCampos/main/README.md')
      .then((response) => setMarkdown(response.data))
      .catch((error) => console.error('Error fetching README.md:', error));
  }, []);

  return (
    <div>
      <ReactMarkdown>{markdown}</ReactMarkdown>
    </div>
  );
};

export default About;
