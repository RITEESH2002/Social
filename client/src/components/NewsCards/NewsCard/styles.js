import { makeStyles } from "@material-ui/core/styles";

export default makeStyles({
    media:{
        height:250,
        '&:hover':{
            transform:'scale(1.01)',
           
        },
    },
    border: {
        border: "solid",
      },
      fullHeightCard: {
        height: "100%",
      },
      card: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        borderBottom: "10px solid transparent",
        color:"white",
      },
      active: {
        borderBottom: "10px solid white",
       
      
      },
      grid: {
        display: "flex",
      },
      details: {
        display: "flex",
        justifyContent: "space-between",
        margin: "20px",
      },
      title: {
        padding: "0 16px",
        color:"white",
        fontSize:"18px",
        fontWeight:"bold"
      },
      cardActions: {
        padding: "0 16px 8px 16px",
        display: "flex",
        justifyContent: "space-between",
      },
      name:{
        color:"Gray",
        fontSize:"12px"
      },
      date:{
        color:"lightgray",
        fontSize:"16px"
      },
      description:{
        color:"gray",
        fontWeight:"bold"
      },
      button:{
        padding:"5px",
        border:"1px solid gray",
        color:"lightgray"
      },
      index:{
        color:"lightgray",
        fontSize:"20px",
       fontWeight:"lighter"
      }

})

