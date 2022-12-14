import React, { createRef, useEffect, useState } from 'react'
import {Card,CardActions,CardActionArea,CardContent,CardMedia,Button,Typography,} from "@material-ui/core";
import useStyles from "./styles"
import classNames from 'classnames';
//create ref create new ref but never stores its value after re render but useref does it both can be used across different components
const NewsCard = ({article:{ description, publishedAt, source, title, url, urlToImage},i,activeArticle}) => {
  const classes=useStyles();
  const[eref,setref]=useState([]);
  const scrollToRef=(ref)=>window.scroll(0,ref.current.offsetTop-53);

  useEffect(()=>{
    setref((refs)=>Array(30).fill().map((_,j)=> refs[j] || createRef() ));
    },[]);
    useEffect(()=>{
      if(i===activeArticle && eref[activeArticle]){
        scrollToRef(eref[activeArticle]);
      }
    },[i,activeArticle,eref])
    const open =()=>{
      window.open(url,'_blank');
    }
  return (
   <Card ref={eref[i]} className={classNames(classes.card,activeArticle === i ? classes.active : null)} style={{background:"transparent"}}>
    <CardActionArea href={url} target="_blank">
      <CardMedia className={classes.media}
      image={urlToImage || 'https://cdn3.vectorstock.com/i/1000x1000/14/82/news-banner-vector-18471482.jpg'}/>
      <div className={classes.details}>
        <Typography variant='body2' className={classes.date} component='h5'>{(new Date(publishedAt)).toDateString()}</Typography>
        <Typography variant='body2' className={classes.name} component='h2'>{source.name}</Typography>
      </div>
      <Typography gutterBottom variant='h5' className={classes.title}>{title}</Typography>
      <CardContent>
        <Typography variant='body2' className={classes.description} component="p" fontFamily="Helvetica Neue">
          {description}
        </Typography>
      </CardContent>
    </CardActionArea>
    <CardActions className={classes.cardActions}>
      <Button size='small' color="primary" className={classes.button} onClick={open}>
      Learn More
      </Button>
      <Typography variant='h5' className={classes.index}>{i+1}</Typography>
    </CardActions>
   </Card>
  )
}

export default NewsCard


//card->  Cards are surfaces that display content and actions on a single topic.
         // They should be easy to scan for relevant and actionable information. 
         // Elements, like text and images, should be placed on them in a way that clearly indicates hierarchy.

//cardactions-> its like what does card does to it it contains button of specific functions
//cardactionarea-> its child component of card inside this all the card content,.. is rendered.
// cardcontent-> its text present in the card it is typograpghy is used 
// cardmedia-> used to insert any images and media

