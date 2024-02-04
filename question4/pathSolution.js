const path = require('path');	

function resolvePath(relativePath) {
    // Implementation
    

    const location = path.resolve(relativePath);

    console.log("\nResolved Path: ", location, "\n");
}

resolvePath("Question4.md");