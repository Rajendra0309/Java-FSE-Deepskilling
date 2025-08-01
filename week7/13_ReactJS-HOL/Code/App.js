import React, { useState } from 'react';
import './App.css';
import BookDetails from './Components/BookDetails';
import BlogDetails from './Components/BlogDetails';
import CourseDetails from './Components/CourseDetails';

function App() {
  const [section, setSection] = useState('book');

  // Element variable method
  let detailComponent;
  if (section === 'book') {
    detailComponent = <BookDetails />;
  } else if (section === 'blog') {
    detailComponent = <BlogDetails />;
  } else {
    detailComponent = <CourseDetails />;
  }

  return (
    <div className="App">
      <h1>📘 Blogger App</h1>

      {/* Buttons to switch sections */}
      <button onClick={() => setSection('book')}>Book Details</button>
      <button onClick={() => setSection('blog')}>Blog Details</button>
      <button onClick={() => setSection('course')}>Course Details</button>

      <hr />

      {/* Method 1: Element Variable */}
      {detailComponent}

      {/* Method 2: Ternary Operator */}
      {/* {section === 'book' ? <BookDetails /> : section === 'blog' ? <BlogDetails /> : <CourseDetails />} */}

      {/* Method 3: Logical AND (used for conditionally rendering one section) */}
      {/* {section === 'book' && <BookDetails />} */}
    </div>
  );
}

export default App;
