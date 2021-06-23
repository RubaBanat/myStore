const express = require('express');
require('dotenv').config();

const productsRouter = require('./routers/routes/productsRoute')
const app = express();

app.use(express.json());
app.use('/products' , productsRouter);

const PORT = process.env.PORT || 3030;

app.listen(PORT, () => {
	console.log(`Listening On http://localhost:${PORT}`);
});
