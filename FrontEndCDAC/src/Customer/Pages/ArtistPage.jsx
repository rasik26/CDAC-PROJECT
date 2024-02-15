import React from 'react';
import { useNavigate } from 'react-router-dom';

const artists = [
  { id: 1, name: 'Artist 1' },
  { id: 2, name: 'Artist 2' },
  { id: 3, name: 'Artist 3' },
  { id: 4, name: 'Artist 4' }
];

export default function ArtistPage() {
  const navigate = useNavigate();

  const handleArtistClick = (artistId) => {
    navigate(`/artist/${artistId}`);
  };

  return (
    <div className="container mx-auto py-10">
      <h1 className="text-3xl font-semibold mb-6">Artists</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {artists.map(artist => (
          <div key={artist.id} className="bg-gray-200 p-4 rounded-lg cursor-pointer hover:bg-gray-300" onClick={() => handleArtistClick(artist.id)}>
            <p className="text-lg">{artist.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
}


