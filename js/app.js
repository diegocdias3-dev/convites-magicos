/**
 * ConvitesMágicos - Aplicação Principal de Catálogo Interativo
 */

// Recupera ou define número do WhatsApp (Padrão: 5542998412819 ou salvo no navegador)
function getWhatsAppNumber() {
  const saved = localStorage.getItem("convites_magicos_whatsapp");
  if (saved && saved.trim().length >= 10 && saved.trim() !== "5511999999999") {
    return saved.trim().replace(/\D/g, "");
  }
  return DEFAULT_WHATSAPP_PHONE;
}

function setWhatsAppNumber(newNumber) {
  const cleaned = newNumber.replace(/\D/g, "");
  if (cleaned.length >= 10) {
    localStorage.setItem("convites_magicos_whatsapp", cleaned);
    return true;
  }
  return false;
}

// Gera link de contato no WhatsApp com mensagem pré-definida limpa e sem emojis (evita caracteres corrompidos)
function generateWhatsAppLink(itemTitle, itemCategory, itemPrice) {
  const phone = getWhatsAppNumber();
  const text = `Olá! Vi o catálogo do *ConvitesMágicos* e quero encomendar o modelo:\n\n*Modelo:* ${itemTitle}\n*Categoria:* ${itemCategory}\n*Valor:* ${itemPrice}\n\nPoderia me passar os dados para personalização da festa?`;
  return `https://wa.me/${phone}?text=${encodeURIComponent(text)}`;
}

// Estado global do catálogo
const state = {
  activeTab: "all", // "all" | "site" | "video" | "image"
  activeTag: "all",
  searchQuery: "",
  activeModalItem: null
};

// Inicialização
document.addEventListener("DOMContentLoaded", () => {
  setupNavigation();
  setupFilters();
  setupSearch();
  setupSettingsModal();
  setupQuickModals();
  renderAllCatalog();
  updatePhoneDisplays();
});

function updatePhoneDisplays() {
  const currentPhone = getWhatsAppNumber();
  const phoneFormatted = formatPhoneNumber(currentPhone);
  
  const displayEls = document.querySelectorAll(".current-whatsapp-display");
  displayEls.forEach(el => {
    el.textContent = phoneFormatted;
  });

  const generalLinks = document.querySelectorAll(".general-whatsapp-link");
  generalLinks.forEach(link => {
    link.href = `https://wa.me/${currentPhone}?text=${encodeURIComponent("Olá! Gostaria de tirar dúvidas sobre os convites do ConvitesMágicos!")}`;
  });
}

function formatPhoneNumber(num) {
  if (!num) return "";
  const cleaned = ("" + num).replace(/\D/g, "");
  if (cleaned.length === 13) {
    // 55 11 99999-9999
    return `+${cleaned.slice(0, 2)} (${cleaned.slice(2, 4)}) ${cleaned.slice(4, 9)}-${cleaned.slice(9)}`;
  } else if (cleaned.length === 11) {
    // 11 99999-9999
    return `(${cleaned.slice(0, 2)}) ${cleaned.slice(2, 7)}-${cleaned.slice(7)}`;
  }
  return num;
}

function setupNavigation() {
  const mobileToggle = document.getElementById("mobile-menu-toggle");
  const mobileMenu = document.getElementById("mobile-menu");
  
  if (mobileToggle && mobileMenu) {
    mobileToggle.addEventListener("click", () => {
      mobileMenu.classList.toggle("hidden");
    });
  }

  // Smooth scroll links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function(e) {
      const targetId = this.getAttribute("href");
      if (targetId && targetId !== "#") {
        const target = document.querySelector(targetId);
        if (target) {
          e.preventDefault();
          if (mobileMenu && !mobileMenu.classList.contains("hidden")) {
            mobileMenu.classList.add("hidden");
          }
          target.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      }
    });
  });
}

