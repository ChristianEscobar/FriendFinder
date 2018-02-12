module.exports = (app) => {
	app.get("/api/friends", (req, res) => {
		console.log("api/friends GET");
	});

	app.post("/api/friends", (req, res) => {
		console.log("api/friends POST");
	});
}