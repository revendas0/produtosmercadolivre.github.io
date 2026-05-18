let produtos = [];

const productGrid = document.getElementById("productGrid");
const searchInput = document.getElementById("searchInput");
const searchBtn = document.getElementById("searchBtn");

// =========================
// CONTROLE DE PAGINAÇÃO
// =========================
let pagina = 1;
const porPagina = 50;
let listaAtual = [];

// =========================
// CARREGAR PRODUTOS DO JSON
// =========================
async function carregarProdutos() {
    try {
        const response = await fetch("./produtos.json");
        produtos = await response.json();

        listaAtual = produtos;
        pagina = 1;

        renderizarProdutos();

    } catch (error) {
        console.error("Erro ao carregar produtos:", error);
    }
}

// =========================
// RENDERIZAR PRODUTOS
// =========================
function renderizarProdutos() {

    const inicio = (pagina - 1) * porPagina;
    const fim = inicio + porPagina;

    const itens = listaAtual.slice(inicio, fim);

    if (itens.length === 0 && pagina === 1) {
        productGrid.innerHTML = `
            <div class="not-found">
                <h2>Produto não encontrado</h2>
                <p>Tente pesquisar outro produto.</p>
            </div>
        `;
        return;
    }

    const html = itens.map(p => `
        <div class="product-card">
            <img loading="lazy" src="${p.imagem}" alt="${p.nome}">
            <div class="product-info">
                <h3>${p.nome}</h3>
                <span class="price">${p.preco}</span>
                <a href="${p.link}" target="_blank" class="offer-btn">
                    Ver Produto
                </a>
            </div>
        </div>
    `).join("");

    productGrid.innerHTML += html;

    criarBotaoCarregarMais();
}

// =========================
// BOTÃO CARREGAR MAIS
// =========================
function criarBotaoCarregarMais() {

    const jaExiste = document.getElementById("btn-carregar-mais");
    if (jaExiste) jaExiste.remove();

    const totalExibidos = pagina * porPagina;

    if (totalExibidos >= listaAtual.length) return;

    const btn = document.createElement("button");
    btn.id = "btn-carregar-mais";
    btn.innerText = "Carregar mais";
    btn.style.display = "block";
    btn.style.margin = "20px auto";
    btn.style.padding = "10px 20px";
    btn.style.cursor = "pointer";

    btn.addEventListener("click", () => {
        pagina++;
        renderizarProdutos();
    });

    productGrid.appendChild(btn);
}

// =========================
// PESQUISA
// =========================
let timeout;

function pesquisarProdutos() {

    clearTimeout(timeout);

    timeout = setTimeout(() => {

        const termo = searchInput.value.toLowerCase().trim();

        listaAtual = termo
            ? produtos.filter(p =>
                p.nome.toLowerCase().includes(termo)
              )
            : produtos;

        pagina = 1;
        productGrid.innerHTML = "";
        renderizarProdutos();

    }, 200);
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