function setupFilters() {
  // Tabs (Todos, Premium Site, Vídeos, Imagens)
  const tabButtons = document.querySelectorAll(".filter-tab-btn");
  tabButtons.forEach(btn => {
    btn.addEventListener("click", () => {
      tabButtons.forEach(b => b.classList.remove("active-tab"));
      btn.classList.add("active-tab");
      state.activeTab = btn.getAttribute("data-tab");
      renderAllCatalog();
    });
  });

  // Theme Tags
  const tagButtons = document.querySelectorAll(".theme-tag-pill");
  tagButtons.forEach(btn => {
    btn.addEventListener("click", () => {
      tagButtons.forEach(b => b.classList.remove("active-tag"));
      btn.classList.add("active-tag");
      state.activeTag = btn.getAttribute("data-tag");
      renderAllCatalog();
    });
  });
}

function setupSearch() {
  const searchInput = document.getElementById("catalog-search-input");
  const clearBtn = document.getElementById("clear-search-btn");
  
  if (searchInput) {
    searchInput.addEventListener("input", (e) => {
      state.searchQuery = e.target.value.trim().toLowerCase();
      if (clearBtn) {
        if (state.searchQuery) {
          clearBtn.classList.remove("hidden");
        } else {
          clearBtn.classList.add("hidden");
        }
      }
      renderAllCatalog();
    });
  }

  if (clearBtn && searchInput) {
    clearBtn.addEventListener("click", () => {
      searchInput.value = "";
      state.searchQuery = "";
      clearBtn.classList.add("hidden");
      renderAllCatalog();
      searchInput.focus();
    });
  }
}

// Renderização principal
function renderAllCatalog() {
  const container = document.getElementById("catalog-items-container");
  if (!container) return;

  const resultsCounter = document.getElementById("results-counter");

  // Filtra itens
  let showSite = state.activeTab === "all" || state.activeTab === "site";
  let showVideos = state.activeTab === "all" || state.activeTab === "video";
  let showImages = state.activeTab === "all" || state.activeTab === "image";

  // Aplica busca e tag aos vídeos
  const filteredVideos = showVideos ? VIDEOS_CATALOG.filter(item => matchFilter(item)) : [];
  
  // Aplica busca e tag às imagens
  const filteredImages = showImages ? IMAGES_CATALOG.filter(item => matchFilter(item)) : [];

  // Verifica se o item Premium atende aos filtros
  let premiumMatches = showSite && matchFilter(PREMIUM_INVITATION);

  const totalCount = (premiumMatches ? 1 : 0) + filteredVideos.length + filteredImages.length;
  if (resultsCounter) {
    resultsCounter.textContent = `${totalCount} modelo${totalCount === 1 ? '' : 's'} encontrado${totalCount === 1 ? '' : 's'}`;
  }

  if (totalCount === 0) {
    container.innerHTML = `
      <div class="empty-state-box">
        <div class="empty-icon">🔍</div>
        <h3>Nenhum convite encontrado</h3>
        <p>Não encontramos modelos com o termo "${state.searchQuery}". Tente pesquisar por outros temas como <strong>Princesa, Safari, Dinossauro, Fazendinha</strong> ou limpe a busca.</p>
        <button class="btn btn-secondary mt-4" onclick="resetFilters()">Limpar Filtros e Ver Todos</button>
      </div>
    `;
    return;
  }

  let html = "";

  // 1. SEÇÃO CONVITE SITE PREMIUM
  if (premiumMatches) {
    html += renderPremiumSectionCard(PREMIUM_INVITATION);
  }

  // 2. SEÇÃO VÍDEOS ANIMADOS
  if (filteredVideos.length > 0) {
    html += `
      <div class="category-block video-category-block">
        <div class="category-block-header">
          <div class="category-title-group">
            <span class="category-icon-badge">🎬</span>
            <div>
              <h3 class="category-heading">Convites em Vídeo Animado</h3>
              <p class="category-subheading">Vídeos animados dinâmicos com trilha sonora e efeitos especiais • <strong>R$ 89,00</strong></p>
            </div>
          </div>
          <span class="count-pill">${filteredVideos.length} modelo${filteredVideos.length > 1 ? 's' : ''}</span>
        </div>
        <div class="catalog-grid video-grid">
          ${filteredVideos.map(item => renderVideoCard(item)).join("")}
        </div>
      </div>
    `;
  }

  // 3. SEÇÃO IMAGENS DIGITAIS
  if (filteredImages.length > 0) {
    html += `
      <div class="category-block image-category-block">
        <div class="category-block-header">
          <div class="category-title-group">
            <span class="category-icon-badge">🖼️</span>
            <div>
              <h3 class="category-heading">Convites Digitais em Imagem</h3>
              <p class="category-subheading">Arte digital em altíssima qualidade pronta para WhatsApp e impressão • <strong>R$ 39,00</strong></p>
            </div>
          </div>
          <span class="count-pill">${filteredImages.length} modelo${filteredImages.length > 1 ? 's' : ''}</span>
        </div>
        <div class="catalog-grid image-grid">
          ${filteredImages.map(item => renderImageCard(item)).join("")}
        </div>
      </div>
    `;
  }

  container.innerHTML = html;
  attachCardEvents();
}

