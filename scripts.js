/* 
Metodos de Acceso a los Elementos (nodos)
getElementById('id') // retorna el elemento segun su ID
getElementsByClassName('class') // retorna una coleccion de elementos segun la clase que contiene
getElementsByTagName('tag') // retorna una coleccion de elementos segun la etiqueta o tag dado
getElementsByName('name') // retorna una coleccion de elementos segun el valor del atributo name
querySelector('selector_css') // retorna el primer elemento con el selector css dado
querySelectorAll('selector_css') // retorna todos los elementos con el selector css dado

Metodos de Creacion de Elementos (nodos)
createElement('tag') // crear un nuevo elemento segun la etiqueta dada
createTextNode('texto') // crear un nuevo texto segun el valor dado
 
*/

function saludo(){
    let mensaje = document.getElementById('mensaje');
    mensaje.innerHTML = "Saludando desde DOM con eventos";
}

function escribir(element){
    console.log(element);
}

function addMensaje(){
    alert("Hola Mundo");
}

function mover(element){
    element.style.position = 'absolute';
    element.style.top = '200px';
    element.style.left = '400px';
    element.innerHTML = "Se movio el elemento"
}

function addItem(){
    let lista = document.querySelector('#lista');
    let li = document.createElement('li');
    li.innerHTML = "New Item";
    lista.appendChild(li);
}
//saludo();

let btnAddRow = document.querySelector('.addRow');

let counter = 1;

btnAddRow.addEventListener('click', (evento) => {
    console.log(evento);
    let info = document.getElementById('info');

    let tr = document.createElement('tr');
    let tdNro = document.createElement('td');
    let tdName = document.createElement('td');
    let tdEmail = document.createElement('td');
    let tdPhone = document.createElement('td');
    let tdAction = document.createElement('td');

    tdNro.innerHTML = counter;
    tdName.innerText = "User " + counter;
    tdEmail.innerHTML = `user${counter}@gmail.com`;
    tdPhone.innerHTML = "+ 1 111 111 11 11";
    tdAction.innerHTML = '<button class="btn btn-info btn-sm"> - </button>';

    tr.appendChild(tdNro);
    tr.appendChild(tdName);
    tr.appendChild(tdEmail);
    tr.appendChild(tdPhone);
    tr.appendChild(tdAction);

    info.appendChild(tr);
    counter++;
})

let box = document.querySelector('.box');

const estadoOriginal = (evento) => {
    console.log(evento.type)
    evento.target.style.backgroundColor = '#cc1122';
}

box.addEventListener('mouseover', (evento) => {
    console.log(evento.type)
    evento.target.style.backgroundColor = '#3b34bd';
})

box.addEventListener('mouseout', estadoOriginal)

