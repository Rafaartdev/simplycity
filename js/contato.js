/* Seleciondo os elementos que serão manipuçados */
const formulario = document.querySelector("form");
const campoCep = document.querySelector("#cep");
const campoTelefone = document.querySelector("#telefone");
const campoEndereco = document.querySelector("#endereco");
const campoBairro = document.querySelector("#bairro");
const campoCidade = document.querySelector("#cidade");
const campoEstado = document.querySelector("#estado");
const botaoBuscar = document.querySelector("#buscar");
const mensagemStatus = document.querySelector("#status");

//Ouvinte de evento para o botão Buscar 
botaoBuscar.addEventListener("click", async function () {
    //Verififando se o CEP digitado não tem 9 digitos
    if (campoCep.value.length !== 9) {
        mensagemStatus.innerHTML = "Digite um CEP válido";
        mensagemStatus.style.color = "purple";

        // Parar completamente a execução do código 
        return;
    }

    let cepDigitado = campoCep.value;
    console.log(cepDigitado);

    /*AJAX - asyncronous JavaScript And XML 
    Técnica de comubicação assincrona (transmissão, recrbimento) de dados Muito Usada entre diferentes tipos de sistemas (site, aplicativo, jogo, software) e tecnologias (PHP, ASP, Java etc). */

    //Etapa 1: preparamos oendereco junyo com o CEP digitado
    let endereco = `https://viacep.com.br/ws/${cepDigitado}/json/`;
    console.log(endereco);

    // Etapa 2: acessa,os o viaCEP com o endereõ ajustado
    const resposta = await fetch(endereco);


    // Etapa 3: extrair os dadps que o viaCEP preocessou
    const dados = await resposta.json(); //formato de OBJETO
    console.log(dados);

    // Etapa 4: lidando com os dados (em caso de erro ou sucesso)
    if ("erro" in dados) {
        mensagemStatus.innerHTML = "CEP inexistente! 😪";
        mensagemStatus.style.color = "red";
    } else {
        mensagemStatus.innerHTML = "CEP encontrado! 😅";
        mensagemStatus.style.color = "blue";


        // Selecionado os campos que estão escondidos
        const campos = document.querySelectorAll(".campos-restantes");

        //Loop for parra acessar cada campo e remover a classe
        //fazendo com que cada campo volte a aparecer na tela
        for (let i = 0; i < campos.length; i++) {
            campos[i].classList.remove("campos-restantes");
        }
       campoEndereco.value = dados.logradouro;
       campoBairro.value = dados.bairro;
       campoCidade.value = dados.localidade;
       campoEstado.value = dados.uf;
    }



}); // FINAL DA FUNÇÃO DO BOTÃO BUDCAR