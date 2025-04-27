import axios from "axios";
import { useState } from "react";

const Home = () => {

    const [weather , setWeather] = useState({});
    const [cityName , setCityName] = useState("");


    let baseUrl = 'https://express-on-vercel-theta.vercel.app'

    const getWeather = (e) => {
        e.preventDefault()
        axios.get(`${baseUrl}/get-weather/${cityName}`).then((res) => {

          console.log(res.data);
          setWeather(res.data);

        }).catch((err) => {console.log("Error" , err)})

    }



  return (
    <>
    <div>
      
      <form onSubmit={getWeather}>

        City: <input className="mb-3" type="text" onChange={(e) => {setCityName(e.target.value)}} />
      </form>



    {(cityName.length == 0 ) ?


          <>
          <h1>City: </h1>
          <p>Temperature: </p>
          <p>Feelslike: </p>
          <p>Humidity: </p>
          <p>Min: </p>
          <p>Max: </p>
          </>
:
    <>  
    <h1>City: {cityName}</h1>
    <p>Temperature: {weather?.temperature}</p>
    <p>Feelslike: {weather?.feelslike}</p>
    <p>Humidity: {weather?.humidity}</p>
    <p>Min: {weather?.min}</p>
    <p>Max: {weather?.max}</p>
    </>
    
    
  
  }

    </div>
    </>
  )
};

export default Home;
