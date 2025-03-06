const dom = document;
const is_valid = (event , formulario) => {
    event.preventDefault();
    const lista = dom.querySelectorAll(formulario);
    console.log(lista[0].selectedIndex);
    
    console.log(lista[0].selectedIndex == 0);
    if (lista[0].selectedIndex == 0) {
        lista[0].classList.toggle("error");
    }
    
    let bandera = true;
    return bandera;
    
}
export default is_valid;