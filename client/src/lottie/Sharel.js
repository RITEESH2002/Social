import React from 'react';

import Lottie from 'react-lottie';
import animationData from './79622-brain-thinking.json';
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
          height={75}
          width={75}
        />
      </div>
    );
  }