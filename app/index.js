const http = require('http');
const url = require('url');

const server = http.createServer((req,res) => {

  const parseUrl = url.parse(req.url, true);

  const path = parseUrl.pathname;
  const trimmedPath = path.replace(/^\/+|\/+$/g, '');

  const method = req.method.toLowerCase();

  console.log(
    `Request received on path: '${trimmedPath}' with the method '${method}'`
  );

  res.end('Hi there!\n');
});

server.listen(3000, () => {
  console.log("Server listening in port 3000");
})