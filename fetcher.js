const request = require("request");
const fs = require("fs");

const args = process.argv.slice(2);
// const content = 'Some content!';
//download the html at a URL to a local path on my computer
const fetcher = (URL, localFilePath) => {
  // use the URL to make an http request and wait for the response.
  request(URL, (error, response, body) => {
    console.log("error:", error); // Print the error if one occurred
    console.log("statusCode:", response && response.statusCode); // Print the response status code if a response was received
    console.log("body:", body); // Print the HTML for the Google homepage.
    // after the http request is complete write the response to a file in your local filesystem.
    fs.writeFile(localFilePath, body, (err) => {
      if (err) {
        console.error(err);
      }
      console.log(
        //write a message saying what you have done
        `Dowloaded and saved ${body.length} bytes to ${localFilePath}`
      );
    });
  });
};

fetcher(args[0], args[1]);
