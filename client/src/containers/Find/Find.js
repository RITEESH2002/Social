import React from 'react'
import Feature from '../../components/Feature/Feature';
import './Find.css'
const Find = () => {
  const featuresData = [
    {
      title: 'RITEESH DEEPAK PAI',
      text: 'Phone No: 6363932461',
    },
    {
      title: 'PRAVEEN NARAYAN BHAT',
      text: 'Phone No: 8867626737',
    },
  ];
  
  
  return (
    <div className="gpt3__features section__padding" id="howtouse">
    <div className="gpt3__features-heading">
      <h1 className="gradient__text">FIND US ;)</h1>
      <div className="gpt3__features-container">
      {featuresData.map((item, index) => (
        <Feature title={item.title} text={item.text} key={item.title + index} />
      ))}
    </div>
    </div>
  </div>
  )
}

export default Find