const express = require('express');
const path = require('path');
const cors = require('cors');
const favicon = require('serve-favicon');

const routerApi = require('./routes');

const {
	logErrors,
	errorHandler,
	boomErrorHandler,
	ormErrorHandler
} = require('./middlewares/error.handler');

const app = express();

const port = process.env.PORT || 3000;

app.use(express.json());

const whitelist = ['http://localhost:5173'];

const options = {
	origin: (origin, callback) =>
	{
		if (whitelist.includes(origin) || !origin)
		{
			callback(null, true);
		} else
		{
			callback(new Error('no permitido'));
		}
	}
};

app.use(cors(options));

app.use(favicon(path.join(__dirname, 'favicon.ico')));

routerApi(app);

app.use(logErrors);
app.use(ormErrorHandler);
app.use(boomErrorHandler);
app.use(errorHandler);

app.get('/', (req, res) =>
{
	res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(port, () =>
{
	// eslint-disable-next-line no-console
	console.log(`Server running on: http://localhost:${port}`);
});
