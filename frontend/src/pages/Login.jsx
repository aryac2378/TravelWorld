import React from 'react';
import '../styles/login.css'; // Import CSS for styling
import loginImg from '../assets/images/login.png';
import userIcon from '../assets/images/user.png';

const Login = () => {

  return (
      <section className="login-section">
         <div className="login__container d-flex justify-content-between">
            <div className="login__img">
               <img src={loginImg}alt=""/>
               </div>
               <div className="login__form">
                  <div className="user">
                     <img src={userIcon} alt=""/>
                     </div>
                     <h2>Login</h2>
                     <form className="">
                        <div className="mb-3">
                        <input type="email" placeholder="Email" id="email" required=""/>
                        </div>
                        <div className="mb-3">
                           <input type="password" placeholder="Password" id="password" required=""/>
                        </div>
                           <button type="submit" className="btn secondary__btn auth__btn btn btn-secondary">Login</button>
                     </form>
                           <p>Don't have an account? <a href="/register">Create</a></p>
                           </div>
         </div>
      </section>
   );
};

export default Login;
