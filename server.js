const express = require("express");
const bodyParser = require("body-parser");
const apiRoutes = require("./app/routing/apiRoutes");
const htmlRoutes = require("./app/routing/htmlRoutes");

const app = express();
const PORT = process.env.PORT || 3000;

apiRoutes(app);
htmlRoutes(app);

app.listen(PORT, () => {
	console.log("Server started, listening on port", PORT);
})
