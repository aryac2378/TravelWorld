import React, { useState, useEffect } from 'react';
import TourCard from '../../shared/TourCard'; // Ensure this path is correct
import { BASE_URL } from './../../utils/config';

const FeaturedTourList = () => {
  const [featuredTours, setFeaturedTours] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchFeaturedTours = async () => {
      try {
        const response = await fetch(`${BASE_URL}/tours/search/getFeaturedTour`);
        if (!response.ok) {
          throw new Error('Failed to fetch tours');
        }
        const result = await response.json();
        setFeaturedTours(result.data); // Adjust according to the actual response structure
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchFeaturedTours();
  }, []);

  if (loading) {
    return <h4>Loading.....</h4>;
  }

  if (error) {
    return <h4>{error}</h4>;
  }

  return (
    <div className="tour-list">
      {featuredTours.length === 0 ? (
        <h4>No tours available</h4>
      ) : (
        featuredTours.map(tour => (
          <div className="tour-card-wrapper" key={tour._id}>
            <TourCard tour={tour} />
          </div>
        ))
      )}
    </div>
  );
};

export default FeaturedTourList;
