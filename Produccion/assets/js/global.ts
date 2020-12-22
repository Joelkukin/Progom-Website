var boton:Element = document.querySelector(".boton");

boton.addEventListener("click", (): void=>{
    
    var Id=boton.id;
    debugger
    (Id) => {
        //ocultar todas las paginas
        var pages = document.querySelectorAll(".page");
        pages.forEach(function (page) {
            if (page.classList.contains("d-none") === false) {
                page.classList.add("d-none");
                console.log(page + " ocultada");
            }
        });
        alert("click");
        //mostrar pagina seleccionada
        var param=`.${Id}`;
        var container:Element = document.querySelector(param);
        alert(container);
        container.classList.remove("d-none");
    };
});
