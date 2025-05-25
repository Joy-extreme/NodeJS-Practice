const http = require("http");

const server = http.createServer((req,res)=>{
 console.log(req.url, req.method, req.headers);
 if(req.url ==="/")
 {
  res.setHeader("Content-type", "text/html");
  res.write("<html>");
  res.write("<head><title>Website Making</title></head>");
  res.write("<body>");
  res.write("<a href='/home'>Home</a><br>")
  res.write("<a href='/man'>Man</a><br>")
  res.write("<a href='/woman'>Woman</a>")
  res.write("</body>");
  res.write("</html>");
  return res.end();
 }
 else if(req.url ==="/home")
  {
    res.setHeader("Content-type", "text/html");
    res.write("<html>");
    res.write("<head><title>Website Making</title></head>");
    res.write("<body>");
    res.write("<h1>Home</h1>")
    res.write("</body>");
    res.write("</html>");
    return res.end();
  }
  else if(req.url ==="/man")
  {
    res.setHeader("Content-type", "text/html");
    res.write("<html>");
    res.write("<head><title>Website Making</title></head>");
    res.write("<body>");
    res.write("<h1>Man</h1>")
    res.write("</body>");
    res.write("</html>");
    return res.end();
  }
  else if(req.url ==="/woman")
  {
    res.setHeader("Content-type", "text/html");
    res.write("<html>");
    res.write("<head><title>Website Making</title></head>");
    res.write("<body>");
    res.write("<h1>Woman</h1>")
    res.write("</body>");
    res.write("</html>");
    return res.end();
  }
    res.setHeader("Content-type", "text/html");
    res.write("<html>");
    res.write("<head><title>Website Making</title></head>");
    res.write("<body>");
    res.write(`<h1>${req.url} is not found</h1>`)
    res.write("</body>");
    res.write("</html>");
    return res.end();
});

const port = 3000;

server.listen(port, (err)=>{
 if(err)
  console.log("error in server");
 else
 {
  console.log(`Server is running successfully in http://localhost:${port}`);
 }
});