function matchFilter(item) {
  // Filtro de Tag de Tema
  if (state.activeTag !== "all") {
    const tagMatch = item.tags && item.tags.some(t => t.toLowerCase().includes(state.activeTag.toLowerCase()));
    const themeMatch = item.theme && item.theme.toLowerCase().includes(state.activeTag.toLowerCase());
    if (!tagMatch && !themeMatch) {
      return false;
    }
  }

  // Filtro de Texto de Busca
  if (state.searchQuery) {
    const q = state.searchQuery;
    const titleMatch = item.title.toLowerCase().includes(q);
    const themeMatch = item.theme && item.theme.toLowerCase().includes(q);
    const tagMatch = item.tags && item.tags.some(t => t.toLowerCase().includes(q));
    const descMatch = item.desc && item.desc.toLowerCase().includes(q);
    if (!titleMatch && !themeMatch && !tagMatch && !descMatch) {
      return false;
    }
  }

  return true;
}

function renderPremiumSectionCard(item) {
  const waLink = generateWhatsAppLink(item.title, item.categoryName, item.priceFormatted);
  return `
    <div class="premium-featured-banner mb-8" id="convite-premium-banner">
      <div class="premium-badge-tag">
        <span>⭐ MODELO PREMIUM EXCLUSIVO</span>
      </div>
      <div class="premium-card-grid">
        <div class="premium-info-col">
          <div class="crown-badge">👑 EXPERIÊNCIA COMPLETA EM SITE</div>
          <h2 class="premium-title">${item.title}</h2>
          <p class="premium-subtitle">${item.tagline}</p>
          <p class="premium-text">${item.description}</p>
          
          <div class="premium-perks-grid">
            ${item.highlights.slice(0, 6).map(h => `
              <div class="perk-item">
                <span class="perk-icon">${h.icon}</span>
                <div>
                  <strong>${h.title}</strong>
                  <p>${h.desc}</p>
                </div>
              </div>
            `).join("")}
          </div>

          <div class="premium-price-box">
            <div class="price-details">
              <span class="price-label">Valor Promocional do Site Completo:</span>
              <div class="price-row">
                <span class="price-value">${item.priceFormatted}</span>
                <span class="price-badge-once">Pagamento Único • Sem Mensalidade</span>
              </div>
            </div>
            
            <div class="premium-action-buttons">
              <a href="${waLink}" target="_blank" rel="noopener noreferrer" class="btn btn-whatsapp btn-lg">
                <svg class="wa-icon" viewBox="0 0 24 24" width="22" height="22" fill="currentColor">
                  <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.711 2.598 2.664-.698c.969.584 1.961.947 2.796.947 3.179 0 5.765-2.587 5.765-5.766-.001-3.182-2.585-5.768-5.765-5.768zm3.393 8.307c-.144.405-.837.774-1.17.824-.312.045-.694.072-2.146-.532-1.859-.775-3.056-2.67-3.149-2.795-.091-.125-.758-1.009-.758-1.923 0-.915.479-1.365.65-1.551.171-.186.375-.233.5-.233.125 0 .25.002.359.007.116.006.27-.044.423.322.157.375.539 1.316.586 1.411.048.096.08.209.016.335-.064.126-.096.205-.191.317-.096.113-.203.251-.289.338-.096.096-.197.2-.085.392.112.193.498.822 1.069 1.33 1.332.735 1.488.949 1.701 1.045.213.096.338.08.464-.064.127-.144.542-.63.687-.845.144-.216.29-.18.487-.107.199.073 1.258.594 1.474.702.216.108.361.162.414.253.053.091.053.526-.091.931z"/>
                </svg>
                <span>Pedir este Modelo no WhatsApp</span>
              </a>

              <button class="btn btn-outline-light" onclick="openLiveSiteModal()">
                <span>Ver Demonstração Ao Vivo</span>
                <span class="external-icon">↗</span>
              </button>
            </div>
          </div>
        </div>

        <div class="premium-mockup-col">
          <div class="phone-mockup-wrapper">
            <div class="phone-top-bar">
              <span class="camera-lens"></span>
              <span class="speaker-grill"></span>
            </div>
            <div class="phone-screen-frame">
              <iframe 
                src="${item.url}" 
                title="Prévia do Convite Princesa Isadora"
                loading="lazy"
                class="phone-iframe"
                sandbox="allow-scripts allow-same-origin allow-popups"
              ></iframe>
            </div>
            <div class="phone-bottom-bar">
              <button class="phone-test-btn" onclick="openLiveSiteModal()">
                📱 Abrir em Tela Cheia
              </button>
            </div>
          </div>
          <div class="mockup-hint">
            <span class="sparkle-icon">✨</span>
            Role ou toque dentro da tela do celular para testar o convite real!
          </div>
        </div>
      </div>
    </div>
  `;
}

