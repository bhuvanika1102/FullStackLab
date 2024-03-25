var fs = require("fs");
fs.readFile("5_fin.txt", "utf8", function (err, data) {
  const inputString = data;
  const modifiedString = inputString.replace(/a{2,}/g, "b");
  console.log("Original String:", inputString);
  console.log("Modified String:\n", modifiedString);
});
