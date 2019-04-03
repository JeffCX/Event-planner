import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';
import CardActions from '@material-ui/core/CardActions';

const EventCard = (props) => {
  const { classes, name,time_start,cost,business_id ,latitude,longitude,distance} = props;

  const newTo = { 
    pathname: `/event/${business_id}`, 
    name,
    time_start,
    cost,
    latitude,longitude,
    business_id,
    distance
  };
  
  return (
    <Grid item xs={12} md={4}>
      <Paper className={classes.paper}>
        <Card className={classes.card}>
          <CardActionArea onClick={()=>{window.open(props.event_site_url)}}>
            <img
              className={classes.media}
              src={props.image_url}
              title="Contemplative Reptile"
              onError={(e)=>{
                e.target.src='http://fiscalsystems.wpengine.com/wp-content/uploads/2013/10/EVENTS.png';
              }}
              alt="Event"
            />

            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
                  {props.name}
              </Typography>
              <Typography variant="subtitle2">
                  Event Time: {props.time_start}
              </Typography>
              <Typography variant="subtitle2">
                  distance: {distance} miles
              </Typography>
              <Typography variant="subtitle2">
                  Event Cost: {props.cost}
              </Typography>
            </CardContent>

          </CardActionArea>

          <CardActions> 
            <Link to = {newTo}>
              <Button size="large" color="primary"  >
                  Learn more about this Event
              </Button>
            </Link>
          </CardActions>
        </Card>
    </Paper>
    </Grid>
  );
}

const styles = theme => ({
  card: {
    maxWidth: "100%",
    textAlign:"left"
  },
  media: {
   width:"100%",
   height:230
  },
  paper: {
    padding: theme.spacing.unit * 2,
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
})

export default withStyles(styles)(EventCard);
