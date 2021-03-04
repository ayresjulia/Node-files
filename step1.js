const fs = require('fs');
const process = require('process');

function cat(path) {
	fs.readFile(path, 'utf8', function (err, data) {
		if (err) {
			console.error(err);
			process.kill(1);
		} else {
			console.log(data);
		}
	});
}

cat(process.argv[2]); // NOTE: 2 means opening second file (one.txt)
