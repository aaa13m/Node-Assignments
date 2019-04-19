var chalk = require('chalk');
const request = require('request')
const title = chalk.green.bold;
const description = chalk.blue.bold.italic;

const getTemperature = (locationKey) =>{
 console.log(chalk.gray.bold.underline("Temperature Today:"));
 const options = {
    url: "http://dataservice.accuweather.com/currentconditions/v1/"+locationKey+"?apikey=bkKBmJNzyNBgexCDL30pEAePaNADza1E",
    headers: {
        Accept: "application/json",
        app_key: "bkKBmJNzyNBgexCDL30pEAePaNADza1E",
    }
}
const callback = (error, response) => {
    //console.log("error", error);
    //console.log("status code:", response && response.body);
    parsedData = JSON.parse(response.body);
    //console.log("response", parsedData);
    console.log(title("Weather Today: "), description(parsedData[0].WeatherText))
    console.log(title("Temperature In Celsius:"), description(parsedData[0].Temperature.Metric.Value))
        console.log(title("Temperature In Fahrenheit:"), description(parsedData[0].Temperature.Imperial.Value))
}
request(options, callback)
}
module.exports = {
    getTemperature,
}