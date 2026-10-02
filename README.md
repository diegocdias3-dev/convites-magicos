# ConvitesMágicos ✨

Catálogo completo, interativo e responsivo de convites infantis personalizados, com separação de formatos, vitrine do Convite em Site Premium, vídeos animados, artes em imagem e botões de pedido direto via WhatsApp.

---

## 🌟 Estrutura de Preços, Prazos e Alterações

- 🖼️ **Convite Digital em Imagem**: **R$ 39,00**
  - **Prazo de Entrega:** em até **24 horas**
  - **Alterações:** Até 3 alterações gratuitas inclusas
  - **Alterações Extras (a partir da 4ª):** +R$ 5,00 por alteração
  - Arte digital personalizada em altíssima definição (PNG/JPG).
  - Envio ilimitado pelo WhatsApp e pronta para impressão.

- 🎬 **Convite Animado em Vídeo**: **R$ 89,00**
  - **Prazo de Entrega:** em até **48 horas**
  - **Alterações:** Até 3 alterações gratuitas inclusas
  - **Alterações Extras (a partir da 4ª):** +R$ 10,00 por alteração
  - Vídeo animado com efeitos especiais e trilha sonora temática.
  - Formato dinâmico ideal para WhatsApp e Reels/Stories.

- 👑 **Convite Site Interativo Premium**: **R$ 197,00**
  - **Prazo de Entrega:** em até **72 horas**
  - **Alterações:** Até 3 alterações gratuitas inclusas
  - **Alterações Extras (a partir da 4ª):** +R$ 30,00 por alteração
  - Site completo exclusivo para o aniversário com link personalizado.
  - Modelo de referência ao vivo: [1 Aninho da Princesa Isadora • Convite Real](https://site-oficial-seguro.github.io/convite-aniversario-isadora/)
  - Confirmação de Presença (RSVP) direta no WhatsApp.
  - Botão de GPS com rota integrada no Waze e Google Maps.
  - Música tema de fundo com controle de áudio.
  - Contagem regressiva em tempo real e galeria de fotos do aniversariante.

---

## 📱 WhatsApp de Atendimento

- **Número Oficial:** `+55 (42) 99841-2819` (`5542998412819`)
- Cada convite possui um botão de ação com ícone do WhatsApp que envia uma mensagem personalizada com o nome exato do modelo e o valor.
- O número de atendimento pode ser ajustado facilmente clicando em **"⚙️ Alterar Telefone do WhatsApp"** no rodapé do site.

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
