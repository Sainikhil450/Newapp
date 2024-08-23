// Submit.js
import React, { useState } from 'react';
import axios from 'axios'; // For handling HTTP requests
import './Submit.css'; // Import CSS file for styling

const Submit = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [category, setCategory] = useState('');
  const [file, setFile] = useState(null);

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append('title', title);
    formData.append('description', description);
    formData.append('category', category);
    if (file) formData.append('file', file);

    try {
      // Replace with your API endpoint
      await axios.post('/api/submit', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      
      // Redirect to Ideas Gallery after submission
      window.location.href = '/ideas-gallery';
    } catch (error) {
      console.error('Error submitting the form:', error);
    }
  };

  return (
    <div className="submit-container">
      <h2>Submit Your Idea</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Idea Title:
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </label>
        <label>
          Description:
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          />
        </label>
        <label>
          Category:
          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            required
          >
            <option value="">Select a category</option>
            <option value="technology">Technology</option>
            <option value="food">Food</option>
            <option value="business">Business</option>
            <option value="software">Software</option>
            {/* Add more categories as needed */}
          </select>
        </label>
        <label>
          Attach File:
          <input
            type="file"
            onChange={handleFileChange}
          />
        </label>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Submit;
