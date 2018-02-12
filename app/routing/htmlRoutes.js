module.exports = (app) => {
	app.get("/", (req, res) => {
		console.log("catch all route.");
	});

	app.get("/survey", (req, res) => {
		console.log("survey route");
	});
}