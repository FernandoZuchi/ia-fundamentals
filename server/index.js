// Importa o middleware CORS para permitir requisições de diferentes origens
import cors from 'cors';
// Importa o framework Express para criar o servidor web
import express, { response } from 'express';

// Importa a função de download que criamos
import { download } from './download.js';

// Cria uma instância do aplicativo Express
const app = express();
// Habilita CORS para todas as rotas (permite requisições do frontend)
app.use(cors());

// Define uma rota GET que recebe o ID do vídeo como parâmetro na URL
app.get('/summary/:id', (request, response) => {
    // Chama a função download passando o ID do vídeo obtido da URL
    download(request.params.id);
});

// Inicia o servidor na porta 3333
app.listen(3333, () => {
    console.log('Server is running on http://localhost:3333');
})
