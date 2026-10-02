# ConvitesMágicos ✨

Catálogo completo, interativo e responsivo de convites infantis personalizados, com separação de formatos, vitrine do Convite em Site Premium, vídeos animados, artes em imagem e botões de pedido direto via WhatsApp.

---

## 🌟 Estrutura de Preços e Categorias

- 🖼️ **Convite Digital em Imagem**: **R$ 39,00**
  - Arte digital personalizada em altíssima definição (PNG/JPG).
  - Envio ilimitado pelo WhatsApp e pronta para impressão.
- 🎬 **Convite Animado em Vídeo**: **R$ 89,00**
  - Vídeo animado com efeitos especiais e trilha sonora temática.
  - Formato dinâmico ideal para WhatsApp e Reels/Stories.
- 👑 **Convite Site Interativo Premium**: **R$ 197,00**
  - Site completo exclusivo para o aniversário com link personalizado.
  - Modelo de referência ao vivo: [1 Aninho da Princesa Isadora • Convite Real](https://site-oficial-seguro.github.io/convite-aniversario-isadora/)
  - Confirmação de Presença (RSVP) direta no WhatsApp.
  - Botão de GPS com rota integrada no Waze e Google Maps.
  - Música tema de fundo com controle de áudio.
  - Contagem regressiva em tempo real e galeria de fotos do aniversariante.

---

## 📱 Integração com WhatsApp

Cada convite possui um botão de ação com ícone do WhatsApp que envia uma mensagem personalizada contendo:
- Nome exato do modelo escolhido
- Categoria (Imagem, Vídeo ou Site)
- Valor do modelo

O número padrão de atendimento pode ser ajustado a qualquer momento clicando no botão **"⚙️ Alterar Telefone do WhatsApp"** no rodapé do site, ficando salvo no navegador sem precisar alterar código.

---

## 🚀 Como Executar o Projeto

### Opção 1: Abrir diretamente no Navegador
Basta dar um duplo clique no arquivo [`index.html`](index.html). O site funcionará imediatamente.

### Opção 2: Iniciar Servidor Local com Node.js
No terminal, dentro da pasta do projeto, execute:
```bash
node server.js
```
Em seguida, abra no navegador:
```
http://localhost:3000
```

---

## 📂 Organização dos Arquivos

- `index.html`: Página principal com catálogo, hero, vitrine premium, filtros e modais.
- `css/style.css`: Estilização moderna, responsiva, com suporte a mobile, tablets e desktops.
- `js/catalog-data.js`: Dados estruturados com todos os modelos, temas, preços e tags.
- `js/app.js`: Lógica de renderização dinâmica, busca em tempo real, modais e WhatsApp.
- `server.js`: Servidor HTTP Node.js com suporte a streaming de vídeo MP4 (Range requests).
- `convites_imagens/`: Galeria com os 43 modelos em imagem.
- `convites_videos/`: Galeria com os 4 modelos de convite animado em vídeo.
