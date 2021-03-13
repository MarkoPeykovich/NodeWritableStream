const {createReadStream, createWriteStream} = require('fs'); //destructuring assignment 

const rStream = createReadStream('./greypass003.mp4');
const wStream = createWriteStream('./copy_greypass.mp4');

rStream.on('data', (chunk) => {
	wStream.write(chunk);
});

rStream.on('error', (error) => { 
	console.log('error: ', error.message);
});

rStream.on('end', () => { 
	wStream.end();
});

wStream.on('finish', () => {
	console.log('Writable stream is over! Video is copied!');
});
