const path = require('path');

function checkFileExtension(filePath, expectedExtension) {
    // Implementation

    let acttualExtension = path.extname(filePath);

    expectedExtension == acttualExtension
        ? console.log(`File has the expected extension: ${acttualExtension}`)
        : console.log(`File does not have the expected extension. Expected: ${acttualExtension} Actual: ${expectedExtension}`)
}


checkFileExtension('test-files/file1.txt', '.txt');
// Expected Output: File has the expected extension: .txt

checkFileExtension('test-files/image.png', '.jpg');
// Expected Output: File does not have the expected extension. Expected: .jpg, Actual: .png