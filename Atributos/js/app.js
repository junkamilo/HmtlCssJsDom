//1.importaciones
//2.variables y constantes
//3.metodos
//4.eventos

import { generos } from "./generos.js";
import { gustos } from "./gustos.js";
import { ciudades } from "./ciudades.js";
import  is_valid  from "./validando_formulario.js"


//capturamos los elementos
const formulario = document.querySelector("#formulario");
const nombre = document.querySelector("#nombre");
const apellido = document.querySelector("#apellido");
const telefono = document.querySelector("#telefono");
const documento = document.querySelector("#documento");
const usuario = document.querySelector("#usuario");
const contrasena = document.querySelector("#contrasena");
const btn = document.querySelector("button");
const body = document.querySelector("body");

//creamos los elementos
const terminos = document.createElement("input");

//agregamos atributod a los elementos
terminos.setAttribute("type" , "checkbox");
btn.insertAdjacentElement("beforebegin", terminos);


//validamos cada uno de los elementos selecionado
// const validar = (event) => {
//     event.preventDefault();
    
//     if(nombre.value === ''){
//         alert("El nombre es obligatorio");
//         nombre.focus();
//     }else if(apellido.value === ''){
//         alert("El apellido es obligatorio");
//         apellido.focus();
//     }else if(telefono.value === ''){
//         alert("El telefono es obligatorio");
//         telefono.focus();
//     }else if(documento.value === ''){
//         alert("El documento es obligatorio");
//         documento.focus();
//     }else if(usuario.value === ''){
//         alert("El documento es obligatorio");
//         usuario.focus();
//     }else if(contrasena.value === ''){
//         alert("El documento es obligatorio");
//         contrasena.focus();
//     }else{
//         alert("Datos no validos");
//     }
// }

const validando_formulario = (event) =>{
    let a = is_valid(event , 'form');
    //console.log(a);
    
};
const submit = () => {
    alert("enviado el formulario");
};

const contextmenu = () =>{
alert("bienvenido al body");
};

const dblclick = () => {
    alert("Binevenido al body con doble click")
}

const mausedown = () =>{
    alert("El eveneto funciona cuando se preciona cualquier boton sobre el evento");
}
const keydown = (event) => {
    console.log(`Presionate la tecla ${event.key}`)
}
const validar_terminos = () => {
//    if(terminos.checked){
//      btn.setAttribute("disable" , "")
//   }else{
//     btn.removeAttribute("disable");
//    }
// btn.disabled =! terminos.checked;
(!terminos.checked) ? btn.setAttribute("disabled", "") : btn.removeAttribute("disabled");
}

//accciones de eventos:
formulario.addEventListener('submit' , submit)
btn.addEventListener('click' , validando_formulario);
//formulario.addEventListener('contextmenu' );
//body.addEventListener('contextmenu' , contextmenu);//accion con el click izquierdos
//body.addEventListener('dblclick' , dblclick);//accion con doble click
//body.addEventListener('contextmenu' , contextmenu);//accion con el contenido del formulario
//body.addEventListener('mousedown' , mausedown);//accion con cualquier boton del evento
nombre.addEventListener('keydown' , keydown);
terminos.addEventListener("change" , validar_terminos);

//variables y constantes
// const input = document.querySelector("input");
// const formulario = document.querySelector("form");
// const btn_validar = document.querySelector("button");
// const contasena = document.querySelector('input[type="password"]');

// input.value = "Juan camilo";
// console.log(contasena.value ? 'lleno' : 'vacio');//condicional ternario
// contasena.setAttribute("type" , "text");//cambiamos el atributo de contraseña

// //creamos el elemento
// const btn = document.createElement("a");
// btn.textContent = "Login";
// btn.classList.add("btn" , "btn:hover");
// btn.setAttribute("title" , "ingrese aqui");

// formulario.append(btn);


// const validar = (event) => {//creamos una función expresada.
//     event.preventDefault();//le aplicamos un evento.
//     if (contasena.value === "123") {//valuamos el input de contraseña.
//         formulario.submit//el sudmit
//     }else{
//         alert("Datos no validos");
//     }
// }
//btn_validar.addEventListener('click' , validar);


//con archivo json





ciudades(formulario);
generos(formulario);
gustos(formulario);


// const checkbox = document.createElement('input');
// checkbox.setAttribute("type" , "checkbox");
// // btn.disabled = true;
// // checkbox.addEventListener('click', ()=>{
// //     if(checkbox.checked){
// //         btn.disabled = false;
// //         btn.classList.remove(".button_disable");
// //     }else{
// //         btn.disabled = true;
// //         btn.classList.add(".button_disable");
// //     }
// // });
// btn.disabled = true;
// const validar_button = () => {
//     if(checkbox.checked){
//         btn.disabled = false;
//         btn.classList.remove("button_disable");
//     }else{
//         btn.disabled = true;
//         btn.classList.add("button_disable");
//     }
// }
// checkbox.addEventListener('click' , validar_button);
// formulario.append(checkbox);