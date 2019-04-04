import React,{useEffect,useState} from 'react';
import { withStyles } from '@material-ui/core/styles';
import Event from "./Event"
import Grid from '@material-ui/core/Grid';
import Loader from "../Loader/Loader"
import axios from "axios"
import {calDistanceOnMap} from "../../api/calDistanceOnMap"
import * as uuid from "uuid"
import token from "../../config.js"

let endpoint = "https://event-planner-backend.herokuapp.com/getEvents"  

const EventPage = (props) => {

  const [location,setLocation] = useState("")
  const [events,setEvents] = useState("")

  


  useEffect( () => {

    axios.get(endpoint, { headers: { Authorization: token } }).then(response => {
      setEvents(response.data)
    })
    .catch((error) => {
     alert("Error: Try Again")
    });

    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position)=>{
          let latitude = position.coords.latitude
          let longitude = position.coords.longitude
          setLocation({
            latitude,
            longitude
          })
        },(err)=>{
          alert("Cannot acess location")
        }
      );
    }else{
      alert("Cannot acess Location")
    }

    



    },[])

  const renderData = () =>{
    if(events.data){
      return events.data.map((event)=>{
        let {cost,time_start,business_id,latitude,longitude} = event

        if(!cost){
          cost = "Free Event"
        }else{
          cost = cost + "$"
        }

        time_start = time_start.split("T").join("  ,  ")
        const distance = calDistanceOnMap(latitude,longitude,location.latitude,location.longitude).toFixed(2)

        return <Event 
                  {...event}
                  distance={distance}
                  cost={cost}
                  time_start={time_start}
                  key={business_id}
                  business_id={uuid()}
                />
      })
    }else{
      return <Loader />
    }
  }

  const { classes } = props;
  return (
    <div className={classes.root}>
      {location === "" || events === ""?
        <Loader />:


        <Grid container spacing={24}>
        {renderData()}
      </Grid>
     
    
    }
    </div>
  );
}

const styles = {
  root: {
    flexGrow: 1,
    padding:15,
  }
};

export default withStyles(styles)(EventPage); 

/*
{
          events.map((event)=>{
            let {cost,time_start,business_id,latitude,longitude} = event

            if(!cost){
              cost = "Free Event"
            }else{
              cost = cost + "$"
            }

            time_start = time_start.split("T").join("  ,  ")
            const distance = calDistanceOnMap(latitude,longitude,location.latitude,location.longitude).toFixed(2)
    
            return <Event 
                      {...event}
                      distance={distance}
                      cost={cost}
                      time_start={time_start}
                      key={business_id}
                    />
          })
        }
*/

