const express = require("express")
const path = require("path")
const app = express()

app.use(express.static(path.join(__dirname, 'build')))

// Handle React routing, return all requests to React app
app.get('*', function (req, res) {
    res.sendFile(path.join(__dirname, 'build', 'index.html'));
});
  
app.listen(8080, () => {
    console.log(`Server is running on port ${8080}`);
});