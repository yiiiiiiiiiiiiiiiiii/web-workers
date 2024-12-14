const minimist = require("minimist");
const express = require("express");
const app = express();
const port = 3000;

const argv = minimist(process.argv.slice(2));

app.use(express.static(`${argv.path}`));

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
