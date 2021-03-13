# NodeWritableStream

Node.js video copy via writable stream

This is a simple making of a video copy ('./greypass003.mp4') through chunks from the readable stream (rStream) to the writable stream 
(wStream). The events used are 'data', 'error', 'end' (rStream) and 'finish' (wStream).
