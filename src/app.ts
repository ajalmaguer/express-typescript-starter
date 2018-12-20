import express, { Request, Response, NextFunction } from 'express';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';
import morganLogger from 'morgan';

// Load environment variables
dotenv.config();

// Create Express Server
const app = express();

// Express configuration
app.set('port', process.env.PORT || 3000);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(morganLogger('dev'));

// Routes
app.get('/', (req: Request, res: Response, next: NextFunction) => {
    res.json({ hello: 'world! sup?' });
});

export default app;
