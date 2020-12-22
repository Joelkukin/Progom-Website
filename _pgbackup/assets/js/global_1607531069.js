function irA(ruta){
    var contenedor=document.querySelector("#main");
    contenedor.src=`pages/${ruta}.html`;
    alert(ruta);
}