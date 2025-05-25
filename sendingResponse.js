const http = require('http');

const server = http.createServer((req, res)=>{
 console.log(req.url, req.method, req.headers);
 if(req.url == "/")
 {
  res.setHeader("Content-type", "text/html");
  res.write("<html>");
  res.write("<head><title>NodeJS Practice</title></head>");
  res.write("<body><h1>Welcome to home</h1></body>");
  res.write("</html>");
  return res.end();
   
 }
 else if(req.url == "/settings")
 {
  res.setHeader("Content-type", "text/html");
  res.write("<html>");
  res.write("<head><title>NodeJS Practice</title></head>");
  res.write("<body><h1>Welcome to settings</h1></body>");
  res.write("</html>");
  return res.end();
 }
 res.setHeader("Content-type", "text/html");
 res.write("<html>");
 res.write("<head><title>NodeJs Practice</title></head>");
 res.write(`<body><h1>Welcome to ${req.url}</h1></body>`);
 res.write("</html>");
 res.end();
});

const port= 3000;
server.listen(port, ()=>{
 console.log(`Server is running successfully at http://localhost:${port}`);
});
