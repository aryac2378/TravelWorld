import React, { useState } from 'react';
import '../styles/home.css'; // Import the CSS file
import vid1 from '../assets/images/vid-1.mp4';
import vid2 from '../assets/images/vid-2.mp4';
import vid3 from '../assets/images/vid-3.mp4';
import worldImg from '../assets/images/world.png';
import experienceImg from '../assets/images/experience.png';
import Subtitle from '../shared/subtitle';
import SearchBar from './../shared/SearchBar';
import ServiceList from '../services/ServiceList';
import FeaturedTourList from '../components/Featured-tours/FeaturedTourList';
import MasonryImagesGallery from '../components/Image-gallery/MasonryImagesGallery';
import Testimonials from '../components/Testimonial/Testimonials';
import NewsLetter from '../shared/Newsletter';
import  CountUp  from 'react-countup';
import ScrollTrigger from 'react-scroll-trigger';

const Home = () => {
   const [counterOn, setCounterOn] = useState(false);

   return (
      <>
         {/* ========== HERO SECTION ========== */}
         <section className="hero">
            <div className="container">
               <div className="row">
                  <div className="col-lg-6">
                    <div className="hero__content">
                  <div className="hero__subtitle">
                     <Subtitle subtitle={'Know Before You Go'} />
                     <img src={worldImg} alt="World" />
                  </div>
                  <h1>
                     Traveling opens the door to creating <span className='highlight'>memories</span>
                  </h1>
                  <p>
                     Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                     Ullam ipsum nobis asperiores soluta voluptas quas voluptates.
                     Molestiae tempora dignissimos, animi praesentium molestias perferendis
                     porro expedita delectus. Soluta natus porro.
                  </p>
               </div>
               </div>
               <div className="col-lg-2">
                 <div className="hero__videos">
                  <video src={vid1} alt="Video 1" autoPlay loop muted />
                 </div>
               </div>
                 <div className="col-lg-2">
                 <div className="hero__videos1">
                  <video src={vid2} alt="Video 2" autoPlay loop muted />
                 </div>
                 </div>
                 <div className="col-lg-2">
                 <div className="hero__videos2">
                  <video src={vid3} alt="Video 3" autoPlay loop muted />
                 </div>
               </div>
               <div className="col-lg-12">
                  <SearchBar />
               </div>
               </div>
               </div>
         </section>
         {/* ============================================================== */}

         {/* ==================== SERVICES SECTION ====================== */}
         <section className="services">
            <div className="container">
               <ServiceList />
            </div>
         </section>

         {/* ========== FEATURED TOUR SECTION START ========== */}
         <section className="featured-tours">
            <div className="container">
               <div className="featured-tours__header">
                  <Subtitle subtitle={'Explore'} />
                  <h2 className='featured__tour-title'>Our featured tours</h2>
               </div>
               <FeaturedTourList />
            </div>
         </section>
         {/* ========== FEATURED TOUR SECTION END =========== */}

         {/* ========== EXPERIENCE SECTION START ============ */}
         <section className="experience">
            <div className="container">
            <div class="row">
                  <div class="col-lg-6">
                  <div className="experience__content">
                  <Subtitle subtitle={'Experience'} />
                  <h2>With our all experience <br /> we will serve you</h2>
                  <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                     <br /> Quas aliquam, hic tempora inventore suscipit unde.
                  </p>
                  <ScrollTrigger onEnter={() => setCounterOn(true)} onExit={() => setCounterOn(false)}>
                     <div className="counter__wrapper">
                        <div className="counter__box">
                           <span>{counterOn && <CountUp start={0} end={12000} duration={2} delay={0} />}</span>
                           <h6>Successful trips</h6>
                        </div>
                        <div className="counter__box">
                           <span>{counterOn && <CountUp start={0} end={2000} duration={2} delay={0} />}</span>
                           <h6>Regular clients</h6>
                        </div>
                        <div className="counter__box">
                           <span>{counterOn && <CountUp start={0} end={15} duration={2} delay={0} />}</span>
                           <h6>Years of experience</h6>
                        </div>
                     </div>
                  </ScrollTrigger>
               </div>
                  </div>
                  <div class="col-lg-6">
                  <div className="experience__img">
                  <img src={experienceImg} alt="Experience" />
               </div>
                  </div>
            </div>   
            </div>
         </section>
         {/* ========== EXPERIENCE SECTION END ============== */}

         {/* ========== GALLERY SECTION START ============== */}
         <section className="gallery">
            <div className="container">
               <div className="gallery__header">
                  <Subtitle subtitle={'Gallery'} />
                  <h2 className="gallery__title">Visit our customers' tour gallery</h2>
               </div>
               <MasonryImagesGallery />
            </div>
         </section>
         {/* ========== GALLERY SECTION END ================ */}

         {/* ========== TESTIMONIAL SECTION START ================ */}
         <section className="testimonials">
            <div className="container">
               <div className="testimonials__header">
                  <Subtitle subtitle={'Fans Love'} />
                  <h2 className="testimonial__title">What our fans say about us</h2>
               </div>
               <Testimonials />
            </div>
         </section>
         {/* ========== TESTIMONIAL SECTION END ================== */}
         <NewsLetter />
      </>
   );
};

export default Home;
