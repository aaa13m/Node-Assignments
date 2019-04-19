var chalk = require('chalk');
const request = require('request')
const title = chalk.green.bold;
const description = chalk.blue.bold.italic;


const getNews = (cityinfo) => {
   

    const options = {
        url: 'https://newsapi.org/v2/top-headlines?q='+cityinfo+'&apiKey=559d3dade90d436da39792497a16721c',
        headers: {
            Accept: "application/json",
            app_key: "559d3dade90d436da39792497a16721c",
        }
    }

    const callback = (error, response) => {
        //console.log("error", error);
        //console.log("status code:", response && response.statuscode);
        parsedNews = JSON.parse(response.body)
        //console.log("response", response && response.body)
        console.log(chalk.gray.bold.underline("Headlines:"))
        newsArray = parsedNews.articles.map(news =>{
            
            console.log(title("News:", news.title));
            console.log(description("Description:", news.description))
            }
        )
           
    }
    request(options, callback)

}
module.exports = {
    getNews,
}