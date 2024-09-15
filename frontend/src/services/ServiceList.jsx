import React from 'react';
import ServiceCard from './ServiceCard';
import weatherImg from '../assets/images/weather.png';
import guideImg from '../assets/images/guide.png';
import customizationImg from '../assets/images/customization.png';
import './ServiceList.css'; // Import the CSS file for styling

const servicesData = [
   {
      imgUrl: weatherImg,
      title: `Calculate Weather`,
      desc: `Lorem ipsum dolor sit amet, consectetur adipisicing elit.`,
   },
   {
      imgUrl: guideImg,
      title: `Best Tour Guide`,
      desc: `Lorem ipsum dolor sit amet, consectetur adipisicing elit.`,
   },
   {
      imgUrl: customizationImg,
      title: 'Customization',
      desc: `Lorem ipsum dolor sit amet, consectetur adipisicing elit.`,
   },
];

const ServiceList = () => {
   return (
      <div className="service-list">
         <div className="services__header">
            <h5 className="services__subtitle">What we serve</h5>
            <h2 className="services__title">We offer our best services</h2>
         </div>
         {servicesData.map((item, index) => (
            <div className="service-card" key={index}>
               <ServiceCard item={item} />
            </div>
         ))}
      </div>
   );
};

export default ServiceList;
