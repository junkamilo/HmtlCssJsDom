export const generos = async (formulario) => {
    try {
        const data = await fetch('../json/generos.json');
    const generos = await data.json();

    //creamos los elementos
    const div = document.createElement("div");
    
    //agregamos estilos a los elementos
    div.classList.add("div_generos");
    const opciones = document.createDocumentFragment();

    generos.forEach(({tipo , id}) => {
        // div
        const $div = document.createElement("div");

        //Creamos el label
        const $label = document.createElement("label");
        //Le agregamos el atributo for
        $label.setAttribute("for" , `genero_${id}`);
        //Le agregamos el texto
        $label.textContent = tipo;

        //Creamos el input
        const $input = document.createElement("input");
        //Le agregamos el atributo
        $input.setAttribute("type" , "radio");
        // id
        $input.id = `genero_${id}`;
        $input.name = "genero"
        // value
        $input.value = id;

        // agregar el label y el input al div
        $div.append($label , $input);

        // lo clonamos
        const clon = document.importNode($div , true);
        opciones.append(clon);

    });
    const btn = formulario.querySelector("button");
    btn.insertAdjacentElement("beforebegin" , div);
    div.append(opciones);
    } catch (error) {
        console.error("Error al cargar el archivo JSON" , error);
        
    }
    
}