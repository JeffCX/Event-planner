import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import history from '../../history/History';
import Map from "./Map"

const DetailedEventPage = (props) => {
  const { classes } = props;
  const {
    name,
    time_start,
    cost,
    latitude,
    longitude,
    distance} = props.location

  if(!props.location.name){
    history.replace("/")
  }
  
  return (
    <div className={classes.root}>
      <Grid container spacing={24}>
        <Grid item xs={12} >
          <Paper className={classes.paper}>
            <div style={{marginBottom:20}}>
              <Typography gutterBottom variant="h5" component="h2">
                {name}
              </Typography>
              <Typography variant="subtitle2">
                  Event Time: {time_start}
              </Typography>
              <Typography variant="subtitle2">
                  Distance: {distance} Miles
              </Typography>
              <Typography variant="subtitle2">
                  Event Cost: {cost} 
              </Typography>
            </div>
            <Map latitude={latitude} longitude={longitude}/>
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
}

const styles = theme => ({
  root: {
    flexGrow: 1,
    padding:15,
    height:"100%"
  },
  paper: {
    padding: theme.spacing.unit * 2,
    textAlign: 'left',
    color: theme.palette.text.secondary,
    width:"100%",
  },
});


export default withStyles(styles)(DetailedEventPage );
