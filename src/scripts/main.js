AOS.init();

const dataDoEvento = new Date("May 18, 2024 19:00:00");
const timeStampDoEvento = dataDoEvento.getTime();

const contaAsHoras = setInterval(function () {
  const agora = new Date();
  const timeStampAtual = agora.getTime();

  const distaciaAteOEvento = timeStampDoEvento - timeStampAtual;

  const diaEmMs = 1000 * 60 * 60 * 24;
  const horasEmMs = 1000 * 60 * 60;
  const minutoEmMs = 1000 * 60;
  const segundosEmMs = 1000;

  const diasAteOEvento = Math.floor(distaciaAteOEvento / diaEmMs);
  const horasAteOEvento = Math.floor(
    (distaciaAteOEvento % diaEmMs) / horasEmMs
  );
  const minutosAteOEvento = Math.floor(
    (distaciaAteOEvento % horasEmMs) / minutoEmMs
  );
  const segundosAteOEvento = Math.floor(
    (distaciaAteOEvento % minutoEmMs) / segundosEmMs
  );

  document.getElementById(
    "contador"
  ).innerHTML = `${diasAteOEvento}d ${horasAteOEvento}h ${minutosAteOEvento}m ${segundosAteOEvento}s`;

  if (distaciaAteOEvento < 0) {
    clearInterval(contaAsHoras);
    document.getElementById("contador").innerHTML = `Evento expirado`;
  }
}, 1000);