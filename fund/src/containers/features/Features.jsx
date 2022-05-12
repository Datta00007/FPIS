import React from 'react';
import Feature from '../../components/feature/Feature';
import './features.css';

const featuresData = [
  {
    title: 'Transparency',
    text: 'Blockchain is a shared database that promotes honest transparency. All partners have the responsibility to upload their information and data about the product. A digital collection of accurate data improves accountability and trust between partners',
  },
  {
    title: 'Streamlined Operations',
    text: 'All information is uploaded to the cloud. This digitization of logging leads to less administrative work and more consistent data tracking. Everything about the product is in one spot, making communication and operations highly streamlined.',
  },
  {
    title: 'Analytics',
    text: 'It offers complex solutions to analyze the data being uploaded. It can help create forecasts and predictions based on previous data, and it can allow users to pinpoint lags in the supply chain. These data analytics are proving invaluable to companies who want to minimize supply chain expenditures and grow their businesses.',
  },
  {
    title: 'Security',
    text: 'Blockchain tech is built with secure “blocks.” These are copies of the document that are chronologically stored and linked to the previous blocks. This is what makes blockchain the technology used by Bitcoin and major financial services and banks. If you want to ensure your supply chain data stays guarded against cyber attacks (which are becoming more regular these days), blockchain is an ideal solution.',
  },
];

const Features = () => (
  <div className="gpt3__features section__padding" id="features">
    <div className="gpt3__features-heading">
      <h1 className="gradient__text">The Future is Blockchain Technology and You Just Need to Realize It. Step into Future Today. & Make it Happen.</h1>
      <a href="/csignup"><p>Register for Access to Get Started</p></a>
    </div>
    <div className="gpt3__features-container">
      {featuresData.map((item, index) => (
        <Feature title={item.title} text={item.text} key={item.title + index} />
      ))}
    </div>
  </div>
);

export default Features;
