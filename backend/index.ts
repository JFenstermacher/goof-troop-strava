import {env} from 'node:process';
import express from 'express';

const app = express();
const port = env.PORT ?? 8080;

app.get('/', (_, response) => {
  response.send('Hello world!');
});

app.listen(port, () => {
  console.log(`Server started at http://localhost:${port}`);
});
