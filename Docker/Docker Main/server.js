const express = require('express');
const app = express();
const PORT = 3000;

// Serve static files from "public" folder
app.use(express.static('public'));

app.get('/', (req, res) => {
  res.send("Docker Node App Running 🚀");
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});

