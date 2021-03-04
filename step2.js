const fs = require('fs');
const process = require('process');
const axios = require('axios');

function cat(path) {
	fs.readFile(path, 'utf8', function (err, data) {
		if (err) {
			console.error(err);
			process.exit(1);
		} else {
			console.log(data);
		}
	});
}

async function webCat(url) {
	await axios
		.get(url)
		.then(function (resp) {
			console.log(resp.data);
		})
		.catch(err => console.log(err));
}

let path = process.argv[2];

if (path.slice(0, 4) === 'http') {
	webCat(path);
} else {
	cat(path);
}
