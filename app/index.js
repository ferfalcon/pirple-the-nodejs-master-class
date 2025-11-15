const http = require('http');
const url = require('url');

const server = http.createServer((req,res) => {

  const parsedUrl = url.parse(req.url, true);

  const path = parsedUrl.pathname;
  const trimmedPath = path.replace(/^\/+|\/+$/g, '');

  const queryStringObject = parsedUrl.query;

  const method = req.method.toLowerCase();

  console.log(
    `Request received:\n` +
    `path: '${trimmedPath}'\n` +
    `method: '${method}'`
  );

  if (Object.keys(queryStringObject).length) {
    console.log(`Query string parameters:`);
    Object.keys(queryStringObject).forEach(key => console.log(`${key}: ${queryStringObject[key]}`));
  }

  res.end('Hi there!\n');
});

server.listen(3000, () => {
  console.log("Server listening in port 3000");
})