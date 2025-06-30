import OpenAI from 'openai';
import fs from 'fs';
import 'dotenv/config';

// Inicializa o cliente da OpenAI
const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY
});

export async function transcribe(audioPath, videoInfo = null) {
    console.log('🎤 Transcrevendo áudio com OpenAI Whisper...');
    
    // Verifica se a chave da OpenAI está configurada
    if (!process.env.OPENAI_API_KEY || process.env.OPENAI_API_KEY.includes('sua-chave-aqui')) {
        throw new Error('❌ Chave da OpenAI não configurada. Configure no arquivo .env');
    }

    try {
        // Verifica se o arquivo de áudio existe
        if (!fs.existsSync(audioPath)) {
            throw new Error('Arquivo de áudio não encontrado');
        }

        // Usa a API Whisper da OpenAI para transcrever o áudio
        const transcription = await openai.audio.transcriptions.create({
            file: fs.createReadStream(audioPath),
            model: 'whisper-1',
            language: 'pt', // Português
            response_format: 'text'
        });

        console.log('✅ Transcrição criada com sucesso usando OpenAI Whisper');
        console.log('📝 Prévia da transcrição:', transcription.substring(0, 100) + '...');
        
        return transcription;

    } catch (error) {
        console.error('❌ Erro ao usar OpenAI Whisper:', error.message);
        throw new Error(`Erro na transcrição: ${error.message}`);
    }
}