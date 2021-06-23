const express = require('express');
require('dotenv').config();
require('./database/database');

const productsRouter = require('./routers/routes/productsRoute');
const cartRouter = require('./routers/routes/cartRoute');

const app = express();

app.use(express.json());

app.use('/products', productsRouter);
app.use('/cart', cartRouter);

const PORT = process.env.PORT || 3030;

app.listen(PORT, () => {
	console.log(`Listening On http://localhost:${PORT}`);
});
