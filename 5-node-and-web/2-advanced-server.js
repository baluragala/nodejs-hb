const http = require("http");

function requestHandler(request, response) {
  switch (request.url) {
    case "/":
      response.writeHead(200, { "Content-Type": "text/html" });
      response.write("<!DOCTYPE html>");
      response.write("<html>");
      response.write("<head>");
      response.write("<title>Welcome to Node</title>");
      response.write("</head>");
      response.write("<body>");
      response.write("Welcome to Node!!");
      response.write("</body>");
      response.write("</html>");
      response.end();
      break;
    case "/home":
      response.writeHead(200, { "Content-Type": "text/html" });
      response.write("<!DOCTYPE html>");
      response.write("<html>");
      response.write("<head>");
      response.write("<title>Welcome to Node</title>");
      response.write("</head>");
      response.write("<body>");
      response.write("Welcome to Home!!");
      response.write("</body>");
      response.write("</html>");
      response.end();
      break;
    case "/about":
      response.writeHead(200, { "Content-Type": "text/html" });
      response.write("<!DOCTYPE html>");
      response.write("<html>");
      response.write("<head>");
      response.write("<title>Welcome to Node</title>");
      response.write("</head>");
      response.write("<body>");
      response.write("Welcome to About!!");
      response.write("</body>");
      response.write("</html>");
      response.end();
      break;
    default:
      response.writeHead(404, { "Content-Type": "text/html" });
      response.write("<!DOCTYPE html>");
      response.write("<html>");
      response.write("<head>");
      response.write("<title>Welcome to Node</title>");
      response.write("</head>");
      response.write("<body>");
      response.write("Sorry, we did not find page");
      response.write("</body>");
      response.write("</html>");
      response.end();
  }
}

const server = http.createServer(requestHandler);
server.listen(8000);
