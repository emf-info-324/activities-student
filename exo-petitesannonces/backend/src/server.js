/**
 * Endpoint principal de l'application.
 *
 * @author Les enseignants EMF du module 324
 * @version 1.0
 */

const config = require("./config/config");
const port = config.port || 3000;
const cors = require("cors");
const bodyParser = require("body-parser");

const annoncesRoutes = require("./routes/annonceRoutes");

const express = require("express");
const app = express();

app.use(cors());
app.use(bodyParser.json());

app.use("/annonces", annoncesRoutes);



app.listen(port, "0.0.0.0", () => {
  console.log(`Server is running on port ${port}`);
});
