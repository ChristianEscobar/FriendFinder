const friends = require("../data/friends");

module.exports = (app) => {
	app.get("/api/friends", (req, res) => {
		res.json(friends);
	});

	app.post("/api/friends", (req, res) => {
		let lowestDiffObj = null;
		let lowestDiffFound = -1;

		const currentUserScoreTotal = req.body.scores.reduce(sumItems);

		for(let i=0; i<friends.length; i++) {
			const currentFriendScoreTotal = friends[i].scores.reduce(sumItems);

			const currentDiffValue = Math.abs(currentUserScoreTotal - currentFriendScoreTotal); 

			if(lowestDiffFound === -1 || currentDiffValue < lowestDiffFound) {
				lowestDiffFound = currentDiffValue;

				lowestDiffObj = friends[i];
			}
		}

		// Add the current user to storage
		friends.push(req.body);

		// respond with a friend object
		res.json(lowestDiffObj);

		function sumItems(total, num) {
			return parseInt(total) + parseInt(num);
		}
	});
}

