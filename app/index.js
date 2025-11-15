const http = require('http');
const url = require('url');

const server = http.createServer((req,res) => {

  const parseUrl = url.parse(req.url, true);
  // console.log(parseUrl);
  const path = parseUrl.pathname;
  // console.log(path);
  const trimmedPath = path.replace(/^\/+|\/+$/g, '');
  console.log(`Request received on path: ${trimmedPath}`);

  res.end('Hi there!\n');
});

server.listen(3000, () => {
  console.log("Server listening in port 3000");
})