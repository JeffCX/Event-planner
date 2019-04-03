

const getGeolocation = () =>{

    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
          (position)=>{
            let latitude = position.coords.latitude
            let longitude = position.coords.longitude
          }
        );
      }else{
          return null
      }
}

export {getGeolocation}