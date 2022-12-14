import React from 'react';
import Lottie from 'react-lottie';
import animationData from './88502-reading-newspaper-on-chair.json';
import useStyles from "./styles"
const Lotties=()=>{
  const classes = useStyles();

        const defaultOptions = {
            loop: true,
            autoplay: true,
            animationData: animationData,
            rendererSettings: {
              preserveAspectRatio: "xMidYMid slice"
            }
          };
        
        return (
          <div className={classes.lottie}> 
            <Lottie 
              options={defaultOptions}
              height={380}
              width={380}
            />
          </div>
        );
      
      
}
export default Lotties;