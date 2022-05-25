import {env} from 'node:process';
import express from 'express';
import { Strava } from './src/strava'

const strava = new Strava();

const app = express();
const port = env.PORT ?? 8080;

app.get('/', (_, response) => {
  response.send(strava.getActivities("Hello World Test!"));
});

app.listen(port, () => {
  console.log(`Server started at http://localhost:${port}`);
});
