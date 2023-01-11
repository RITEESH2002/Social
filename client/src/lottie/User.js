import React from 'react';

import Lottie from 'react-lottie';
import animationData from './65035-profile.json';
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
          height={70}
          width={70}
        />
      </div>
    );
  }