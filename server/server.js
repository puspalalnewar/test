const app = require("./app");
const connectDB = require("./src/db/db");
require("dotenv").config();

connectDB();

const port = process.env.PORT || 8000;

app.listen(port, () => {
  console.log(`Server is running at port : ${port}`);
});
