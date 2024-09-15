import React, { useState, useContext } from 'react';
import '../styles/login.css'; // Import CSS for styling
import registerImg from '../assets/images/login.png'; // Use a different image if appropriate
import userIcon from '../assets/images/user.png';
import { AuthContext } from '../context/AuthContext';
import { BASE_URL } from '../utils/config';
import { useNavigate } from 'react-router-dom';

const Register = () => {
   const [credentials, setCredentials] = useState({
      userName: '',
      email: '',
      password: ''
   });

   const { dispatch } = useContext(AuthContext);
   const navigate = useNavigate();

   const handleChange = e => {
      setCredentials(prev => ({ ...prev, [e.target.id]: e.target.value }));
   };

   const handleClick = async e => {
      e.preventDefault();

      try {
         const res = await fetch(`${BASE_URL}/auth/register`, {
            method: 'post',
            headers: {
               'content-type': 'application/json'
            },
            body: JSON.stringify(credentials)
         });
         const result = await res.json();

         if (!res.ok) alert(result.message);

         dispatch({ type: 'REGISTER_SUCCESS' });
         dispatch({ type: 'LOGIN_SUCCESS', payload: result.data });
         navigate('/');
      } catch (err) {
         alert(err.message);
      }
   };

   return (
      <section className="login-section">
         <div className="login__container d-flex justify-content-between">
            <div className="login__img">
               <img src={registerImg} alt="Register" />
            </div>

            <div className="login__form">
               <div className="user">
                  <img src={userIcon} alt="User Icon" />
               </div>
               <h2>Register</h2>

               <form onSubmit={handleClick}>
                  <div className="mb-3">
                     <input
                        type="text"
                        placeholder="Username"
                        id="userName"
                        value={credentials.userName}
                        onChange={handleChange}
                        required
                     />
                  </div>
                  <div className="mb-3">
                     <input
                        type="email"
                        placeholder="Email"
                        id="email"
                        value={credentials.email}
                        onChange={handleChange}
                        required
                     />
                  </div>
                  <div className="mb-3">
                     <input
                        type="password"
                        placeholder="Password"
                        id="password"
                        value={credentials.password}
                        onChange={handleChange}
                        required
                     />
                  </div>
                  <button type="submit" className="btn secondary__btn auth__btn btn btn-secondary">
                     Create Account
                  </button>
               </form>
               <p>
                  Already have an account? <a href="/login">Login</a>
               </p>
            </div>
         </div>
      </section>
   );
};

export default Register;
