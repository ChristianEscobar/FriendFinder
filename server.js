const express = require("express");
const bodyParser = require("body-parser");
const apiRoutes = require("./app/routing/apiRoutes");
const htmlRoutes = require("./app/routing/htmlRoutes");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

apiRoutes(app);
htmlRoutes(app);

app.listen(PORT, () => {
	console.log("Server started, listening on port", PORT);
})
