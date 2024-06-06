var DiasDaSemana;
(function (DiasDaSemana) {
    DiasDaSemana[DiasDaSemana["Segunda"] = 0] = "Segunda";
    DiasDaSemana[DiasDaSemana["Ter\u00E7a"] = 1] = "Ter\u00E7a";
    DiasDaSemana[DiasDaSemana["Quarta"] = 2] = "Quarta";
    DiasDaSemana[DiasDaSemana["Quinta"] = 3] = "Quinta";
    DiasDaSemana[DiasDaSemana["Sexta"] = 4] = "Sexta";
    DiasDaSemana[DiasDaSemana["S\u00E1bado"] = 5] = "S\u00E1bado";
    DiasDaSemana[DiasDaSemana["Domingo"] = 6] = "Domingo";
})(DiasDaSemana || (DiasDaSemana = {}));
console.log(DiasDaSemana.Segunda);
var Cores;
(function (Cores) {
    Cores["Vermelho"] = "#FF0000";
    Cores["Verde"] = "#00FF00";
    Cores["Azul"] = "#0000FF";
})(Cores || (Cores = {}));
console.log(Cores.Verde);
var Direcoes;
(function (Direcoes) {
    Direcoes[Direcoes["Norte"] = 0] = "Norte";
    Direcoes[Direcoes["Sul"] = 1] = "Sul";
    Direcoes[Direcoes["Leste"] = 2] = "Leste";
    Direcoes[Direcoes["Oeste"] = 3] = "Oeste";
})(Direcoes || (Direcoes = {}));
for (var direcao in Direcoes) {
    console.log(direcao);
}
