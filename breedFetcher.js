const request = require("request");
const fetchBreedDescription = function (breedName, callback) {
  request(
    `https://api.thecatapi.com/v1/breeds/search?q=${breedName}`,
    (error, response, body) => {
      if (error) {
        callback(error, null);
        return;
      }
      const data = JSON.parse(body); //parse page data into JSON
      if (data.length === 0) {
        return console.log(`Error : Breed "${breedName}" not found.`);
      } else {
        const desc = data[0].description;
        callback(null, desc);
      }
    }
  );
};

module.exports = { fetchBreedDescription };
