import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/thank-you.css';

const ThankYou = () => {
   return (
      <section className="thank-you-section">
         <div className="thank-you-container">
            <div className="thank-you-content text-center">
               <span className="thank-you-icon"><i className='ri-checkbox-circle-line'></i></span>
               <h1 className='thank-you-title'>Thank You</h1>
               <h3 className='thank-you-subtitle'>Your Tour Is Booked</h3>
               <Link to='/home' className='thank-you-button'>Back To Home</Link>
            </div>
         </div>
      </section>
   );
};

export default ThankYou;
