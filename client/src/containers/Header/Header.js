import React from 'react';
import people from '../../assets/people.png';
// import ai from '../../assets/ai.png';
import possibility from '../../assets/possibility.png';
import './Header.css';

const Header = () => (
  <div className="gpt3__header section__padding" id="home">
    <div className="gpt3__header-image">
      {/* <img src={ai} alt="ai"/> */}
      <img src={possibility} alt="ai"/>
    </div>
    <div className="gpt3__header-content">
      <h1 className="gradient__text">Connecting You With The Digital Life</h1>
      <p> <b>VConnect</b>  you with people across the globe with like-minded interests, and share thoughts, feelings, and insights online. 
</p>

      {/* <div className="gpt3__header-content__input">
        <input type="email" placeholder="Your Email Address" />
        <button type="button">Get Started</button>
      </div> */}

      <div className="gpt3__header-content__people">
        <img src={people} alt="people" />
        <p>1k+ people have Signed Up</p>
      </div>
    </div>

  </div>
);

export default Header;