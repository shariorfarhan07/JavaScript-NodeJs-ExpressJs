const fs = require('fs');
function test(err, data) {
    if (err) {
        console.error("Error reading file:", err);
        return;
    }
    console.log("File content:", data);
}



fs.readFile('example.txt', 'utf8',test);



