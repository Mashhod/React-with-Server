import express from 'express';
import cors from 'cors'
import e from 'express';

const app = express();
const port = process.env.PORT || 5001;


app.use(cors());

app.get('/' , (req , res) => {
    console.log(req.ip);
    res.send("Hello World")

})



/// url parameter
/// http://localhost:5001/get-weather/karachi/78500

/// query parameter
/// http://localhost:5001/get-weather?zip=78500&city=karachi


app.get('/get-weather/:cityName' , (req , res) => {

const city = req.params.cityName.toLowerCase();
    let apiRes = {};

    if(city == "karachi"){

        apiRes = {

            "city": city,
            "temperature": 40,
            "humidity": 39,
            "wind": "50 km/h",
            "min": 30,
            "max": 42,
            "feelslike": 45

        }
    }else if (city == "lahore"){

        apiRes = {
            
            "city": city,
            "temperature": 43,
            "humidity": 35,
            "wind": "60 km/h",
            "min": 35,
            "max": 42,
            "feelslike": 45
        }
    }else if (city == "multan"){
        
        apiRes = {
            "city": city,
            "temperature": 45,
            "humidity": 40,
            "wind": "55 km/h",
            "min": 30,
            "max": 40,
            "feelslike": 39
        }

        
    }else if (city == "hyderabad"){

        apiRes = {
            "city": city,
            "temperature": 46,
            "humidity": 30,
            "wind": "40 km/h",
            "min": 29,
            "max": 35,
            "feelslike": 43
        }

    }else if (city == "sukkur"){

        apiRes = {
            
            "city": city,
            "temperature": 45,
            "humidity": 31,
            "wind": "50 km/h",
            "min": 29,
            "max": 32,
            "feelslike": 45
        }

    }else if (city == "larkana"){

        apiRes = {
            "city": city,
            "temperature": 42,
            "humidity": 34,
            "wind": "55 km/h",
            "min": 35,
            "max": 46,
            "feelslike": 39
        }

    }else if (city == "thatta"){

        apiRes = {
            "city": city,
            "temperature": 47,
            "humidity": 39,
            "wind": "29 km/h",
            "min": 29,
            "max": 32,
            "feelslike": 40
        }

    }else if (city == "faisalabad"){

        apiRes = {
            "city": city,
            "temperature": 45,
            "humidity": 29,
            "wind": "39 km/h",
            "min": 32,
            "max": 42,
            "feelslike": 45
        }

    }else if (city == "rawalpindi"){

        apiRes = {
            "city": city,
            "temperature": 40,
            "humidity": 30,
            "wind": "50 km/h",
            "min": 35,
            "max": 40,
            "feelslike": 45
        }
    }else if (city == "peshawar"){

        apiRes = {
            "city": city,
            "temperature": 46,
            "humidity": 30,
            "wind": "40 km/h",
            "min": 35,
            "max": 45,
            "feelslike": 40
        }

    }else if (city == "kohat"){

        apiRes = {
            "city": city,
            "temperature": 45,
            "humidity": 30,
            "wind": "50 km/h",
            "min": 30,
            "max": 35,
            "feelslike": 42
        }

    }else if (city == "mardan"){

        apiRes = {
            "city": city,
            "temperature": 44,
            "humidity": 32,
            "wind": "40 km/h",
            "min": 31,
            "max": 35,
            "feelslike": 46
        }

    }else if (city == "abbottabad"){

        apiRes = {
            "city": city,
            "temperature": 45,
            "humidity": 28,
            "wind": "45 km/h",
            "min": 36,
            "max": 40,
            "feelslike": 43
        }

    }else if (city == "quetta"){

        apiRes = {
            "city": city,
            "temperature": 43,
            "humidity": 35,
            "wind": "30 km/h",
            "min": 31,
            "max": 35,
            "feelslike": 47
        }

    }else if (city == "gwadar"){

        apiRes = {
            "city": city,
            "temperature": 44,
            "humidity": 31,
            "wind": "43 km/h",
            "min": 35,
            "max": 45,
            "feelslike": 43
        }

    }else if (city == "khuzdar"){

        apiRes = {
            "city": city,
            "temperature": 45,
            "humidity": 30,
            "wind": "40 km/h",
            "min": 32,
            "max": 35,
            "feelslike": 45
        }

    }else if (city == "lasbela"){

        apiRes = {
            "city": city,
            "temperature": 43,
            "humidity": 29,
            "wind": "45 km/h",
            "min": 36,
            "max": 340,
            "feelslike": 42
        }

    }else if (city == "chaman"){

        apiRes = {
            "city": city,
            "temperature": 46,
            "humidity": 28,
            "wind": "29 km/h",
            "min": 32,
            "max": 40,
            "feelslike": 40
        }
    }else if (city == "kalat"){

        apiRes = {
            "city": city,
            "temperature": 45,
            "humidity": 30,
            "wind": "40 km/h",
            "min": 32,
            "max": 35,
            "feelslike": 45
        }

    }else if (city == "kashmir"){

        apiRes = {
            "city": city,
            "temperature": 39,
            "humidity": 30,
            "wind": "55 km/h",
            "min": 32,
            "max": 40,
            "feelslike": 42 
        }
    }

    res.send(apiRes)

})


app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)

})
