const http = require('http');
const url = require('url');
const StringDecoder = require('string_decoder').StringDecoder;

const server = http.createServer((req,res) => {

  const parsedUrl = url.parse(req.url, true);

  const path = parsedUrl.pathname;
  const trimmedPath = path.replace(/^\/+|\/+$/g, '');

  const queryStringObject = parsedUrl.query;

  const method = req.method.toLowerCase();

  const headers = req.headers;

  const decoder = new StringDecoder('utf-8');
  let buffer = '';
  req.on('data', data => {
    buffer += decoder.write(data);
  });
  req.on('end', () => {
    buffer += decoder.end();
  
    console.log(
      `Request received:\n` +
      `path: '${trimmedPath}'\n` +
      `method: '${method}'`
    );
  
    if (Object.keys(queryStringObject).length) {
      console.log(`Query string parameters:`);
      Object.keys(queryStringObject).forEach(key => console.log(`${key}: ${queryStringObject[key]}`));
    }
  
    if (Object.keys(headers).length) {
      console.log(`Headers:`);
      Object.keys(headers).forEach(key => console.log(`${key}: ${headers[key]}`));
    }

    console.log(buffer);
  })
  

  res.end('Hi there!\n');
});

server.listen(3000, () => {
  console.log("Server listening in port 3000");
})