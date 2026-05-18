let produtos = [];

const productGrid = document.getElementById("productGrid");
const searchInput = document.getElementById("searchInput");
const searchBtn = document.getElementById("searchBtn");

// =========================
// CARREGAR PRODUTOS DO JSON
// =========================
async function carregarProdutos() {
    try {
        const response = await fetch("./produtos.json");
        produtos = await response.json();

        renderizarProdutos(produtos);

    } catch (error) {
        console.error("Erro ao carregar produtos:", error);
    }
}

// =========================
// RENDERIZAR PRODUTOS (OTIMIZADO)
// =========================
function renderizarProdutos(lista) {

    if (!lista || lista.length === 0) {
        productGrid.innerHTML = `
            <div class="not-found">
                <h2>Produto não encontrado</h2>
                <p>Tente pesquisar outro produto.</p>
            </div>
        `;
        return;
    }

    // 🔥 monta tudo de uma vez (bem mais rápido)
    const html = lista.map(p => `
        <div class="product-card">

            <img src="${p.imagem}" alt="${p.nome}">

            <div class="product-info">

                <h3>${p.nome}</h3>

                <span class="price">${p.preco}</span>

                <a href="${p.link}" target="_blank" class="offer-btn">
                    Ver Produto
                </a>

            </div>

        </div>
    `).join("");

    productGrid.innerHTML = html;
}

// =========================
// PESQUISA OTIMIZADA (DEBOUNCE)
// =========================
let timeout;

function pesquisarProdutos() {

    clearTimeout(timeout);

    timeout = setTimeout(() => {

        const termo = searchInput.value.toLowerCase().trim();

        if (!termo) {
            renderizarProdutos(produtos);
            return;
        }

        const filtrados = produtos.filter(produto =>
            produto.nome.toLowerCase().includes(termo)
        );

        renderizarProdutos(filtrados);

    }, 250); // atraso leve pra não travar
}

// =========================
// EVENTOS
// =========================
searchInput.addEventListener("input", pesquisarProdutos);

searchBtn.addEventListener("click", pesquisarProdutos);

// =========================
// INICIAR
// =========================
carregarProdutos();