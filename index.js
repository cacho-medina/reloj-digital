const mesesDelAnio = [
    "Enero",
    "Febrero",
    "Marzo",
    "Abril",
    "Mayo",
    "Junio",
    "Julio",
    "Agosto",
    "Septiembre",
    "Octubre",
    "Noviembre",
    "Diciembre",
];

const obtenerFechaConFormato = () => {
    const fechaActual = new Date();
    const dia = fechaActual.getDate();
    const mes = fechaActual.getMonth();
    const anio = fechaActual.getFullYear();
    const opciones = { weekday: "long" };
    const diaDeLaSemana = fechaActual.toLocaleDateString("es-AR", opciones);
    return `${getPalabra(diaDeLaSemana)} ${dia} de ${
        mesesDelAnio[mes]
    } del ${anio}`;
};
const obtenerHorario = () => {
    const horario = new Date();
    const hora = horario.getHours();
    const minutos = horario.getMinutes();
    const segundos = horario.getSeconds();

    const showSegundos = document.createElement("span");
    showSegundos.setAttribute("class", "fw-semibold fs-4");
    showSegundos.innerText = `${segundos}`;
    const franja = document.createElement("span");
    franja.setAttribute("class", "fw-semibold fs-3");
    franja.innerText = `${hora <= 12 ? "AM" : "PM"}`;
    const p = document.createElement("p");
    p.setAttribute("class", "hora m-0 fw-semibold");
    p.innerHTML = `${hora}:${minutos}:`;
    const div = document.getElementById("hora");
    const aux = document.createElement("div");
    aux.setAttribute(
        "class",
        "d-flex flex-column justify-content-center align-items-center"
    );
    aux.appendChild(franja);
    aux.appendChild(showSegundos);
    div.appendChild(p);
    div.appendChild(aux);
};
const fechaConFormato = obtenerFechaConFormato();
const horaConFormato = obtenerHorario();

const fecha = document.querySelector(".fecha");
const horario = document.querySelector(".hora");
fecha.innerText = fechaConFormato;

function getPalabra(palabra) {
    return palabra.charAt(0).toUpperCase() + palabra.slice(1);
}
