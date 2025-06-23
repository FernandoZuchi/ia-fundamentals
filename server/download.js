// Importa a biblioteca ytdl-core para fazer download de vídeos do YouTube
import ytdl from '@distube/ytdl-core';
// Importa o módulo fs (file system) para manipular arquivos e pastas
import fs from 'fs';

// Função que faz o download do áudio de um vídeo do YouTube
export const download = (videoId) => {
    // Constrói a URL completa do vídeo do YouTube usando o ID fornecido
    const videoUrl = `https://www.youtube.com/watch?v=${videoId}`;
    console.log("Realizando o download do vídeo:", videoId);

    // Retorna uma Promise para permitir operações assíncronas
    return new Promise((resolve, reject) => {
        // Verifica se a pasta 'temp' existe, se não, cria ela
        if (!fs.existsSync('./temp')) {
            fs.mkdirSync('./temp');
        }

        // Inicia o download do vídeo com configurações específicas
        ytdl(videoUrl, {
            quality: 'lowestaudio',  // Escolhe a menor qualidade de áudio (menor tamanho)
            filter: 'audioonly'      // Filtra apenas o áudio, sem vídeo
        })
        // Evento disparado quando as informações do vídeo são obtidas
        .on("info", (info) => {
            console.log("Título:", info.videoDetails.title);
            const seconds = info.videoDetails.lengthSeconds;
            console.log("Duração em segundos:", seconds);
        })
        // Evento disparado se houver erro durante o download
        .on("error", (error) => {
            console.error("Erro no download:", error.message);
            reject(error); // Rejeita a Promise em caso de erro
        })
        // Direciona o stream de áudio para um arquivo na pasta temp
        .pipe(fs.createWriteStream(`./temp/${videoId}.mp3`))
        // Evento disparado quando o download e salvamento são concluídos
        .on("finish", () => {
            console.log("Download concluído!");
            resolve(`./temp/${videoId}.mp3`); // Resolve a Promise com o caminho do arquivo
        })
        // Evento disparado se houver erro ao salvar o arquivo
        .on("error", (error) => {
            console.error("Erro ao salvar arquivo:", error.message);
            reject(error); // Rejeita a Promise em caso de erro
        });
    });
}