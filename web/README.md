# Codi Shorts - Tutorial Completo de Desenvolvimento

Uma aplicação web moderna para resumir vídeos shorts do YouTube usando inteligência artificial.

## 📋 Pré-requisitos

- Node.js (versão 14 ou superior)
- npm ou yarn
- Editor de código (VS Code recomendado)
- Navegador web moderno

## 🚀 Configuração Inicial do Projeto

### Passo 1: Criando a estrutura do projeto

Primeiro, crie a pasta do projeto e inicialize o npm:

```bash
mkdir ia-fundamentals
cd ia-fundamentals
npm init -y
```

### Passo 2: Instalando dependências

Instale o Vite como ferramenta de build:

```bash
npm install --save-dev vite
```

### Passo 3: Configurando o package.json

Edite o `package.json` para incluir as configurações necessárias:

```json
{
  "name": "ia-fundamentals",
  "private": true,
  "version": "0.0.0",
  "type": "module",
  "scripts": {
    "web": "vite"
  }
}
```

**Explicação**: O `"type": "module"` permite usar ES modules, e o script "web" configura o Vite para desenvolvimento.

## 📁 Estrutura de Pastas
Crie a seguinte estrutura de diretórios:

```
ia-fundamentals/
├── index.html
├── package.json
├── public/
│   └── logo.svg
└── web/
    ├── main.js
    └── styles/
        ├── base.css
        ├── app.css
        └── form.css
```

## 🎨 Desenvolvimento da Interface

### Passo 4: Criando o HTML base

Crie o arquivo `index.html` na raiz do projeto:

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <link rel="icon" href="/logo.svg" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Codi Short</title>
  </head>
  <body>
    <div id="app">
      <!-- Conteúdo será adicionado gradualmente -->
    </div>
    <script type="module" src="web/main.js"></script>
  </body>
</html>
```

**Dica**: Comece sempre com a estrutura HTML básica e vá adicionando elementos conforme necessário.

### Passo 5: Adicionando fontes e ícones

No `<head>` do HTML, adicione as fontes do Google e os ícones Phosphor:

```html
<link rel="preconnect" href="https://fonts.googleapis.com" />
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
<link href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100..900;1,100..900&display=swap" rel="stylesheet" />

<link rel="stylesheet" type="text/css" href="https://cdn.jsdelivr.net/npm/@phosphor-icons/web@2.1.1/src/regular/style.css" />
<link rel="stylesheet" type="text/css" href="https://cdn.jsdelivr.net/npm/@phosphor-icons/web@2.1.1/src/fill/style.css" />
```

### Passo 6: Estrutura do conteúdo principal

Dentro da `div#app`, adicione gradualmente:

1. **Logo e título**:
```html
<img src="/logo.svg" alt="Logo" />
<h1>Codi Shorts</h1>
```

2. **Formulário de entrada**:
```html
<form id="form">
  <input type="url" id="url" placeholder="Insira a URL do short" required />
  <button title="Resumir">
    <i class="ph ph-play"></i>
  </button>
</form>
```

3. **Área de resultado**:
```html
<h2>Resumo</h2>
<p class="placeholder">Escolha um shorts do youtube para resumir</p>
```

## 🎨 Estilização CSS

### Passo 7: CSS Base (base.css)

Crie o arquivo `web/styles/base.css` com estilos fundamentais:

```css
body {
    background-color: #121214;
    color: #fff;
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    /* Adicione gradualmente mais propriedades */
}
```

**Conceitos importantes**:
- Dark theme para melhor experiência
- Reset básico de margin/padding
- Flexbox para centralização

Continue adicionando:
- Configuração de fonte
- Layout flexbox para centralização
- Responsividade básica

### Passo 8: Estilos da aplicação (app.css)

Crie `web/styles/app.css` para estilizar o container principal:

```css
#app {
    display: flex;
    flex-direction: column;
    align-items: center;
}

#app > h1 {
    color: #996dff;
    /* Cor roxa característica */
}
```

**Técnicas utilizadas**:
- Flexbox para layout vertical
- Cores temáticas consistentes
- Seletores específicos para organização

### Passo 9: Estilos do formulário (form.css)

Crie `web/styles/form.css` para o formulário:

```css
#form {
    margin-top: 64px;
    display: flex;
    gap: 12px;
}

#form > input {
    height: 48px;
    width: 450px;
    /* Continue com demais propriedades */
}
```

**Elementos importantes**:
- Layout horizontal com gap
- Estados de focus
- Hover effects
- Transições suaves

## ⚙️ JavaScript e Interatividade

### Passo 10: Configuração do main.js

Crie `web/main.js` para importar os estilos:

```javascript
import './styles/base.css'
import './styles/app.css' 
import './styles/form.css'
```

**Por que importar CSS no JS?**
O Vite processa essas importações e otimiza o carregamento dos estilos.

### Passo 11: Adicionando funcionalidade (expandir conforme necessário)

Para adicionar interatividade ao formulário:

```javascript
// Capturar elementos do DOM
const form = document.getElementById('form')
const urlInput = document.getElementById('url')

// Adicionar event listener
form.addEventListener('submit', handleSubmit)

function handleSubmit(event) {
    event.preventDefault()
    // Lógica de processamento da URL
}
```

## 🎨 Assets e Recursos

### Passo 12: Logo SVG

Crie o arquivo `public/logo.svg` com um logo personalizado. O SVG fornecido utiliza:
- Máscaras para efeitos visuais
- Gradientes de cor roxa
- Formas geométricas modernas

**Dica**: Use ferramentas como Figma ou Adobe Illustrator para criar SVGs personalizados.

## 🔧 Scripts de Build e Desenvolvimento

### Passo 13: Executando o projeto

Para rodar o projeto em desenvolvimento:

```bash
npm run web
```

Isso iniciará o servidor de desenvolvimento do Vite, geralmente em `http://localhost:5173`.

### Passo 14: Build para produção

Para criar uma versão otimizada:

```bash
npx vite build
```

## 📱 Responsividade e Boas Práticas

### Considerações importantes:

1. **Mobile-first**: Comece sempre pensando em dispositivos móveis
2. **Acessibilidade**: Use labels, alt texts e cores contrastantes
3. **Performance**: Otimize imagens e use lazy loading quando necessário
4. **SEO**: Meta tags adequadas e estrutura semântica

### Próximos passos para expandir:

1. **Integração com APIs**: Conectar com APIs de IA para processamento
2. **Estado da aplicação**: Implementar gerenciamento de estado
3. **Loading states**: Indicadores visuais durante processamento
4. **Error handling**: Tratamento adequado de erros
5. **Testes**: Implementar testes unitários e de integração

## 🚀 Deploy

Para deploy, considere plataformas como:
- Vercel
- Netlify  
- GitHub Pages

Todas suportam projetos Vite nativamente.

## 📚 Recursos Adicionais

- [Documentação do Vite](https://vitejs.dev/)
- [CSS Flexbox Guide](https://css-tricks.com/snippets/css/a-guide-to-flexbox/)
- [Phosphor Icons](https://phosphoricons.com/)
- [Google Fonts](https://fonts.google.com/)

## 🤝 Contribuindo

1. Faça um fork do projeto
2. Crie uma branch para sua feature
3. Commit suas mudanças
4. Push para a branch
5. Abra um Pull Request

---

**Desenvolvido com ❤️ usando tecnologias web modernas**
