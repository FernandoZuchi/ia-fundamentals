import cors from 'cors';
import express, { response } from 'express';

import { download } from './download.js';

const app = express();
app.use(cors());


app.get('/summary/:id', (request, response) => {
    download(request.params.id);
});

app.listen(3333, () => {
    console.log('Server is running on http://localhost:3333');
})
