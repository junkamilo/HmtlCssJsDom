export const gustos = async (formulario) => {
    const data = await fetch('../json/gustos.json');
    const generos = await data.json();

    //creamos los elementos
    const div = document.createElement("div");
    const h3 = document.createElement("h3");

    //agregamos estilos
    div.classList.add("div_gustos");
    h3.classList.add("center");

    //agreamos texto
    h3.textContent = "Selecciona tus lenguajes";

    const opciones = document.createDocumentFragment();
    generos.forEach(({name , id}) =>{
        // div
        const $div = document.createElement("div");

        //Creamos el label
        const $label = document.createElement("label");
        //Le agregamos el atributo for
        $label.setAttribute("for" , `genero_${id}`);
        //Le agregamos el texto
        $label.textContent = name;

        //Creamos el input
        const $input = document.createElement("input");
        //Le agregamos el atributo
        $input.setAttribute("type" , "checkbox");
        // id
        $input.id = `genero_${id}`;
        $input.name = "genero";
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

}