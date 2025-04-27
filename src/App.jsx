import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ImageGallery from './components/ImageGallery';
import SearchBar from './components/SearchBar';

const ACCESS_KEY = 'YOUR_UNSPLASH_ACCESS_KEY'; // Replace with your key

function App() {
  const [images, setImages] = useState([]);
  const [page, setPage] = useState(1);
  const [query, setQuery] = useState('');

  const fetchImages = async () => {
    const url = query
      ? `https://api.unsplash.com/search/photos?page=${page}&query=${query}&client_id=${ACCESS_KEY}`
      : `https://api.unsplash.com/photos?page=${page}&client_id=${ACCESS_KEY}`;

    const response = await axios.get(url);
    const data = query ? response.data.results : response.data;

    setImages(prev => [...prev, ...data]);
  };

  useEffect(() => {
    fetchImages();
    // eslint-disable-next-line
  }, [page]);

  const handleSearch = (searchTerm) => {
    setQuery(searchTerm);
    setImages([]);
    setPage(1);
  };

  const handleScroll = () => {
    if (window.innerHeight + window.scrollY >= document.body.scrollHeight - 2) {
      setPage(prev => prev + 1);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="App">
      <h1 className="text-center text-4xl font-bold my-4">GeekGallery</h1>
      <SearchBar onSearch={handleSearch} />
      <ImageGallery images={images} />
    </div>
  );
}

export default App;
