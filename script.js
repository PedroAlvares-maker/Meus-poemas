/* ==================================================
   DADOS DOS POEMAS
================================================== */

import { capitulos } from "./poems.js";

/* ==================================================
   ELEMENTO PRINCIPAL
================================================== */

const app = document.getElementById("app");


/* ==================================================
   PÁGINA INICIAL
================================================== */

function voltarInicio() {

    mostrarInicio();

}


/* ==================================================
   MOSTRAR PÁGINA INICIAL
================================================== */

function mostrarInicio() {

    app.innerHTML = `

        <section class="hero">

            <h1>Os fragmentos da minha alma</h1>

            <p>
                Uma coleção de palavras, pensamentos e sentimentos.
            </p>

        </section>


        <section id="capitulos">

            <h2 class="titulo-secao">
                Capítulos
            </h2>


            <div class="capitulos">

                ${capitulos.map(capitulo => `

                    <article
                        class="capitulo"
                        onclick="abrirCapitulo(${capitulo.id})"
                    >

                        <div class="capitulo-numero">
                            CAPÍTULO ${String(capitulo.id).padStart(2, "0")}
                        </div>

                        <h3>
                            ${capitulo.titulo}
                        </h3>

                        <p>
                            ${capitulo.descricao}
                        </p>

                    </article>

                `).join("")}

            </div>

        </section>

    `;

}


/* ==================================================
   ABRIR CAPÍTULO
================================================== */

function abrirCapitulo(idCapitulo) {

    const capitulo = capitulos.find(
        capitulo => capitulo.id === idCapitulo
    );


    if (!capitulo) return;


    app.innerHTML = `

        <section>

            <a
                class="botao-voltar"
                onclick="mostrarInicio()"
            >
                ← Voltar
            </a>


            <h2 class="titulo-secao">

                ${capitulo.titulo}

            </h2>


            <div class="lista-poemas">

                ${capitulo.poemas.map(poema => `

                    <article
                        class="poema-item"
                        onclick="abrirPoema(${capitulo.id}, ${poema.id})"
                    >

                        <h3>
                            ${poema.titulo}
                        </h3>

                        <span>
                            Ler →
                        </span>

                    </article>

                `).join("")}

            </div>

        </section>

    `;

}


/* ==================================================
   ABRIR POEMA
================================================== */

function abrirPoema(idCapitulo, idPoema) {

    const capitulo = capitulos.find(
        capitulo => capitulo.id === idCapitulo
    );


    if (!capitulo) return;


    const poema = capitulo.poemas.find(
        poema => poema.id === idPoema
    );


    if (!poema) return;


    app.innerHTML = `

        <article class="leitura">

            <a
                class="botao-voltar"
                onclick="abrirCapitulo(${capitulo.id})"
            >
                ← Voltar para ${capitulo.titulo}
            </a>


            <h1>
                ${poema.titulo}
            </h1>


            <div class="capitulo-info">

                ${capitulo.titulo}

            </div>


            <div class="texto-poema">

                ${poema.texto}

            </div>

        </article>

    `;

}


/* ==================================================
   INICIAR SITE
================================================== */

window.voltarInicio = voltarInicio;
window.mostrarInicio = mostrarInicio;
window.abrirCapitulo = abrirCapitulo;
window.abrirPoema = abrirPoema;

mostrarInicio();