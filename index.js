const express = require('express');
const app = express();

//Get route returning my name
app.get('/', (req, res) => {
	res.json({
		versio: "1.0.0",
		description: "Container Nginx e NodeJS",
		maintainer: "Pedro Trogo<p.trogo@gmail.com>"
	});
});

//Create a express server listening on port 3000
app.listen(3000, () => {
	console.log('Application running on port 3000 - http://localhost:3000');
});

