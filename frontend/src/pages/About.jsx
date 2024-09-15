import React from 'react';
import ServiceList from '../services/ServiceList';
import Subtitle from './../shared/subtitle';
import MasonryImagesGallery from '../components/Image-gallery/MasonryImagesGallery';
import '../styles/about.css'; // Make sure to import the CSS file

// About Component
const About = () => {
  return (
    <section>
      <section>
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <ServiceList />
            </div>
          </div>
        </div>
      </section>
      <section>
      <div class="row">
         <div class="mb-5 col-lg-12">
            <h3 class="section__subtitle">Explore</h3>
            <h2 class="featured__tour-title">Our featured tours</h2>
         </div>
            <h4>Failed to fetch</h4>
         </div>
      </section>
      <section>
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <Subtitle subtitle={'Gallery'} />
              <h2 className="gallery__title">Visit our customers tour gallery</h2>
            </div>
            <div className="col-lg-12">
              <MasonryImagesGallery />
            </div>
          </div>
        </div>
      </section>
    </section>
  );
};

export default About;
