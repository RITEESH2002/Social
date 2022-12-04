import React from 'react';

import Lottie from 'react-lottie';
import animationData from './121421-login.json';
export default function Lotties() {
    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: animationData,
        rendererSettings: {
          preserveAspectRatio: "xMidYMid slice"
        }
      };
    
    return (
      <div>
        <Lottie 
          options={defaultOptions}
          height={350}
          width={350}
        />
      </div>
    );
  }