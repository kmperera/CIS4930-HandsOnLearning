import React, { useState, useEffect } from 'react';
import axios from 'axios';

const LocationComponent = () => {
  const [latitude, setLatitude] = useState(null);
  const [longitude, setLongitude] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [nearbyHospitals, setNearbyHospitals] = useState([]);

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setLatitude(position.coords.latitude);
          setLongitude(position.coords.longitude);
          setLoading(false);
        },
        (error) => {
          setError(error.message);
          setLoading(false);
        }
      );
    } else {
      setError('Geolocation is not supported by this browser.');
      setLoading(false);
    }
  }, []);

//   useEffect(() => {
//     if (latitude !== null && longitude !== null) {
//     const apiKey = 'YOUR_GOOGLE_MAPS_API_KEY'; // Replace with your Google Maps API key
//     const radius = 5000; // Search within 5km radius (can be adjusted)

//     axios.get(`https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=${latitude},${longitude}&radius=${radius}&type=hospital&key=${apiKey}`)
//       .then((response) => {
//         // Handle the response data here
//         if (response.data && response.data.results) {
//             setNearbyHospitals(response.data.results);
//         }
//         setLoading(false);
//       })
//       .catch((error) => {
//         setError('Error fetching nearby hospitals');
//         setLoading(false);
//       });
//     }
//   }, [latitude, longitude]);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  return (
    <div>
      {/* Display the obtained location */}
      {latitude && longitude && (
        <div>
          <p>Latitude: {latitude}</p>
          <p>Longitude: {longitude}</p>
        </div>
      )}

      {/* Display nearby hospitals */}
      {nearbyHospitals.length > 0 && (
        <div>
          <h2>Nearby Hospitals</h2>
          <ul>
            {nearbyHospitals.map((hospital, index) => (
              <li key={index}>{hospital.name}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default LocationComponent;