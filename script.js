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
// RENDERIZAR PRODUTOS
// =========================
function renderizarProdutos(lista) {

    productGrid.innerHTML = "";

    // SE NÃO ENCONTRAR PRODUTOS
    if (lista.length === 0) {

        productGrid.innerHTML = `
            <div class="not-found">
                <h2>Produto não encontrado</h2>
                <p>Tente pesquisar outro produto.</p>
            </div>
        `;

        return;
    }

    // RENDERIZAR PRODUTOS
    lista.forEach(p => {

        productGrid.innerHTML += `
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
        `;
    });
}

// =========================
// PESQUISAR PRODUTOS
// =========================
function pesquisarProdutos() {

    const termo = searchInput.value.toLowerCase().trim();

    const filtrados = produtos.filter(produto =>
        produto.nome.toLowerCase().includes(termo)
    );

    renderizarProdutos(filtrados);
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