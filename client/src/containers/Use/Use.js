import React from 'react';
import Feature from '../../components/Feature/Feature';
import './Use.css';

const featuresData = [
  {
    title: 'VOICE RECOGNITION ICON',
    text: 'AI used to deal with jumping to pages without the need of clicks. Quickly recognizes your request and does it in no time.',
  },
  {
    title: 'THE SOCIAL NETWORK',
    text: 'Requires you to SignUp (if dont have an account) or SignIn (if already have and account) and can then connect to the people you know',
  },
  {
    title: 'CURRENT BUZZ',
    text: 'Whats going around the GLOBE? Get the gossips with just a click away. The news that you want will read for you;)',
  },
  {
    title: 'STUFFS',
    text: 'Add Posts. Follow People. Like Posts. Comment On It. Deal with the UI with great ease without the need to scratch your head.',
  },
];

const Use = () => (
  <div className="gpt3__features section__padding" id="howtouse">
    <div className="gpt3__features-heading">
      <h1 className="gradient__text">Step into Future Today. & See How to Use it.</h1>
      <p>Advanced Technologies And Ways To Deal With It</p>
    </div>
    <div className="gpt3__features-container">
      {featuresData.map((item, index) => (
        <Feature title={item.title} text={item.text} key={item.title + index} />
      ))}
    </div>
  </div>
);

export default Use;