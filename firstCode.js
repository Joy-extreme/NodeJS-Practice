const fileWriting= require('fs');

fileWriting.writeFile("Output.txt","This is my first code in NodeJS", (err)=>{
 if(err)
   console.log("Error is found.");
 else 
  console.log("File is written succesfully.");
});