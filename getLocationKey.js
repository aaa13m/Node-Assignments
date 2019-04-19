var chalk = require('chalk');
const {getTemperature} = require('./getTemperature')
const {getNews} = require('./getNews')
const request = require('request')
const title = chalk.green.bold;
const description = chalk.blue.bold.italic;

const getLocationKey = (city) =>{
    console.log("In Location", city)
    const options = {
        url: "http://dataservice.accuweather.com/locations/v1/cities/search?apikey=bkKBmJNzyNBgexCDL30pEAePaNADza1E&q="+city,
        headers: {
            Accept: "application/json",
            app_key: "bkKBmJNzyNBgexCDL30pEAePaNADza1E",
        }
    }
    const callback = (error, response) => {
        console.log("error", error);
        console.log("status code:", response && response.body);
        parsedData = JSON.parse(response.body);
        //console.log("response", parsedData[0]);
        cityInfo=parsedData[0];
        console.log(title("User's Location:"), description(cityInfo.LocalizedName))
        console.log(title("Country:"), description(cityInfo.Country.LocalizedName))
        console.log(title("Region:"), description(cityInfo.Region.LocalizedName))
        locationKey = parsedData[0].Key;
        // getNews(city);
        getTemperature(locationKey);
    
    }
    request(options, callback)
}
module.exports={
    getLocationKey,
}