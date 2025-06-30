import { server } from "./server.js";

const form = document.querySelector("#form");
const input = document.querySelector("#url");
const content = document.querySelector("#content");

form.addEventListener("submit", async (e) => {
  e.preventDefault();

  const videoURL = input.value;

  if (!videoURL.includes("shorts")) {
    content.textContent = "❌ Esse vídeo não parece ser um YouTube Shorts.";
    content.className = "error";
    return;
  }

  const [_, params] = videoURL.split("/shorts/");
  const [videoId] = params.split("?si");

  content.textContent = "🎬 Baixando vídeo... 🎤 Transcrevendo com IA... 🧠 Resumindo...";
  content.className = "loading";

  try {
    const response = await server.get("/summary/" + videoId);
    
    // Exibe o título do vídeo e o resumo
    const title = response.data.videoTitle || "Vídeo";
    const summary = response.data.result;
    
    content.innerHTML = `
      <strong>📹 ${title}</strong><br><br>
      <strong>📝 Resumo:</strong> ${summary}
    `;
    content.className = "";
    
    console.log("✅ Resumo criado com IA:", summary);
    
  } catch (error) {
    console.error("❌ Erro:", error);
    
    let errorMessage = "Erro ao processar o vídeo.";
    
    if (error.response?.data?.error) {
      errorMessage = error.response.data.error;
    }
    
    content.textContent = `❌ ${errorMessage}`;
    content.className = "error";
  }
});
