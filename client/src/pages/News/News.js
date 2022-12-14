import React,{useEffect,useState}  from "react";
// import useAlan from "./Alan";
import NewsCards from "../../components/NewsCards/NewsCards";
// import { useParams } from "react-router-dom";
import wordsToNumbers from "words-to-numbers";
//convert three -> 3
import useStyles from "./styles"
import alanBtn from "@alan-ai/alan-sdk-web";
import Lotties from "../../components/lottie/Lotties";

// By using useEffect Hook, you tell React that your component needs to do something after render. 
// React will remember the function you passed (we’ll refer to it as our “effect”), and call it later after performing the DOM updates. 
// In this effect, we set the document title, but we could also perform data fetching or call some other imperative API, directly updating DOM and timers
//by default it renders every time its updated
// useEffect(<function>, <dependency>)

const ALAN_API="7b4b95516f1619dfe2b8054f8a687d072e956eca572e1d8b807a3e2338fdd0dc/stage"
const News =()=>{

  //the alanbtn can be rendered like using useRef();-> alanbtnContainer=useRef(); and wrapping it at the end with div=ref{alanbtnConatiner}
  //for this alan.jsx file has to be created separately
  const[activeArticle,setActiveArticle]=useState(0);
const[newsArticles,setNewsArticles] = useState([]);
const classes=useStyles();
    useEffect(()=>{
        // this is call back function
        alanBtn({
          key:ALAN_API,
          // Responsible for handling commands sent from the Alan voice script.
          // To accompany user’s utterances with activities in the app UI, you can send commands from the voice scripts to the client app.
          // this command is passsed as destructive paramter and used in if else condition
          // if that command is mapped then that function is executed 
          // destructuring is unpacking the values that is sent in array into distinct variables -> int r= a[1]; eg
 
          onCommand:({ command,articles,number })=>{
            if(command ==='newHeadlines'){
              // console.log(articles)
             setNewsArticles(articles);
             setActiveArticle(-1);
             //it goes one front otherwise
            }
            else if(command==='highlight'){
                  setActiveArticle((prevActiveArticle)=>prevActiveArticle+1);
                  //react provides with the prev state which is used to set new state 
                  //the above statement is set new active article to next one after previous -> like i++;
            }
            else if(command==='open'){
              const pn=number.lenght > 2 ? wordsToNumbers(number,{fuzzy:true}):number;
              //fuzzy-> matches nearly also 
              const article=articles[pn-1];
              if(pn>30)
              {
                alanBtn().playText('Sorry!Some error happend');
              }
              else if(article)
              {

                // alanBtn().playText("Sure Opening");
                window.open(article.url,'_blank');
              }
            }
            
          }
        })
        
          },[])
           //this is dependecy array at what time it has to be updated
  //          const{newsArticles}=useParams();
  // const alanbtnConatiner=useRef();
  // useAlan();



  return (
    <>
      <div>
      <div style={{height:"68px",position:"fixed",width:"100%",zIndex:"1",background:"#0b011f",borderBottom:"1px solid black"}}>
          <a href="" style={{textDecoration:"none"}}>

          <h1 style={{color:"gray",textAlign:"center",fontFamily:"Roboto",fontWeight:"bold",textShadow:"1px 1px 1px white"}}>
          📰VConnect News📰
          </h1>
          </a>
      </div>
        <div className={classes.logoContainer}>
            {/* <img src="https://miro.medium.com/max/600/1*CJyCnZVdr-EfgC27MAdFUQ.jpeg" className={classes.alanLogo} alt="news" /> */}
            <Lotties className={classes.alanLogo}/>
            
        </div>
            <div style={{justifyContent:"center",display:"flex",marginBottom:"5px"}}>

            <h1 style={{color:"gray",textAlign:"center",textTransform:"uppercase",textShadow:"1px 1px 1px  white"}}>News At your Fingertip 🎙️</h1>
            </div>
          
            <NewsCards articles={newsArticles} activeArticle={activeArticle}/>
            <div style={{display:"flex",justifyContent:"center"}}>
              <h1 style={{color:"gray",fontSize:"20px",margin:"10px"}}>
              © Copyright VConnect🧑‍💻
              </h1>
      </div>
            </div>
   
      {/* <div ref={alanbtnConatiner}/> */}
    </>
  )
}


export default News;