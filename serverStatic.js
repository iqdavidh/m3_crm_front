'use strict';
/**
 * Created by David on 18/07/2019.
 */

const express = require('express');
const path = require('path');
const app = express();

app.use(express.static('build'));

app.get("/debug", function (req, res) {
	res.send('Im static');
});

app.get('/*', function(req, res) {
	res.sendFile(path.join(__dirname, 'build/index.html'), function(err) {
		if (err) {
			res.status(500).send(err)
		}
	})
});


const port = 4004;
app.listen(port, () => console.log(`static server running on port ${port}!`));