function renderVideoCard(item) {
  const waLink = generateWhatsAppLink(item.title, item.categoryName, item.priceFormatted);
  const encodedPath = encodeURI(`convites_videos/${item.file}`);

  return `
    <div class="catalog-card video-card" data-id="${item.id}">
      <div class="card-media-wrapper video-media-wrapper">
        <video 
          class="card-video-player"
          playsinline 
          loop 
          muted 
          preload="metadata"
          poster=""
          src="${encodedPath}"
        ></video>
        <div class="video-overlay-controls">
          <button class="video-play-btn" onclick="toggleCardVideo(this, event)">
            <svg class="play-icon" viewBox="0 0 24 24" width="28" height="28" fill="white">
              <polygon points="5 3 19 12 5 21 5 3"></polygon>
            </svg>
            <span class="video-state-text">Reproduzir Vídeo</span>
          </button>
          <div class="video-badge-top">
            <span class="badge-type">🎬 VÍDEO ANIMADO</span>
            <span class="badge-price">${item.priceFormatted}</span>
          </div>
        </div>
        <button class="expand-media-btn" title="Ver em tamanho grande" onclick="openMediaModal('${item.id}', 'video')">
          🔍
        </button>
      </div>

      <div class="card-content">
        <div class="card-tags" style="display: flex; gap: 0.35rem; flex-wrap: wrap;">
          <span class="theme-badge">${item.theme}</span>
          <span class="theme-badge" style="background: #e0f2fe; color: #0369a1; font-weight: 700;">⚡ 48 horas</span>
          <span class="theme-badge" style="background: #fef3c7; color: #92400e; font-weight: 700;">3 alterações</span>
        </div>
        <h4 class="card-title">${item.title}</h4>
        <p class="card-desc">${item.desc}</p>
        
        <div class="card-pricing-row">
          <div>
            <span class="price-prefix">Por apenas</span>
            <div class="card-price">${item.priceFormatted}</div>
          </div>
          <button class="preview-text-btn" onclick="openMediaModal('${item.id}', 'video')">
            Assistir c/ Som 🔊
          </button>
        </div>

        <div class="card-actions">
          <a href="${waLink}" target="_blank" rel="noopener noreferrer" class="btn btn-whatsapp btn-block">
            <svg class="wa-icon" viewBox="0 0 24 24" width="18" height="18" fill="currentColor">
              <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.711 2.598 2.664-.698c.969.584 1.961.947 2.796.947 3.179 0 5.765-2.587 5.765-5.766-.001-3.182-2.585-5.768-5.765-5.768zm3.393 8.307c-.144.405-.837.774-1.17.824-.312.045-.694.072-2.146-.532-1.859-.775-3.056-2.67-3.149-2.795-.091-.125-.758-1.009-.758-1.923 0-.915.479-1.365.65-1.551.171-.186.375-.233.5-.233.125 0 .25.002.359.007.116.006.27-.044.423.322.157.375.539 1.316.586 1.411.048.096.08.209.016.335-.064.126-.096.205-.191.317-.096.113-.203.251-.289.338-.096.096-.197.2-.085.392.112.193.498.822 1.069 1.33 1.332.735 1.488.949 1.701 1.045.213.096.338.08.464-.064.127-.144.542-.63.687-.845.144-.216.29-.18.487-.107.199.073 1.258.594 1.474.702.216.108.361.162.414.253.053.091.053.526-.091.931z"/>
            </svg>
            <span>Pedir no WhatsApp</span>
          </a>
        </div>
      </div>
    </div>
  `;
}

