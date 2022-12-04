import React from 'react';
import Feature from '../../components/Feature/Feature';
import './About.css';

const About = () => (
  <div className="gpt3__whatgpt3 section__margin" id="VConnect">
    <div className="gpt3__whatgpt3-feature">
      <Feature title="What is VConnect" text="Online Application used to connect people across the globe with like-minded interests and share their thoughts, feelings and insights. An easy to use application providing the user to maintain his/her social relationships in such a busy ongoing world.
      Getting to Know the latest buzz around the globe as well." />
    </div>
    <div className="gpt3__whatgpt3-heading">
      <h1 className="gradient__text">The possibilities are beyond your imagination</h1>
      <p>Explore the Library</p>
    </div>
    <div className="gpt3__whatgpt3-container">
      <Feature title="Chatbots" text="Effective AI bot so as to easily navigate through pages with zero clicks." />
      <Feature title="Knowledgebase" text="Get the latest buzz across the globe. Friendly AI assistance to read for you." />
      <Feature title="Socialize" text="Prime motive to engage humans in a busy going world. Being with people with whom you want to be. Post stuffs, Like them, Comment your views and much more ." />
    </div>
  </div>
);

export default About;