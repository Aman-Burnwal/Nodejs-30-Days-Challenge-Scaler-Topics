const fs = require('fs');


function writeToFile(filePath, content) {
    

    
    if (!fs.existsSync(filePath)) {
        console.log("File does not exist");
        return
    }
   

    fs.writeFileSync(filePath , content);
    console.log("" + fs.readFileSync(filePath));
}

writeToFile("./question2/tests/test-file1.txt", "Hello how are you?");