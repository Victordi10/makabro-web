/* const header = document.querySelector('header'); */
let burger = document.getElementById("burger");
let close = document.getElementById("close");
let menuPhone = document.getElementById("heContainerPhone");

burger.addEventListener("click", mostrarMenu);
close.addEventListener("click", cerrarMenu);

function mostrarMenu() {
    burger.style.display = "none";
    close.style.display = "block"
        /* header.classList.add('headerColor'); */
    menuPhone.classList.add("mostrarMenu");
}

function cerrarMenu() {
    if (menuPhone.classList.contains("mostrarMenu")) {
        menuPhone.classList.remove("mostrarMenu");
        burger.style.display = "block";
        close.style.display = "none"
        
        /* if (window.scrollY < 100){
            header.classList.remove('headerColor');
        } */
    }
}
window.addEventListener("scroll",function(){
    cerrarMenu()
})

//ajustes para el cover
document.addEventListener('DOMContentLoaded', function() {
    const coverImg = document.querySelector(".cover-image");
    const videoCover = document.querySelector(".cover-video");
    
    // Ocultar la imagen después de un retraso
    setTimeout(() => {
        coverImg.style.opacity = '0';
        coverImg.style.transition = 'opacity .5s ease';
        setTimeout(() => {
            coverImg.style.display = 'none';
        }, 500);
    // Mostrar el video
        videoCover.style.display = 'block';
        videoCover.play(); // Reproducir el video automáticamente
}, 3000);
    
    
});





//ajustes para la carta 
const categoriasCarta = document.querySelectorAll(".car-header_categoria");

categoriasCarta.forEach(categoria => {
    categoria.addEventListener("click", function(event) {
        // Eliminar la clase "headerSelec" de todos los botones
        categoriasCarta.forEach(categoria => {
            categoria.classList.remove("headerSelec");
        });
        
        // Agregar la clase "headerSelec" al botón clickeado
        event.target.classList.add("headerSelec");

        const menu = event.target.dataset.menu;
        console.log(menu);
        mostrarCategoria(menu);
    });
});
window.addEventListener("load",function(){
    categoriasCarta[0].classList.add("headerSelec");
})


const mostrarCategoria = (menu) => {
    const cateContainers = document.querySelectorAll(".car-container_categoria");
    cateContainers.forEach(categoria => {
        if (categoria.id === menu) {
            categoria.classList.remove("conNone");
        } else {
            categoria.classList.add("conNone");
        }
    });
};


// Restaurar todos los productos al cargar la página
document.addEventListener("DOMContentLoaded", function () {
    mostrarCategoria("sopas");
});


