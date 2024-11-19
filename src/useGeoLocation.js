import {useEffect, useState} from "react";

export function useGeoLocation(){
    const[callback,setCallBack] = useState(0)
  const [isLoading, setIsLoading] = useState(false);
  const [position, setPosition] = useState({});
  const [error, setError] = useState(null);

  useEffect(function(){
    function getPosition() {
        if(callback === 0) return 
        if (!navigator.geolocation)
            return setError("Your browser does not support geolocation");
        
          setIsLoading(true);
          navigator.geolocation.getCurrentPosition(
            (pos) => {
              setPosition({
                lat: pos.coords.latitude,
                lng: pos.coords.longitude
              });
              setIsLoading(false);
            },
            (error) => {
              setError(error.message);
              setIsLoading(false);
            }
          );
      }

      getPosition()

  },[callback])


  return [isLoading,position,error,setCallBack,callback]
}