function renderImageCard(item) {
  const waLink = generateWhatsAppLink(item.title, item.categoryName, item.priceFormatted);
  const encodedPath = encodeURI(`convites_imagens/${item.file}`);

  return `
    <div class="catalog-card image-card" data-id="${item.id}">
      <div class="card-media-wrapper image-media-wrapper" onclick="openMediaModal('${item.id}', 'image')">
        <img 
          src="${encodedPath}" 
          alt="${item.title}" 
          loading="lazy"
          class="card-thumbnail-img"
        />
        <div class="image-overlay-hover">
          <span class="zoom-pill">🔍 Clique para Ampliar</span>
        </div>
        <div class="card-badge-top">
          <span class="badge-type">🖼️ IMAGEM</span>
          <span class="badge-price">${item.priceFormatted}</span>
        </div>
      </div>

      <div class="card-content">
        <div class="card-tags" style="display: flex; gap: 0.35rem; flex-wrap: wrap;">
          <span class="theme-badge">${item.theme}</span>
          <span class="theme-badge" style="background: #dcfce7; color: #15803d; font-weight: 700;">⚡ 24 horas</span>
          <span class="theme-badge" style="background: #fef3c7; color: #92400e; font-weight: 700;">3 alterações</span>
        </div>
        <h4 class="card-title">${item.title}</h4>
        <p class="card-desc">${item.desc}</p>

        <div class="card-pricing-row">
          <div>
            <span class="price-prefix">Por apenas</span>
            <div class="card-price">${item.priceFormatted}</div>
          </div>
          <button class="preview-text-btn" onclick="openMediaModal('${item.id}', 'image')">
            Ver Detalhes 🔍
          </button>
        </div>

        <div class="card-actions">
          <a href="${waLink}" target="_blank" rel="noopener noreferrer" class="btn btn-whatsapp btn-block">
            <svg class="wa-icon" viewBox="0 0 24 24" width="18" height="18" fill="currentColor">
              <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.711 2.598 2.664-.698c.969.584 1.961.947 2.796.947 3.179 0 5.765-2.587 5.765-5.766-.001-3.182-2.585-5.768-5.765-5.768zm3.393 8.307c-.144.405-.837.774-1.17.824-.312.045-.694.072-2.146-.532-1.859-.775-3.056-2.67-3.149-2.795-.091-.125-.758-1.009-.758-1.923 0-.915.479-1.365.65-1.551.171-.186.375-.233.5-.233.125 0 .25.002.359.007.116.006.27-.044.423.322.157.375.539 1.316.586 1.411.048.096.08.209.016.335-.064.126-.096.205-.191.317-.096.113-.203.251-.289.338-.096.096-.197.2-.085.392.112.193.498.822 1.069 1.33 1.332.735 1.488.949 1.701 1.045.213.096.338.08.464-.064.127-.144.542-.63.687-.845.144-.216.29-.18.487-.107.199.073 1.258.594 1.474.702.216.108.361.162.414.253.053.091.053.526-.091.931z"/>
            </svg>
            <span>Pedir no WhatsApp</span>
          </a>
        </div>
      </div>
    </div>
  `;
}

function attachCardEvents() {
  // Intersection Observer para lazy e hover suave se desejar
}

// Reprodução do vídeo inline no card
function toggleCardVideo(button, event) {
  event.stopPropagation();
  const wrapper = button.closest(".card-media-wrapper");
  const video = wrapper.querySelector("video");
  const stateText = button.querySelector(".video-state-text");

  if (video.paused) {
    // pausa outros vídeos
    document.querySelectorAll("video").forEach(v => {
      if (v !== video) {
        v.pause();
        const otherBtn = v.closest(".card-media-wrapper")?.querySelector(".video-state-text");
        if (otherBtn) otherBtn.textContent = "Reproduzir Vídeo";
      }
    });

    video.play();
    stateText.textContent = "Pausar Vídeo";
    button.classList.add("playing");
  } else {
    video.pause();
    stateText.textContent = "Reproduzir Vídeo";
    button.classList.remove("playing");
  }
}

