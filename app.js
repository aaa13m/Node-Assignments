var request = require('request-promise');
const {getNews} = require('./getNews');
const {getLocationKey} = require('./getLocationKey');

var city = process.argv[2];

console.log(city);
var parsedData;
if(!city){
    const options = {
        url: 'https://api.ipgeolocation.io/ipgeo?apiKey=8a839e639ed743a9aa32f691f8994d4f',
        headers: {
            Accept: "application/json",
            app_key: "8a839e639ed743a9aa32f691f8994d4f",
        }
    }

    const callback = (error, response) => {
        // console.log("error", error);
        // console.log("status code:", response && response.body);
        
         parsedData=JSON.parse(response.body);
        //console.log(parsedData.city);
         locationInfo = {
            city :parsedData.city,
            country :parsedData.country_name,
            continent : parsedData.continent_name,
            countryCode :  parsedData.country_code2,
        }
        city=parsedData.city;
        //console.log("city", locationInfo)
        
        getLocationKey(city); //get Location
        getNews(locationInfo.country) // get Headlines
    }

    request(options, callback)
    
}
else 
getLocationKey(city);

