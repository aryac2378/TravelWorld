import React, { useState, useContext } from 'react';
import './booking.css';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../context/AuthContext';
import { BASE_URL } from '../../utils/config';

const Booking = ({ tour, avgRating }) => {
  const { price, reviews, title } = tour;
  const navigate = useNavigate();
  const { user } = useContext(AuthContext);

  // Initialize the state with user details and tour name
  const [booking, setBooking] = useState({
    userId: user ? user._id : '',
    userEmail: user ? user.email : '',
    tourName: title || '',
    fullName: '',
    phone: '',
    guestSize: 1,
    bookAt: ''
  });

  const handleChange = e => {
    const { id, value } = e.target;
    setBooking(prev => ({ ...prev, [id]: value }));
  };

  const serviceFee = 10;
  const totalAmount = Number(price) * Number(booking.guestSize) + Number(serviceFee);

  const handleSubmit = async e => {
    e.preventDefault();

    try {
      if (!user) {
        return alert('Please sign in');
      }

      const res = await fetch(`${BASE_URL}/booking`, {
        method: 'post',
        headers: {
          'Content-Type': 'application/json'
        },
        credentials: 'include',
        body: JSON.stringify(booking)
      });

      const result = await res.json();

      if (!res.ok) {
        return alert(result.message);
      }

      navigate('/thank-you');
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <div className='booking'>
      <div className="booking__top">
        <h3>${price} <span>/per person</span></h3>
        <span className="tour__rating">
          <i className='ri-star-fill' style={{ color: 'var(--secondary-color)' }}></i>
          {avgRating} ({reviews.length})
        </span>
      </div>

      {/* =============== BOOKING FORM START ============== */}
      <div className="booking__form">
        <h5>Information</h5>
        <form onSubmit={handleSubmit} className='booking__info-form'>
          <div className="form-group">
            <label htmlFor="fullName">Full Name</label>
            <input
              type="text"
              id='fullName'
              placeholder='Full Name'
              value={booking.fullName}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="phone">Phone</label>
            <input
              type="tel"
              id='phone'
              placeholder='Phone'
              value={booking.phone}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="bookAt">Date</label>
            <input
              type="date"
              id='bookAt'
              value={booking.bookAt}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="guestSize">Number of Guests</label>
            <input
              type="number"
              id='guestSize'
              placeholder='Guest'
              value={booking.guestSize}
              onChange={handleChange}
              min="1"
              required
            />
          </div>
          <button type="submit" className='btn primary__btn'>Book Now</button>
        </form>
      </div>
      {/* =============== BOOKING FORM END ================ */}

      {/* =============== BOOKING BOTTOM ================ */}
      <div className="booking__bottom">
        <div className='booking__details'>
          <h5>${price} <span>/ 1 person</span></h5>
          <p>${price}</p>
        </div>
        <div className='booking__details'>
          <h5>Service charge</h5>
          <p>${serviceFee}</p>
        </div>
        <div className='booking__details total'>
          <h5>Total</h5>
          <p>${totalAmount}</p>
        </div>
      </div>
    </div>
  );
};

export default Booking;
