import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
      root: {
            '& > *': {
                  margin: theme.spacing(1),
            },
      },
      divStyle: {
            paddingTop: "200px",
            paddingBottom: "200px",

            alignItems: "center",
            justifyContent: "center",
            textAlign: "center",
            fontFamily: "'Staatliches', cursive !important", 
      },
      span404: {
            fontSize: "60px",
            color:" #2aaf27 !important",
            fontWeight: "bolder",
            textShadow: "2px 2px 2px black",
            fontFamily: "'Staatliches', cursive !important", 
      },
      spanText: {
            fontSize: "25px !important",
            color: "white",
            fontWeight: "bolder",
            textShadow: "2px 2px 2px black",
            fontFamily: "'Staatliches', cursive !important",
            "&:hover":{
                color:" #2aaf27 !important",
                } 
      },
      errorText: {
            fontSize: "30px",
            color: "white",
            fontWeight: "bolder",
            textShadow: "2px 2px 2px black",
            marginBottom: "20px",
            fontFamily: "'Staatliches', cursive !important",
            "&:hover":{
            color:" #2aaf27 !important",
            } 
      },
      myButton: {
            backgroundColor:" #2aaf27 !important",
            fontWeight: "bolder",
            fontSize:"20px",
            color:"white",
            fontFamily: "'Staatliches', cursive !important", 
            textDecoration:"inherit !important",
            "&:hover":{
                  backgroundColor:"white !important",
                  color:" #2aaf27 !important",
                  
            }
      },
      link:{
            textDecoration:"none !important",
      }
}));

export default useStyles;