const express = require('express');
require('dotenv').config();

const app = express();

app.use(express.json());

const PORT = process.env.PORT || 3030;

app.listen(PORT, () => {
	console.log(`Listening On http://localhost:${PORT}`);
});
