const express = require("express");
const viewRoutes = require("./routes/view-routes");
const apiRoutes = require("./routes/api-routes");
const app = express();

const PORT = process.env.PORT || 8080;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));
app.use("/api", apiRoutes);

app.use("/", viewRoutes);

app.listen(PORT, () => {
  console.log(`App listening on http://localhost:${PORT}`);
});
