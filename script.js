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

        productGrid.innerHTML = "";

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

    // remove botão antigo
    const antigoBotao = document.querySelector(".load-more-wrapper");

    if (antigoBotao) {
        antigoBotao.remove();
    }

    // produto não encontrado
    if (itens.length === 0 && pagina === 1) {

        productGrid.innerHTML = `
            <div class="not-found">
                <h2>Produto não encontrado</h2>
                <p>Tente pesquisar outro produto.</p>
            </div>
        `;

        return;
    }

    // limpa apenas na primeira página
    if (pagina === 1) {
        productGrid.innerHTML = "";
    }

    // renderiza produtos
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

    const totalExibidos = pagina * porPagina;

    // se acabou produtos
    if (totalExibidos >= listaAtual.length) return;

    // container
    const wrapper = document.createElement("div");

    wrapper.classList.add("load-more-wrapper");
    wrapper.style.marginTop = "30px";

    btn.style.padding = "12px 26px";
    btn.style.borderRadius = "14px";
    btn.style.fontSize = "15px";

    // botão
    const btn = document.createElement("button");

    btn.innerText = "Carregar mais";

    btn.classList.add("offer-btn");
    // clique
    btn.addEventListener("click", () => {

        pagina++;

        renderizarProdutos();

    });

    wrapper.appendChild(btn);

    // adiciona abaixo da grid
    productGrid.after(wrapper);
}

// =========================
// PESQUISA
// =========================
let timeout;

function pesquisarProdutos() {

    clearTimeout(timeout);

    timeout = setTimeout(() => {

        const termo = searchInput.value
            .toLowerCase()
            .trim();

        listaAtual = termo

            ? produtos.filter(p =>
                p.nome.toLowerCase().includes(termo)
            )

            : produtos;

        pagina = 1;

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