phone = window.document.querySelector("#phone");

phone.addEventListener("mouseover", function(){

    lista_apps = document.querySelector("#arrow").classList.toggle("show_arrow")
})

arrow = window.document.querySelector("#arrow");

arrow.addEventListener("click", function(){

    lista_apps = document.querySelector(".lista_apps").classList.toggle("show_apps")

})











