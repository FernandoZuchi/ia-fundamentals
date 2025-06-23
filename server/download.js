import ytdl from '@distube/ytdl-core';
import fs from 'fs';

export const download = (videoId) => {
    const videoUrl = `https://www.youtube.com/watch?v=${videoId}`;
    console.log("Realizando o download do vídeo:", videoId);

    return new Promise((resolve, reject) => {
        if (!fs.existsSync('./temp')) {
            fs.mkdirSync('./temp');
        }

        ytdl(videoUrl, {
            quality: 'lowestaudio',
            filter: 'audioonly'
        })
        .on("info", (info) => {
            console.log("Título:", info.videoDetails.title);
            const seconds = info.videoDetails.lengthSeconds;
            console.log("Duração em segundos:", seconds);
        })
        .on("error", (error) => {
            console.error("Erro no download:", error.message);
            reject(error);
        })
        .pipe(fs.createWriteStream(`./temp/${videoId}.mp3`))
        .on("finish", () => {
            console.log("Download concluído!");
            resolve(`./temp/${videoId}.mp3`);
        })
        .on("error", (error) => {
            console.error("Erro ao salvar arquivo:", error.message);
            reject(error);
        });
    });
}