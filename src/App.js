import { useGeoLocation } from "./useGeoLocation";

export default function App() {
  
  const [isLoading,position,error,setCallback,callBack] = useGeoLocation()



  const handleClick =() =>{
    setCallback((e) => e+1)
  }
  const { lat, lng } = position;

  

  return (
    <div>
      <button onClick={handleClick} disabled={isLoading}>
        Get my position
      </button>

      {isLoading && <p>Loading position...</p>}
      {error && <p>{error}</p>}
      {!isLoading && !error && lat && lng && (
        <p>
          Your GPS position:{" "}
          <a
            target="_blank"
            rel="noreferrer"
            href={`https://www.openstreetmap.org/#map=16/${lat}/${lng}`}
          >
            {lat}, {lng}
          </a>
        </p>
      )}
      <p>You requested position {callBack} times</p>
    </div>
  );
}
