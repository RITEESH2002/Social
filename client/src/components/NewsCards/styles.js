import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme)=>({
    container:{
        padding: "0 5%",
        width: "100%",
        margin: 0,
        justifyContent: "center",
      

    },
    grid:{
        display:"flex",
        // flexDirection:"row",
        margin:"10px 10px 10px 0",
        // boxShadow:"2px 2px 2px gray",
        borderRadius:"4px",
        border:"1px solid white"
      
    },
    card: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        alignItems: "center",
        width: "100%",
        height: "45vh",
        padding: "10%",
        borderRadius: 10,
        color: "white",
      },
      infoCard: {
        display: "flex",
        flexDirection: "column",
        textAlign: "center",
        justifyContent:"center",
        margin:"10px 10px 10px 0",
        borderRadius:"4px",
        border:"1px solid white",
        '&:hover':{
            transform:"scale(1.01)",
            boxShadow:"3px 2px 1.5px gray"
        }
      },
      title:{
        color:"white"
      },
      info:{
        color:"gray",
        [theme.breakpoints.down('sm')]: {
          fontSize:"16px"
          // marginTop:'20px',
        },

      },
      text:{
        color:"lightgray",
        [theme.breakpoints.down('md')]: {
          fontSize:"16px"
          // marginTop:'20px',
        },
      }
}))