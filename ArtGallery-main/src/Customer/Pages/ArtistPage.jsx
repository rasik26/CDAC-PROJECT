import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

export default function ArtistPage() {
  const navigate = useNavigate();
  const [artists, setArtists] = useState([]);

  useEffect(() => {
    const fetchArtists = async () => {
      try {
        const response = await axios.get('http://localhost:5454/artists/name');
        setArtists(response.data);
      } catch (error) {
        console.error('Error fetching artists:', error);
      }
    };
    fetchArtists();
  }, []);

  const handleArtistClick = (artist) => {
    navigate(`/artist/${artist}`);
  };

  return (
    <div className="container mx-auto py-10">
      <h1 className="text-3xl font-semibold mb-6">Artists</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {artists.map(artist => (
          artist && (
            <div key={artist} className="bg-gray-200 p-4 rounded-lg cursor-pointer hover:bg-gray-300" onClick={() => handleArtistClick(artist)}>
              <p className="text-lg">{artist}</p>
            </div>
          )
        ))}
      </div>
    </div>
  );
}
