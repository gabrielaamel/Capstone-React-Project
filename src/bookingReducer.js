// bookingReducer.js

// 🚀 FUNCIÓN COMPLEMENTARIA: Generador de números aleatorios basado en la fecha
const seededRandom = function (seed) {
  var m = 2 ** 35 - 31;
  var a = 185852;
  var s = seed % m;
  return function () {
    return (s = (s * a) % m) / m;
  };
};

// 🚀 NUESTRA PROPIA COPIA DE FETCHAPI: Hace exactamente lo mismo que el script de Coursera
const localFetchAPI = function (date) {
let result = [];
let random = seededRandom(date.getDate());

for (let i = 17; i <= 23; i++) {
    if (random() < 0.5) {
    result.push(i + ":00");
    }
    if (random() < 0.5) {
    result.push(i + ":30");
    }
}
return result;
};

// 1. Carga las horas de hoy de forma segura y local
export function initializeTimes() {
const today = new Date();
return localFetchAPI(today);
}

// 2. Actualiza las horas según la fecha elegida
export function updateTimes(state, action) {
if (action.type === "UPDATE_TIMES") {
    return localFetchAPI(new Date(action.payload));
}
return state;
}
