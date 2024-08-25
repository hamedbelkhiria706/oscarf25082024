console.log("hello from world");
const fs = require("fs");

fs.writeFile("msg.txt", "Hello from Node", (e) => {
  if (e) {
    console.log("error writing file");
  } else {
    console.log("the file has been saved");
  }
});

fs.readFile("msg.txt", "utf-8", (e, d) => {
  if (e) {
    console.log("error reading file");
  } else {
    console.log("the file has been readen");
    console.log(d);
  }
});
