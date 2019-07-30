require("dotenv").config();
const express = require("express");
const massive = require("massive");
const app = express();
const controller = require('./controller')

const { SERVER_PORT, CONNECTION_STRING } = process.env;

app.use(express.json());
app.get('/api/planes',controller.getPlanes)



massive(CONNECTION_STRING).then(dbInstance => {
  app.set("db", dbInstance);
  // dbInstance
  //   .new_planes()
  //   .then(planes => console.log(planes))
  //   .catch(err => console.log(err));

  dbInstance.get_planes()
  .then(planes => console.log(planes))
  .catch(err => console.log(err))
});
console.log(`Server listening on port ${SERVER_PORT}`);
app.listen(SERVER_PORT, () => {});
