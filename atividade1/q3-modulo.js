export function data(dia, mes, ano) {
  return ` ${dia + ""}/${mes + ""}/${ano + ""}`;
}

export function horas(hora, min) {
  return ` ${hora + ""}:${min + ""} `;
}

export function dataExtenso(diaSemana, dia, mes, ano) {
  return ` ${diaSemana}, ${dia} de ${mes} de ${ano} `;
}
