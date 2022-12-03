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

/*BANNER*/
$(document).ready(function(){
    $('.banner').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 4000,
      });
  });