const fs = require('fs');


function readFileContent(filePath) {
    // Implementation

    fs.readFile(filePath,  (err, contents) => {
        if (err) console.error(err);
        else console.log("File content \n"+ contents);
    })
    
    
}

readFileContent("./question1/temporary_file.text")