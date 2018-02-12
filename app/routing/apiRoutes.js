const friends = require("../data/friends");

module.exports = (app) => {
	app.get("/api/friends", (req, res) => {
		res.json(friends);
	});

	app.post("/api/friends", (req, res) => {
		let currentMatch = null;
		let bestDiffFound = 0;

		for(let i=0; i<friends.length; i++) {
			let currentFriendObj = friends[i];
			// compare scores
			let totalDiffForCurrentFriend = 0;
			for(let j=0; j<req.body.scores.length; j++) {
				totalDiffForCurrentFriend += Math.abs(currentFriendObj.scores[j] - req.body.scores[j]);
			}

			// When an existing friend has been compared, compare the total diff with the best diff so far
			if(currentMatch === null) {
				bestDiffFound = totalDiffForCurrentFriend;

				currentMatch = currentFriendObj;
			} else if(totalDiffForCurrentFriend > bestDiffFound) {
				currentMatch = currentFriendObj;
			}
		}

		friends.push(req.body);

		// respond with a friend object
		res.json(currentMatch);
	});
}

