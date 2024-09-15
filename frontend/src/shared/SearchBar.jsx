import React, { useRef } from 'react';
import './search-bar.css';
import { useNavigate } from 'react-router-dom';
import { BASE_URL } from '../utils/config';

const SearchBar = () => {
   const locationRef = useRef(null);
   const dateRef = useRef(null);
   const maxGroupSizeRef = useRef(null);
   const navigate = useNavigate();

   const searchHandler = async () => {
      const location = locationRef.current.value;
      const distance = dateRef.current.value;
      const maxGroupSize = maxGroupSizeRef.current.value;

      if (location === '' || distance === '' || maxGroupSize === '') {
         return alert('All fields are required!');
      }

      try {
         const res = await fetch(`${BASE_URL}/tours/search/getTourBySearch?city=${location}&distance=${distance}&maxGroupSize=${maxGroupSize}`);
         if (!res.ok) throw new Error('Something went wrong');

         const result = await res.json();
         navigate(`/tours/search?city=${location}&distance=${distance}&maxGroupSize=${maxGroupSize}`, { state: result.data });
      } catch (error) {
         alert(error.message);
      }
   };

   return (
      <div className="search__bar">
         <form className="search__form">
            <div className="form__group form__group-fast">
               <span><i className='ri-map-pin-line'></i></span>
               <div>
                  <h6>Location</h6>
                  <input type="text" placeholder="Where are you going?" ref={locationRef} />
               </div>
            </div>
            <div className="form__group form__group-fast">
               <span><i className='ri-map-pin-time-line'></i></span>
               <div>
                  <h6>Date From</h6>
                  <input type="date" ref={dateRef} />
               </div>
            </div>
            <div className="form__group form__group-last">
               <span><i className='ri-group-line'></i></span>
               <div>
                  <h6>Total Persons</h6>
                  <input type="number" placeholder="0" ref={maxGroupSizeRef} />
               </div>
            </div>
            <span className="search__icon" onClick={searchHandler}>
               <i className='ri-search-line'></i>
            </span>
         </form>
      </div>
   );
};

export default SearchBar;