// Modais
function openMediaModal(id, type) {
  let item = null;
  if (type === "video") {
    item = VIDEOS_CATALOG.find(v => v.id === id);
  } else if (type === "image") {
    item = IMAGES_CATALOG.find(img => img.id === id);
  }

  if (!item) return;

  const modal = document.getElementById("media-modal");
  const modalContent = document.getElementById("media-modal-body");
  const waLink = generateWhatsAppLink(item.title, item.categoryName, item.priceFormatted);

  let mediaHtml = "";
  if (type === "video") {
    const encodedPath = encodeURI(`convites_videos/${item.file}`);
    mediaHtml = `
      <div class="modal-video-container">
        <video 
          controls 
          autoplay 
          playsinline 
          class="modal-video-element"
          src="${encodedPath}"
        ></video>
      </div>
    `;
  } else {
    const encodedPath = encodeURI(`convites_imagens/${item.file}`);
    mediaHtml = `
      <div class="modal-image-container">
        <img 
          src="${encodedPath}" 
          alt="${item.title}" 
          class="modal-image-element"
        />
      </div>
    `;
  }

  modalContent.innerHTML = `
    <div class="modal-split-layout">
      <div class="modal-media-col">
        ${mediaHtml}
      </div>
      <div class="modal-info-col">
        <div class="modal-badge-row">
          <span class="badge-type">${item.categoryIcon} ${item.categoryName.toUpperCase()}</span>
          <span class="theme-badge">${item.theme}</span>
        </div>

        <h3 class="modal-product-title">${item.title}</h3>
        <p class="modal-product-desc">${item.desc}</p>

        <div class="modal-perks-list">
          <h4>O que está incluso na personalização:</h4>
          <ul>
            <li>⚡ <strong>Prazo de Entrega:</strong> ${item.deliveryTime}</li>
            <li>✏️ <strong>Alterações Inclusas:</strong> Até 3 alterações gratuitas após envio dos dados</li>
            <li>ℹ️ <strong>Alterações Extras:</strong> A partir da 4ª alteração: +R$ ${item.extraRevisionPrice},00 por alteração</li>
            <li>✨ Nome do aniversariante e idade comemorada</li>
            <li>📅 Data, dia da semana e horário da festa</li>
            <li>📍 Endereço completo do evento ou buffet</li>
            <li>💬 Frase especial personalizada pela família</li>
            <li>📱 Arquivo final em altíssima resolução para envio ilimitado</li>
          </ul>
        </div>

        <div class="modal-pricing-box">
          <span class="modal-price-label">Valor total do modelo:</span>
          <div class="modal-price-val">${item.priceFormatted}</div>
          <span class="modal-price-sub">Sem cobranças adicionais</span>
        </div>

        <div class="modal-actions-box">
          <a href="${waLink}" target="_blank" rel="noopener noreferrer" class="btn btn-whatsapp btn-lg btn-block">
            <svg class="wa-icon" viewBox="0 0 24 24" width="22" height="22" fill="currentColor">
              <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.711 2.598 2.664-.698c.969.584 1.961.947 2.796.947 3.179 0 5.765-2.587 5.765-5.766-.001-3.182-2.585-5.768-5.765-5.768zm3.393 8.307c-.144.405-.837.774-1.17.824-.312.045-.694.072-2.146-.532-1.859-.775-3.056-2.67-3.149-2.795-.091-.125-.758-1.009-.758-1.923 0-.915.479-1.365.65-1.551.171-.186.375-.233.5-.233.125 0 .25.002.359.007.116.006.27-.044.423.322.157.375.539 1.316.586 1.411.048.096.08.209.016.335-.064.126-.096.205-.191.317-.096.113-.203.251-.289.338-.096.096-.197.2-.085.392.112.193.498.822 1.069 1.33 1.332.735 1.488.949 1.701 1.045.213.096.338.08.464-.064.127-.144.542-.63.687-.845.144-.216.29-.18.487-.107.199.073 1.258.594 1.474.702.216.108.361.162.414.253.053.091.053.526-.091.931z"/>
            </svg>
            <span>Pedir este Modelo no WhatsApp</span>
          </a>
        </div>
      </div>
    </div>
  `;

  modal.classList.remove("hidden");
  document.body.style.overflow = "hidden";
}

