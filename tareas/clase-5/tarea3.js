//TAREA: En otro archivo distinto,
// Por cada clase de r/argentina programa existente, vamos a pedir:
// horas, minutos y segundos de cada video. Ej. Si un video dura
// 2 horas, 38 minutos y 20 segundos, vamos a rellenar 3 campos de texto con
// cada dato.
// al apretar el botón "Calcular tiempo total", debe mostrar en un
// <strong> pre-creado el tiempo total de los videos.

const formTiempoVideos = document.querySelector("#calcular-tiempo-videos");

formTiempoVideos.onclick = function(){
  let horasTotales = 0
  let minutosTotales = 0
  let segundosTotales = 0
  for(let i = 1; i <= 4; i++){
    horasTotales += Number(document.querySelector(`#horas${i}`).value);
    minutosTotales += Number(document.querySelector(`#minutos${i}`).value);
    segundosTotales += Number(document.querySelector(`#segundos${i}`).value);
  }

  minutosTotales += Math.floor(segundosTotales / 60)
  segundosTotales = segundosTotales % 60

  horasTotales += Math.floor(minutosTotales / 60)
  minutosTotales = minutosTotales % 60

  let tiempoVideos = `${horasTotales} horas ${minutosTotales} minutos ${segundosTotales} segundos`

  let mostrarTiempoVideos = document.querySelector('#tiempo-total');
  mostrarTiempoVideos.innerText = tiempoVideos;
}
