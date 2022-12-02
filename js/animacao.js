/*MENU MOBILE*/
document.querySelector(".abrirMenu").onclick = function(){
    document.documentElement.classList.add("menuAtivo");
}
document.querySelector(".fecharMenu").onclick = function(){
    document.documentElement.classList.remove("menuAtivo")
}
document.querySelector(".fechar").onclick = function(){
    document.documentElement.classList.remove("menuAtivo");
}