// Importa o middleware CORS para permitir requisições de diferentes origens
import cors from 'cors';
// Importa o framework Express para criar o servidor web
import express, { response } from 'express';

// Importa a função de download que criamos
import { download } from './download.js';
import { transcribe } from './transcribe.js';
import { summarize } from './summarize.js';

// Cria uma instância do aplicativo Express
const app = express();
// Habilita CORS para todas as rotas (permite requisições do frontend)
app.use(cors());

// Define uma rota GET que recebe o ID do vídeo como parâmetro na URL
app.get('/summary/:id', async (request, response) => {
    try {
        console.log('🎬 Iniciando processamento do vídeo:', request.params.id);
        
        // Chama a função download passando o ID do vídeo obtido da URL
        const downloadResult = await download(request.params.id);
        const { audioPath, videoInfo } = downloadResult;

        // Transcreve o áudio usando OpenAI Whisper
        const transcription = await transcribe(audioPath, videoInfo);
        
        // Resume o conteúdo usando OpenAI GPT
        const summary = await summarize(transcription);

        console.log('✅ Processamento concluído com sucesso!');
        
        response.json({
            result: summary,
            videoTitle: videoInfo?.videoDetails?.title || 'Título não disponível'
        });
    } catch (error) {
        console.error('❌ Erro ao processar vídeo:', error.message);
        
        // Retorna erro específico baseado no tipo
        if (error.message.includes('Chave da OpenAI')) {
            response.status(500).json({
                error: 'Configuração necessária: Chave da OpenAI não encontrada no arquivo .env'
            });
        } else if (error.message.includes('download')) {
            response.status(500).json({
                error: 'Erro ao baixar o vídeo. Verifique se o link é válido.'
            });
        } else {
            response.status(500).json({
                error: 'Erro no processamento: ' + error.message
            });
        }
    }
});

// Inicia o servidor na porta 3333
app.listen(3333, () => {
    console.log('Server is running on http://localhost:3333');
})
