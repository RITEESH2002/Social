import React from 'react'
import NewsCard from './NewsCard/NewsCard'
import {Grow,Grid,Typography} from "@material-ui/core"
import useStyles from "./styles"
//makestyles creates hook(just function part which is reusable) called usestyles 

const infoCards = [
  {title: 'Latest News', text: 'Give me the latest news' },
  {title: 'News by Categories', info: 'Business, Entertainment, General, Health, Science, Sports, Technology', text: 'Give me the latest {categories} news' },
  {title: 'News by Terms', info: 'NFT,Stock,Covid,Smartphones...', text: 'Give me  {Name of Terms}' },
  {title: 'News by Sources', info: 'CNN, Wired, BBC News, Time,ABC News...', text: 'Give me the news from {sources}' },
  {title:"Othe Information ToUse",info:"To go back|To open read more",text:"go back|open article {number}"}
];


const NewsCards = ({articles,activeArticle}) => {
  const classes=useStyles();
  if(!articles.length)
  {
    return (
      <Grow in>
        <Grid className={classes.container} container alignItems='stretch' spacng={3}>

        {infoCards.map((infoCard) => (
            <Grid item xs={12} sm={6}md={4} lg={3} className={classes.infoCard}>
              <div className={classes.card} style={{ backgroundColor:"#090421"}}>

                <Typography variant="h5" component="h5" className={classes.title}>
                  {infoCard.title}
                </Typography>

                {infoCard.info ? (
                  <Typography variant="h6" component="h6" className={classes.info}>
                    {infoCard.title.split(" ")[2]}: <br />
                    {infoCard.info}
                  </Typography>
                ) : null}
                <Typography variant="h6" component="h6" className={classes.text}>
                  Try saying: <br /> <i>{infoCard.text}</i>
                </Typography>
              </div>
            </Grid>
          ))}
        </Grid>
      </Grow>
    )
  }
  return (
    <Grow in>
      <Grid className={classes.container} container alignItems='stretch' spacng={3}>
      {articles.map((article, index) => (
          <Grid item xs={12} sm={6} md={4} lg={3} className={classes.grid}>
            <NewsCard key={index} article={article} i={index} activeArticle={activeArticle}/>
          </Grid>
        ))}
      </Grid>
    </Grow>
  )
}

export default NewsCards


//grow ->  it adds grow animation to the child component it has to be set in 
//grid->  The Material Design responsive layout grid adapts to screen size and orientation, ensuring consistency across layouts. 
          //The grid creates visual consistency between layouts while allowing flexibility across a wide variety of designs
          //grid container is parent and it has child which is item
//typography-> standardise text and its related css
