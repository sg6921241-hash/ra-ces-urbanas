const botones = document.querySelectorAll(".acordeon-btn");

botones.forEach(boton => {
    boton.addEventListener("click", () => {

        const contenido = boton.nextElementSibling;

        if(contenido.style.display === "block"){
            contenido.style.display = "none";
        } else{
            contenido.style.display = "block";
        }

    });
});
const elementos = document.querySelectorAll(".animado");

function mostrarElementos(){
  elementos.forEach(el => {
    const posicion = el.getBoundingClientRect().top;
    const alturaPantalla = window.innerHeight;

    if(posicion < alturaPantalla - 100){
      el.classList.add("mostrar");
    }
  });
}
const plantas = {

    tomate: {

        estacion: "Primavera y verano",
        luz: "6 a 8 horas de sol directo",
        riego: "Cada 1 o 2 días",
        suelo: "Fértil y con buen drenaje",
        crecimiento: "70 a 90 días",
        cosecha: "Frutos rojos firmes",
        cuidados: "Necesita soporte y poda",
        errores: "El exceso de agua pudre las raíces",
        notas: "Es una de las plantas más populares en huertos urbanos"

    },

    lechuga: {

        estacion: "Primavera y otoño",
        luz: "Luz suave o media sombra",
        riego: "Ligero y constante",
        suelo: "Húmedo y ligero",
        crecimiento: "30 a 45 días",
        cosecha: "Hojas verdes tiernas",
        cuidados: "Evitar calor extremo",
        errores: "El calor amarga las hojas",
        notas: "Ideal para principiantes"

    },

    zanahoria: {

        estacion: "Otoño e invierno",
        luz: "6 horas de sol",
        riego: "Moderado",
        suelo: "Profundo y suelto",
        crecimiento: "70 a 80 días",
        cosecha: "Raíz firme y naranja",
        cuidados: "No compactar la tierra",
        errores: "Las piedras deforman la raíz",
        notas: "Necesita suficiente profundidad"

    },

    pepino: {

        estacion: "Primavera y verano",
        luz: "Sol directo",
        riego: "Frecuente",
        suelo: "Húmedo y fértil",
        crecimiento: "50 a 70 días",
        cosecha: "Frutos verdes largos",
        cuidados: "Necesita espacio y soporte",
        errores: "La falta de agua afecta la producción",
        notas: "Crece rápidamente en clima cálido"

    }

};

function buscarPlanta(){

    const input = document
        .getElementById("inputPlanta")
        .value
        .toLowerCase()
        .trim();

    const resultado = document.getElementById("resultado");

    const planta = plantas[input];

    if(planta){

        resultado.innerHTML = `

            <div class="card">

                <h2>${input.toUpperCase()}</h2>

                <p><strong>Estación ideal:</strong> ${planta.estacion}</p>

                <p><strong>Luz:</strong> ${planta.luz}</p>

                <p><strong>Riego:</strong> ${planta.riego}</p>

                <p><strong>Suelo:</strong> ${planta.suelo}</p>

                <p><strong>Tiempo de crecimiento:</strong> ${planta.crecimiento}</p>

                <p><strong>Cosecha:</strong> ${planta.cosecha}</p>

                <p><strong>Cuidados:</strong> ${planta.cuidados}</p>

                <p><strong>Errores comunes:</strong> ${planta.errores}</p>

                <p><strong>Notas:</strong> ${planta.notas}</p>

            </div>

        `;

    } else {

        resultado.innerHTML = `

            <div class="card">

                <p>
                    No se encontró el cultivo.
                    Intenta escribir:
                    tomate, lechuga, zanahoria o pepino.
                </p>

            </div>

        `;

    }

}
function guardarRegistro(){

    const cultivo = document.getElementById("cultivo").value;

    const fecha = document.getElementById("fecha").value;

    const estado = document.getElementById("estado").value;

    const altura = document.getElementById("altura").value;

    const notas = document.getElementById("notas").value;

    const imagen = document.getElementById("imagen");

    const contenedor = document.getElementById("contenedor");

    const tarjeta = document.createElement("div");

    tarjeta.classList.add("tarjeta");

    if(imagen.files[0]){

        const lector = new FileReader();

        lector.onload = function(e){

            tarjeta.innerHTML = `

                <h2>${cultivo}</h2>

                <p><strong>Fecha:</strong> ${fecha}</p>

                <p><strong>Etapa:</strong> ${estado}</p>

                <p><strong>Altura:</strong> ${altura}</p>

                <p><strong>Observaciones:</strong> ${notas}</p>

                <img src="${e.target.result}">

            `;

        }

        lector.readAsDataURL(imagen.files[0]);

    } else {

        tarjeta.innerHTML = `

            <h2>${cultivo}</h2>

            <p><strong>Fecha:</strong> ${fecha}</p>

            <p><strong>Etapa:</strong> ${estado}</p>

            <p><strong>Altura:</strong> ${altura}</p>

            <p><strong>Observaciones:</strong> ${notas}</p>

        `;

    }

    contenedor.appendChild(tarjeta);

}