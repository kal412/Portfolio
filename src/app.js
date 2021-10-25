const express = require("express");
const path = require("path");
require("./models/database");
const routes = require("./routes/landingRoutes");

const app = express();
const port = process.env.PORT || 3000;

//setting the path
const staticpath = path.join(__dirname, "../public");

//middleware
app.use(
  "/css",
  express.static(path.join(__dirname, "../node_modules/bootstrap/dist/css"))
);
app.use(
  "/js",
  express.static(path.join(__dirname, "../node_modules/bootstrap/dist/js"))
);

app.use(express.static(staticpath));

//templating engine
app.set("view engine", "ejs");

//routing
app.get("/", (req, res) => {
  res.render("index");
});
app.use("/", routes);

//server create
app.listen(port, () => {
  console.log(`Server is running at port no ${port}`);
});
