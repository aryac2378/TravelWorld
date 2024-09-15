import React, { useState, useRef, useEffect, useContext ,useParams} from 'react';
import '../styles/tour-details.css';
import calculateAvgRating from '../utils/avgRating';
import avatar from '../assets/images/avatar.jpg';
import Booking from '../components/Booking/Booking';
import Newsletter from '../shared/Newsletter';
import { BASE_URL } from '../utils/config';
import { AuthContext } from '../context/AuthContext';

const TourDetails = () => {
   const { id } = useParams();
   const reviewMsgRef = useRef('');
   const [tour, setTour] = useState(null);
   const [loading, setLoading] = useState(true);
   const [error, setError] = useState(null);
   const [tourRating, setTourRating] = useState(null);
   const { user } = useContext(AuthContext);

   useEffect(() => {
      const fetchTour = async () => {
         try {
            const response = await fetch(`${BASE_URL}/tours/${id}`);
            const result = await response.json();
            if (!response.ok) throw new Error(result.message);
            setTour(result);
         } catch (err) {
            setError(err.message);
         } finally {
            setLoading(false);
         }
      };
      fetchTour();
   }, [id]);

   const { photo, title, desc, price, reviews, city, address, distance, maxGroupSize } = tour || {};
   const { avgRating } = calculateAvgRating(reviews || []);
   const options = { day: 'numeric', month: 'long', year: 'numeric' };

   const submitHandler = async (e) => {
      e.preventDefault();
      const reviewText = reviewMsgRef.current.value;

      if (!user) {
         alert('Please sign in');
         return;
      }

      const reviewObj = {
         username: user.username,
         reviewText,
         rating: tourRating
      };

      try {
         const res = await fetch(`${BASE_URL}/review/${id}`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            credentials: 'include',
            body: JSON.stringify(reviewObj)
         });

         const result = await res.json();
         if (!res.ok) throw new Error(result.message);
         alert(result.message);
      } catch (error) {
         alert(error.message);
      }
   };

   useEffect(() => {
      window.scrollTo(0, 0);
   }, [tour]);

   return (
      <section>
         <div className="container">
            {loading && <h4 className="text-center">LOADING.........</h4>}
            {error && <h4 className="text-center">{error}</h4>}
            {!loading && !error && tour && (
               <div className="tour-details">
                  <div className="tour-image">
                     <img src={photo} alt={title} />
                  </div>

                  <div className="tour-info">
                     <h2>{title}</h2>
                     <div className="tour-meta">
                        <span className="tour-rating">
                           <i className="ri-star-fill" style={{ color: 'var(--secondary-color)' }}></i>
                           {avgRating || 'Not rated'} ({reviews.length})
                        </span>
                        <span><i className="ri-map-pin-fill"></i> {address}</span>
                     </div>

                     <div className="tour-extra-details">
                        <span><i className="ri-map-pin-2-line"></i> {city}</span>
                        <span><i className="ri-money-dollar-circle-line"></i> ${price}/per person</span>
                        <span><i className="ri-map-pin-time-line"></i> {distance} km</span>
                        <span><i className="ri-group-line"></i> {maxGroupSize} people</span>
                     </div>

                     <h5>Description</h5>
                     <p>{desc}</p>

                     <div className="tour-reviews">
                        <h4>Reviews ({reviews.length} reviews)</h4>
                        <form onSubmit={submitHandler}>
                           <div className="rating-group">
                              {[1, 2, 3, 4, 5].map(rating => (
                                 <span
                                    key={rating}
                                    onClick={() => setTourRating(rating)}
                                    className={tourRating === rating ? 'active-rating' : ''}
                                 >
                                    {rating} <i className="ri-star-s-fill"></i>
                                 </span>
                              ))}
                           </div>
                           <div className="review-input">
                              <input type="text" ref={reviewMsgRef} placeholder="Share your thoughts" required />
                              <button className="btn primary-btn" type="submit">Submit</button>
                           </div>
                        </form>

                        <div className="user-reviews">
                           {reviews.map(review => (
                              <div key={review._id} className="review-item">
                                 <img src={avatar} alt={review.username} />
                                 <div className="review-content">
                                    <div className="review-header">
                                       <h5>{review.username}</h5>
                                       <p>{new Date(review.createdAt).toLocaleDateString('en-US', options)}</p>
                                       <span>
                                          {review.rating} <i className="ri-star-s-fill"></i>
                                       </span>
                                    </div>
                                    <p>{review.reviewText}</p>
                                 </div>
                              </div>
                           ))}
                        </div>
                     </div>
                  </div>

                  <Booking tour={tour} avgRating={avgRating} />
               </div>
            )}
         </div>
         <Newsletter />
      </section>
   );
};

export default TourDetails;
