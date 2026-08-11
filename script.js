const botaoDoTema = document.getElementById("botao_mudar_tema");
function alterarModo(){
    if(document.body.classList.toggle("temaEscuro")){
        botaoDoTema.textContent = "modo claro"
    }else{
        botaoDoTema.textContent = "modo escuro"
    }
}
botaoDoTema.addEventListener("click",alterarModo)