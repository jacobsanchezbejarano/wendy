const section_prueba = document.querySelectorAll("#prueba");

// JSON - JavaScript Object Notation
const datos2 = [
    {
        "nombre":"Jacob",
        "apellido":"Sanchez",
        "edad":"28"
    },
    {
        "nombre":"Jacob",
        "apellido":"Sanchez",
        "edad":"28"
    },
];


function crearCard(item){
    let div = document.createElement("div");

    let parrafo_nombre = document.createElement("p");
    parrafo_nombre.innerHTML = item.nombre;

    let parrafo_apellido = document.createElement("p");
    parrafo_apellido.innerHTML = item.apellido;

    let parrafo_edad = document.createElement("p");
    parrafo_edad.innerHTML = item.edad;

    div.appendChild(parrafo_nombre);
    div.appendChild(parrafo_apellido);
    div.appendChild(parrafo_edad);
    return div;
}

function agregarCardsASection(){
    datos2.forEach((item)=>{
        section_prueba.forEach((item2)=>{
            item2.appendChild(crearCard(item))
        });
    })
}

agregarCardsASection();