function closeMediaModal() {
  const modal = document.getElementById("media-modal");
  if (!modal) return;
  
  // Pausa qualquer vídeo dentro do modal
  const v = modal.querySelector("video");
  if (v) v.pause();

  modal.classList.add("hidden");
  document.body.style.overflow = "";
}

function openLiveSiteModal() {
  const modal = document.getElementById("live-site-modal");
  const iframe = document.getElementById("live-site-iframe");
  const waLink = generateWhatsAppLink(
    PREMIUM_INVITATION.title, 
    PREMIUM_INVITATION.categoryName, 
    PREMIUM_INVITATION.priceFormatted
  );
  
  const orderBtn = document.getElementById("modal-order-premium-btn");
  if (orderBtn) {
    orderBtn.href = waLink;
  }

  if (iframe && !iframe.getAttribute("src")) {
    iframe.src = PREMIUM_INVITATION.url;
  }

  if (modal) {
    modal.classList.remove("hidden");
    document.body.style.overflow = "hidden";
  }
}

function closeLiveSiteModal() {
  const modal = document.getElementById("live-site-modal");
  if (modal) {
    modal.classList.add("hidden");
    document.body.style.overflow = "";
  }
}

function setupQuickModals() {
  // Tecla ESC fecha modais
  window.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      closeMediaModal();
      closeLiveSiteModal();
      closeSettingsModal();
    }
  });

  // Clique no backdrop fecha modais
  document.querySelectorAll(".modal-backdrop").forEach(backdrop => {
    backdrop.addEventListener("click", (e) => {
      if (e.target === backdrop) {
        closeMediaModal();
        closeLiveSiteModal();
        closeSettingsModal();
      }
    });
  });
}

// Configuração do Telefone do WhatsApp
function setupSettingsModal() {
  const openBtn = document.getElementById("open-settings-btn");
  const closeBtn = document.getElementById("close-settings-btn");
  const modal = document.getElementById("settings-modal");
  const form = document.getElementById("settings-form");
  const phoneInput = document.getElementById("settings-phone-input");

  if (openBtn && modal) {
    openBtn.addEventListener("click", () => {
      if (phoneInput) {
        phoneInput.value = getWhatsAppNumber();
      }
      modal.classList.remove("hidden");
      document.body.style.overflow = "hidden";
    });
  }

  if (closeBtn) {
    closeBtn.addEventListener("click", closeSettingsModal);
  }

  if (form && phoneInput) {
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      const val = phoneInput.value.trim();
      if (setWhatsAppNumber(val)) {
        updatePhoneDisplays();
        renderAllCatalog();
        alert("Número do WhatsApp atualizado com sucesso!");
        closeSettingsModal();
      } else {
        alert("Por favor, digite um número válido com DDD (ex: 5511999999999).");
      }
    });
  }
}

function closeSettingsModal() {
  const modal = document.getElementById("settings-modal");
  if (modal) {
    modal.classList.add("hidden");
    document.body.style.overflow = "";
  }
}

function resetFilters() {
  state.activeTab = "all";
  state.activeTag = "all";
  state.searchQuery = "";

  document.querySelectorAll(".filter-tab-btn").forEach(b => {
    if (b.getAttribute("data-tab") === "all") b.classList.add("active-tab");
    else b.classList.remove("active-tab");
  });

  document.querySelectorAll(".theme-tag-pill").forEach(b => {
    if (b.getAttribute("data-tag") === "all") b.classList.add("active-tag");
    else b.classList.remove("active-tag");
  });

  const searchInput = document.getElementById("catalog-search-input");
  if (searchInput) searchInput.value = "";

  const clearBtn = document.getElementById("clear-search-btn");
  if (clearBtn) clearBtn.classList.add("hidden");

  renderAllCatalog();
}
