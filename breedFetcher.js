const args = process.argv.slice(2);
const request = require("request");
let breedInput = args[0];

request(
  `https://api.thecatapi.com/v1/breeds/search?q=${breedInput}`,
  (error, response, body) => {
    console.log("error:", error); // Print the error if one occurred
    console.log("statusCode:", response && response.statusCode); // Print the response status code if a response was received
    const data = JSON.parse(body); //parse page data into JSON
    if (data.length === 0) {
      return console.log(`Error : Breed "${breedInput}" not found.`);
    }else {
      console.log(data[0].description);
    }
  }
);
