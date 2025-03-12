const dom = document;
const is_valid = (event , formulario) => {
    event.preventDefault();
    const lista = dom.querySelector(formulario);
    console.log(lista.children);
    for (const child of lista.children) {
        if (child.tagName == "SELECT") {
            console.log(child.tagName == "SELECT");
            //console.log(child.tagName);
            //console.log(child.attributes);
            for (const name of child.getAttributeNames()) {
                const value = child.dataset.required;
                if (name === "data-required" && value === "true") {
                    //console.log(name , value, child);
                    if (child.selectedIndex == 0) {
                        child.classList.add("error");
                    }else{
                        child.classList.remove("error");
                    }
                    
                }
            }
        }if (child.tagName == "INPUT") {
            child.setAttribute("data-required" , "true");
            //console.log(child.tagName == "INPUT");
            //console.log(child.tagName);
            //console.log(child.attributes);
            for (const name of child.getAttributeNames()) {
                const value = child.dataset.required;
                if (name === "data-required" && value === "true") {
                    //console.log(name , value, child);
                    if (child.selectedIndex == 0) {
                        child.classList.add("error");
                    }else{
                        child.classList.remove("error");
                    }
                    
                }
            }
        }
        
    }
    let bandera = true;
    return bandera;
}
export default is_valid;