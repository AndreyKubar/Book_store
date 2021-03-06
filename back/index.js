require("dotenv").config();
const express = require("express");
const db = require("./models");
const cors = require("cors");
const fileUpload = require("express-fileupload");
const bodyParser = require("body-parser");
const router = require("./routes/index");
const errorHandler = require("./middleware/ErrorHandlingMiddleware");
const path = require("path");

const PORT = process.env.PORT || 4000;
const app = express();

app.use(cors());
app.use(express.json());
app.use(express.static(path.resolve(__dirname, "static")));
app.use(fileUpload({}));
app.use("/api", router);

app.use(errorHandler);

const start = async () => {
  try {
    await db.sequelize.authenticate(); 
    await db.sequelize.sync();
    app.listen(PORT, () => console.log(`Server started ${PORT}`));
  } catch (error) {
    console.log(error);
  }
};

start();