//Selecionando a palavra "Menu"
const botaoMenu = document.querySelector(".titulo-menu a")

// Selecionando a lista de links do Menu
const listaDelinks = document.querySelector(".links-menu");

// Ouvinte de eventopara clicar mo botao Menu
botaoMenu.addEventListener("click", function(event){
    // Amulando o comportamento padrão domlink
    event.preventDefault();
    console.log("Opaaaa");
    
    // Alternar a classe aberto entre ativado e desativado
    listaDelinks.classList.toggle("aberto");

    if(listaDelinks.classList.contains("aberto")){
        botaoMenu.innerHTML =  "Fechar &times;"
    } else {
        botaoMenu.innerHTML = "Menu &equiv;"
    }
});