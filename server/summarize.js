import OpenAI from 'openai';
import 'dotenv/config';

// Inicializa o cliente da OpenAI
const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY
});

export async function summarize(text) {
    console.log('🧠 Criando resumo com OpenAI GPT...');
    
    // Verifica se a chave da OpenAI está configurada
    if (!process.env.OPENAI_API_KEY || process.env.OPENAI_API_KEY.includes('sua-chave-aqui')) {
        throw new Error('❌ Chave da OpenAI não configurada. Configure no arquivo .env');
    }

    try {
        // Usa a API do OpenAI para fazer um resumo real
        const completion = await openai.chat.completions.create({
            model: "gpt-3.5-turbo",
            messages: [
                {
                    role: "system",
                    content: "Você é um especialista em resumir conteúdo de vídeos do YouTube Shorts. Crie resumos concisos, informativos e diretos ao ponto em português brasileiro. O resumo deve ter no máximo 2 frases e capturar a essência do conteúdo."
                },
                {
                    role: "user",
                    content: `Resuma este conteúdo de vídeo em 1-2 frases concisas:\n\n${text}`
                }
            ],
            max_tokens: 100,
            temperature: 0.5
        });

        const summary = completion.choices[0].message.content.trim();
        console.log('✅ Resumo criado com sucesso usando OpenAI GPT');
        return summary;

    } catch (error) {
        console.error('❌ Erro ao usar OpenAI:', error.message);
        throw new Error(`Erro na IA: ${error.message}`);
    }
}