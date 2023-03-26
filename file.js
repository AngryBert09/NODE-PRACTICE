const fs = require("fs");

fs.writeFile("./Prac/text.txt", "Hello Albert", () => {
  console.log("WRITTEN OVERIDE");
});

fs.readFile("./Prac/text.txt", (err, data) => {
  if (err) {
    console.log("ERROR");
  }
});
