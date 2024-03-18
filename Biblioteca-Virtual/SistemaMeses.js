"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var promptSync = require("prompt-sync");
var prompt = promptSync();
var Generos_1 = require("./Generos");
var Status_1 = require("./Status");
var Cliente_1 = require("./Cliente");
var Livro_1 = require("./Livro");
var currentDate = new Date().toDateString();
// Calendário
// Ano Atual
// Janeiro
var Jan = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];
// Fevereiro
var Feb = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29];
// Março
var Mar = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];
// Abril
var Apr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30];
// Maio
var May = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];
// Junho
var Jun = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30];
// Julho
var Jul = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];
// Agosto
var Aug = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];
// Setembro
var Sep = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30];
// Outubro
var Oct = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];
// Novembro
var Nov = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30];
// Dezembro
var Dec = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];
// Próximo ano 
var JanX = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];
var FebX = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28];
var MarX = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];
var AprX = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30];
var MayX = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];
var JunX = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30];
var JulX = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];
var AugX = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];
var SepX = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30];
var OctX = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];
var NovX = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30];
var DecX = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];
//Tendo 2 anos para que não tenha conflito caso o ano vire
var year = [Jan, Feb, Mar, Apr, May, Jun, Jul, Aug, Sep, Oct, Nov, Dec, JanX, FebX, MarX, AprX, MayX, JunX, JulX, AugX, SepX, OctX, NovX, DecX];
//Ano atual 
var JanNumber = 0;
var FebNumber = 1;
var MarNumber = 2;
var AprNumber = 3;
var MayNumber = 4;
var JunNumber = 5;
var JulNumber = 6;
var AugNumber = 7;
var SepNumber = 8;
var OctNumber = 9;
var NovNumber = 10;
var DecNumber = 11;
var JanNumberX = 12;
var FebNumberX = 13;
var MarNumberX = 14;
var AprNumberX = 15;
var MayNumberX = 16;
var JunNumberX = 17;
var JulNumberX = 18;
var AugNumberX = 19;
var SepNumberX = 20;
var OctNumberX = 21;
var NovNumberX = 22;
var DecNumberX = 23;
// Supondo que seja hoje
//current date sendo o dia do devolvimento
function verificarMulta(ddd, currentDate) {
    //Variáveis caso seja o mesmo mês
    var emptyBottleDay = '';
    var emptyBottleMonth = '';
    var dayDevolucao = '';
    var monthDevolucao = '';
    var yearMonthDevolucao = '';
    var yearEmptyBottleMonth = '';
    var multa = 3;
    var multaFinal = 0;
    //Variáveis caso não seja o mesmo mês
    var mesQueDevolveuComparacao = 0;
    var mesQueDeveriaSerEntregeComparacao = 0;
    //Pegar dia
    for (var i = 8; i < 9 + 1; i++) {
        dayDevolucao += currentDate[i];
        emptyBottleDay += ddd[i];
    }
    //Pegar mes
    for (var i = 4; i < 6 + 1; i++) {
        monthDevolucao += currentDate[i];
        emptyBottleMonth += ddd[i];
    }
    //pegar ano
    for (var i = 11; i < 14 + 1; i++) {
        yearMonthDevolucao += currentDate[i];
        yearEmptyBottleMonth += ddd[i];
    }
    if (yearMonthDevolucao === '2025') {
        for (var i = 7; i < 8; i++) {
            monthDevolucao += 'X';
        }
    }
    if (yearEmptyBottleMonth === '2025') {
        for (var i = 7; i < 8; i++) {
            emptyBottleMonth += 'X';
        }
    }
    if ((emptyBottleMonth === monthDevolucao) && (parseInt(dayDevolucao) <= parseInt(emptyBottleDay))) {
        console.log("Não há multa");
        return false;
    }
    if (parseInt(dayDevolucao) > parseInt(emptyBottleDay) && emptyBottleMonth === monthDevolucao) {
        for (var i = parseInt(emptyBottleDay); i < parseInt(dayDevolucao); i++) {
            multaFinal += multa;
        }
        console.log("Multa a ser paga: ".concat(multaFinal, "\u00A3"));
        return true;
    }
    else {
        //Meses para mes devolução
        //2024
        if (monthDevolucao === 'Jan') {
            mesQueDevolveuComparacao = JanNumber;
        }
        else if (monthDevolucao === 'Feb') {
            mesQueDevolveuComparacao = FebNumber;
        }
        else if (monthDevolucao === 'Mar') {
            mesQueDevolveuComparacao = MarNumber;
        }
        else if (monthDevolucao === 'Apr') {
            mesQueDevolveuComparacao = AprNumber;
        }
        else if (monthDevolucao === 'May') {
            mesQueDevolveuComparacao = MayNumber;
        }
        else if (monthDevolucao === 'Jun') {
            mesQueDevolveuComparacao = JunNumber;
        }
        else if (monthDevolucao === 'Jul') {
            mesQueDevolveuComparacao = JulNumber;
        }
        else if (monthDevolucao === 'Aug') {
            mesQueDevolveuComparacao = AugNumber;
        }
        else if (monthDevolucao === 'Sep') {
            mesQueDevolveuComparacao = SepNumber;
        }
        else if (monthDevolucao === 'Oct') {
            mesQueDevolveuComparacao = OctNumber;
        }
        else if (monthDevolucao === 'Nov') {
            mesQueDevolveuComparacao = NovNumber;
        }
        else if (monthDevolucao === 'Dec') {
            mesQueDevolveuComparacao = DecNumber;
        } // 2025
        else if (monthDevolucao === 'JanX') {
            mesQueDevolveuComparacao = JanNumberX;
        }
        else if (monthDevolucao === 'FebX') {
            mesQueDevolveuComparacao = FebNumberX;
        }
        else if (monthDevolucao === 'MarX') {
            mesQueDevolveuComparacao = MarNumberX;
        }
        else if (monthDevolucao === 'AprX') {
            mesQueDevolveuComparacao = AprNumberX;
        }
        else if (monthDevolucao === 'MayX') {
            mesQueDevolveuComparacao = MayNumberX;
        }
        else if (monthDevolucao === 'JunX') {
            mesQueDevolveuComparacao = JunNumberX;
        }
        else if (monthDevolucao === 'JulX') {
            mesQueDevolveuComparacao = JulNumberX;
        }
        else if (monthDevolucao === 'AugX') {
            mesQueDevolveuComparacao = AugNumberX;
        }
        else if (monthDevolucao === 'SepX') {
            mesQueDevolveuComparacao = SepNumberX;
        }
        else if (monthDevolucao === 'OctX') {
            mesQueDevolveuComparacao = OctNumberX;
        }
        else if (monthDevolucao === 'NovX') {
            mesQueDevolveuComparacao = NovNumberX;
        }
        else if (monthDevolucao === 'DecX') {
            mesQueDevolveuComparacao = DecNumberX;
        }
        //Meses para mes Comparação
        //2024
        if (emptyBottleMonth === 'Jan') {
            mesQueDeveriaSerEntregeComparacao = JanNumber;
        }
        if (emptyBottleMonth === 'Feb') {
            mesQueDeveriaSerEntregeComparacao = FebNumber;
        }
        if (emptyBottleMonth === 'Mar') {
            mesQueDeveriaSerEntregeComparacao = MarNumber;
        }
        if (emptyBottleMonth === 'Apr') {
            mesQueDeveriaSerEntregeComparacao = AprNumber;
        }
        if (emptyBottleMonth === 'May') {
            mesQueDeveriaSerEntregeComparacao = MayNumber;
        }
        if (emptyBottleMonth === 'Jun') {
            mesQueDeveriaSerEntregeComparacao = JunNumber;
        }
        if (emptyBottleMonth === 'Jul') {
            mesQueDeveriaSerEntregeComparacao = JulNumber;
        }
        if (emptyBottleMonth === 'Aug') {
            mesQueDeveriaSerEntregeComparacao = AugNumber;
        }
        if (emptyBottleMonth === 'Sep') {
            mesQueDeveriaSerEntregeComparacao = SepNumber;
        }
        if (emptyBottleMonth === 'Oct') {
            mesQueDeveriaSerEntregeComparacao = OctNumber;
        }
        if (emptyBottleMonth === 'Nov') {
            mesQueDeveriaSerEntregeComparacao = NovNumber;
        }
        if (emptyBottleMonth === 'Dec') {
            mesQueDeveriaSerEntregeComparacao = DecNumber;
        }
        // 2025
        if (emptyBottleMonth === 'JanX') {
            mesQueDeveriaSerEntregeComparacao = JanNumberX;
        }
        if (emptyBottleMonth === 'FebX') {
            mesQueDeveriaSerEntregeComparacao = FebNumberX;
        }
        if (emptyBottleMonth === 'MarX') {
            mesQueDeveriaSerEntregeComparacao = MarNumberX;
        }
        if (emptyBottleMonth === 'AprX') {
            mesQueDeveriaSerEntregeComparacao = AprNumberX;
        }
        if (emptyBottleMonth === 'MayX') {
            mesQueDeveriaSerEntregeComparacao = MayNumberX;
        }
        if (emptyBottleMonth === 'JunX') {
            mesQueDeveriaSerEntregeComparacao = JunNumberX;
        }
        if (emptyBottleMonth === 'JulX') {
            mesQueDeveriaSerEntregeComparacao = JulNumberX;
        }
        if (emptyBottleMonth === 'AugX') {
            mesQueDeveriaSerEntregeComparacao = AugNumberX;
        }
        if (emptyBottleMonth === 'SepX') {
            mesQueDeveriaSerEntregeComparacao = SepNumberX;
        }
        if (emptyBottleMonth === 'OctX') {
            mesQueDeveriaSerEntregeComparacao = OctNumberX;
        }
        if (emptyBottleMonth === 'NovX') {
            mesQueDeveriaSerEntregeComparacao = NovNumberX;
        }
        if (emptyBottleMonth === 'DecX') {
            mesQueDeveriaSerEntregeComparacao = DecNumberX;
        }
        if (mesQueDevolveuComparacao < mesQueDeveriaSerEntregeComparacao) {
            console.log("Não há multa mês");
            return false;
        }
        //Setar valor final se tiver mais meses
        for (var i = parseInt(emptyBottleDay); i < year[mesQueDeveriaSerEntregeComparacao].length; i++) {
            multaFinal += multa;
        }
        // De Dezembro para Janeiro
        // K
        for (var k = mesQueDeveriaSerEntregeComparacao; k <= mesQueDevolveuComparacao; k++) {
            if (mesQueDevolveuComparacao === (k + 1)) {
                for (var i = 0; i < parseInt(dayDevolucao); i++) {
                    multaFinal += multa;
                }
            }
            else if (mesQueDevolveuComparacao != k) {
                for (var i = 0; i < year[k + 1].length; i++) {
                    multaFinal += multa;
                }
            }
        }
        console.log("Multa a ser paga final: ".concat(multaFinal, "\u00A3"));
        return true;
    }
}
//Função para ver o dia de devolução
function setDiaDevolucao() {
    var emptyBottleDay = '';
    var emptyBottleMonth = '';
    var yearEmptyBottleMonth = '';
    var diaDevolucao = "";
    //Pegar dia
    for (var i = 8; i < 9 + 1; i++) {
        emptyBottleDay += currentDate[i];
    }
    //Pegar mes
    for (var i = 4; i < 6 + 1; i++) {
        emptyBottleMonth += currentDate[i];
    }
    //pegar ano
    for (var i = 11; i < 14 + 1; i++) {
        yearEmptyBottleMonth += currentDate[i];
    }
    if (yearEmptyBottleMonth === '2025') {
        for (var i = 7; i < 8; i++) {
            emptyBottleMonth += 'X';
        }
    }
    //Setar dia devolução
    var NumberMonth = 0;
    var nexMonth = '';
    //2024
    if (emptyBottleMonth === 'Jan') {
        NumberMonth = JanNumber;
        nexMonth = 'Feb';
    }
    if (emptyBottleMonth === 'Feb') {
        NumberMonth = FebNumber;
        nexMonth = 'Mar';
    }
    if (emptyBottleMonth === 'Mar') {
        NumberMonth = MarNumber;
        nexMonth = 'Apr';
    }
    if (emptyBottleMonth === 'Apr') {
        NumberMonth = AprNumber;
        nexMonth = 'May';
    }
    if (emptyBottleMonth === 'May') {
        NumberMonth = MayNumber;
        nexMonth = 'Jun';
    }
    if (emptyBottleMonth === 'Jun') {
        NumberMonth = JunNumber;
        nexMonth = 'Jul';
    }
    if (emptyBottleMonth === 'Jul') {
        NumberMonth = JulNumber;
        nexMonth = 'Aug';
    }
    if (emptyBottleMonth === 'Aug') {
        NumberMonth = AugNumber;
        nexMonth = 'Sep';
    }
    if (emptyBottleMonth === 'Sep') {
        NumberMonth = SepNumber;
        nexMonth = 'Oct';
    }
    if (emptyBottleMonth === 'Oct') {
        NumberMonth = OctNumber;
        nexMonth = 'Nov';
    }
    if (emptyBottleMonth === 'Nov') {
        NumberMonth = NovNumber;
        nexMonth = 'Dec';
    }
    if (emptyBottleMonth === 'Dec') {
        NumberMonth = DecNumber;
        nexMonth = 'JanX';
    }
    //2025
    if (emptyBottleMonth === 'JanX') {
        NumberMonth = JanNumberX;
        nexMonth = 'FebX';
    }
    if (emptyBottleMonth === 'FebX') {
        NumberMonth = FebNumberX;
        nexMonth = 'MarX';
    }
    if (emptyBottleMonth === 'MarX') {
        NumberMonth = MarNumberX;
        nexMonth = 'AprX';
    }
    if (emptyBottleMonth === 'AprX') {
        NumberMonth = AprNumberX;
        nexMonth = 'MayX';
    }
    if (emptyBottleMonth === 'MayX') {
        NumberMonth = MayNumberX;
        nexMonth = 'JunX';
    }
    if (emptyBottleMonth === 'JunX') {
        NumberMonth = JunNumberX;
        nexMonth = 'JulX';
    }
    if (emptyBottleMonth === 'JulX') {
        NumberMonth = JulNumberX;
        nexMonth = 'AugX';
    }
    if (emptyBottleMonth === 'AugX') {
        NumberMonth = AugNumberX;
        nexMonth = 'SepX';
    }
    if (emptyBottleMonth === 'SepX') {
        NumberMonth = SepNumberX;
        nexMonth = 'OctX';
    }
    if (emptyBottleMonth === 'OctX') {
        NumberMonth = OctNumberX;
        nexMonth = 'NovX';
    }
    if (emptyBottleMonth === 'NovX') {
        NumberMonth = NovNumberX;
        nexMonth = 'DecX';
    }
    // array com meses acaba
    if (emptyBottleMonth === 'DecX') {
        NumberMonth = DecNumber;
        nexMonth = null;
    }
    var indexYear = 0;
    for (var r = 0; r < year.length; r++) {
        if (NumberMonth === r) {
            indexYear = r;
            for (var i = 0; i < year[indexYear].length; i++) {
                if (parseInt(emptyBottleDay) + 5 === year[indexYear][i]) {
                    diaDevolucao = "Xxx ".concat(emptyBottleMonth, " ").concat(parseInt(emptyBottleDay) + 5, " ").concat(yearEmptyBottleMonth);
                }
            }
        }
    }
    // Verificar se coincide dia no mes
    var coincideTrue = false;
    var newDay = 0;
    var newMonth = '';
    for (var k = 1; k < 6; k++) {
        if (parseInt(emptyBottleDay) + k === year[indexYear][(parseInt(emptyBottleDay) + k) - 1]) {
            diaDevolucao = diaDevolucao;
        }
        else {
            coincideTrue = true;
        }
        if ((coincideTrue === true) && (k < 6)) {
            newMonth = nexMonth;
            //verifica se é o ano de 2025
            if ((nexMonth === null || nexMonth === void 0 ? void 0 : nexMonth.toString()[3]) === 'X') {
                newDay += 1;
                diaDevolucao = "Xxx ".concat(newMonth, " ").concat(newDay.toString(), " 2025");
            }
            else {
                newDay += 1;
                diaDevolucao = "Xxx ".concat(newMonth, " ").concat(newDay.toString(), " ").concat(yearEmptyBottleMonth);
            }
        }
    } // } k
    //r
    return diaDevolucao;
}
//Registro dos Livros e Usuários
var arrayLivros = [];
var arrayUsers = [];
var livro1 = new Livro_1.Livro('Abracadabra', 'Ryan', Generos_1.Generos.Fantasia, null, Status_1.Status.Emprestado, 0, null, null, '', "Xxx Mar 14 2024", null);
var livro2 = new Livro_1.Livro('Segunda Guerra', 'Michael', Generos_1.Generos.Romance, null, Status_1.Status.Emprestado, 1, null, null, null, "Xxx Mar 18 2024", null);
var livro3 = new Livro_1.Livro('Excalibur', 'Arthur', Generos_1.Generos.FiccaoCientifica, null, Status_1.Status.Disponivel, null, Status_1.Status.Reservado, 2, null, "Xxx Mar 10 2024", null);
var livro4 = new Livro_1.Livro('Esgrima', 'Faustino', Generos_1.Generos.FiccaoCientifica, null, Status_1.Status.Disponivel, null, null, null, null, "Xxx Mar 18 2024", null);
var livro5 = new Livro_1.Livro('Final Fantasy IV', 'Square Enix', Generos_1.Generos.Fantasia, Generos_1.Generos.FiccaoCientifica, Status_1.Status.Disponivel, null, null, null, null, "Xxx Mar 18 2024", null);
arrayLivros.push(livro1, livro2, livro3, livro4, livro5);
//Cadastro de Usuário
function registerUser(nome, ID, contato) {
    var newUser = new Cliente_1.Cliente(nome, ID, contato);
    arrayUsers.push(newUser);
}
registerUser('Helena', 0, 'helena@');
registerUser('José', 1, 'josé@');
registerUser('Karina', 2, 'karina@');
registerUser('Selena', 3, 'selena@');
function sistemaVerificandoAtrasado() {
    for (var i = 0; i < arrayLivros.length; i++) {
        // Save the original console.log
        var originalConsoleLog = console.log;
        // Override console.log
        console.log = function () { };
        // Call your function
        var a = verificarMulta(arrayLivros[i].diaDevolucaoLivro, currentDate);
        // Restore console.log
        console.log = originalConsoleLog;
        if (a === true) {
            arrayLivros[i].atrasado = Status_1.Status.Atrasado;
        }
    }
}
sistemaVerificandoAtrasado();
var user = Number(prompt("Qual o seu ID?: "));
//Menu
var menu = true;
var nomeSaudacao = '';
while (menu) {
    for (var i = 0; i < arrayUsers.length; i++) {
        if (user === arrayUsers[i].ID) {
            nomeSaudacao = arrayUsers[i].nome;
        }
    }
    console.log("Ol\u00E1 ".concat(nomeSaudacao, ", Bem-Vindo(a) a Biblioteca Virtual"));
    console.log("Mostrar Disponível = A");
    console.log("Mostrar Atrasado = B");
    console.log("Mostrar Genero = C");
    console.log("Mostrar Emprestado = K");
    console.log("Mostrar Histórico = H");
    console.log("Empréstimo = D");
    console.log("Reservar = E");
    console.log("Devolver Livro = G");
    console.log("Verificar Reservado = L");
    console.log("Encerrar = F");
    var selecaoMenu = prompt("Qual opção deseja?: ");
    if (selecaoMenu === "F") {
        console.log("Até mais <3");
        menu = false;
    }
    if (selecaoMenu === "A") {
        mostrarDisponivel();
    }
    if (selecaoMenu === "K") {
        mostrarEmprestado();
    }
    if (selecaoMenu === "B") {
        mostrarAtrasado();
    }
    if (selecaoMenu === "C") {
        mostrarGenero();
    }
    if (selecaoMenu === "D") {
        emprestimoLivro();
    }
    if (selecaoMenu === "E") {
        reservarLivro();
    }
    if (selecaoMenu === "H") {
        mostrarHistorico();
    }
    if (selecaoMenu === "G") {
        devolverLivro();
    }
    if (selecaoMenu === "L") {
        verificarReservado();
    }
}
//Mostrar livros por status
function mostrarDisponivel() {
    for (var i = 0; i < arrayLivros.length; i++) {
        if (arrayLivros[i].status === Status_1.Status.Disponivel && arrayLivros[i].reservado === null) {
            console.log("Disponível", arrayLivros[i]);
        }
    }
}
function mostrarAtrasado() {
    var b = [];
    for (var i = 0; i < arrayLivros.length; i++) {
        // Save the original console.log
        var originalConsoleLog = console.log;
        // Override console.log
        console.log = function () { };
        // Call your function
        var a = verificarMulta(arrayLivros[i].diaDevolucaoLivro, currentDate);
        // Restore console.log
        console.log = originalConsoleLog;
        if (a === true) {
            b.push(arrayLivros[i]);
        }
    }
    console.log(b);
}
function mostrarEmprestado() {
    for (var i = 0; i < arrayLivros.length; i++) {
        if (arrayLivros[i].status === Status_1.Status.Emprestado) {
            console.log("Emprestado", arrayLivros[i]);
        }
    }
}
//Mostrar livro por gênero
function mostrarGenero() {
    console.log(Generos_1.Generos);
    var respostaGenero = prompt("Escolha um genero: ");
    var respostaGenero1 = prompt("Escolha um outro genero para mesclar (não obrigatório): ");
    for (var i = 0; i < arrayLivros.length; i++) {
        if (respostaGenero === arrayLivros[i].genero && respostaGenero1 === "" && arrayLivros[i].genero1 === null) {
            console.log("Genero", arrayLivros[i]);
        }
        if (respostaGenero === arrayLivros[i].genero && respostaGenero1 === arrayLivros[i].genero1) {
            console.log("Genero mesclado", arrayLivros[i]);
        }
    }
}
//Função para reservar Livro
function reservarLivro() {
    for (var i = 0; i < arrayLivros.length; i++) {
        if (arrayLivros[i].status === Status_1.Status.Emprestado && arrayLivros[i].usuarioStatus != user && arrayLivros[i].usuarioReservado == null && arrayLivros[i].reservado === null) {
            console.log("Livro: ", arrayLivros[i]);
            console.log("Index: ", i);
        }
    }
    var respostaReserva = Number(prompt("Reserva: Escolha o index desejado conforme o livro:\n  "));
    arrayLivros[respostaReserva].changeReservado();
    arrayLivros[respostaReserva].usuarioReservado = user;
}
function emprestimoLivro() {
    for (var i = 0; i < arrayLivros.length; i++) {
        if (arrayLivros[i].status === Status_1.Status.Disponivel && arrayLivros[i].usuarioStatus === null && arrayLivros[i].reservado != Status_1.Status.Reservado && arrayLivros[i].usuarioReservado === null) {
            console.log("Livro: ", arrayLivros[i]);
            console.log("Index: ", i);
        }
    }
    var respostaDisponivel = Number(prompt("Empr\u00E9stimo: Escolha o index conforme o livro: "));
    arrayLivros[respostaDisponivel].changeStatus();
    arrayLivros[respostaDisponivel].usuarioStatus = user;
    arrayLivros[respostaDisponivel].changeDiaEmprestimo();
    var resultado = setDiaDevolucao();
    arrayLivros[respostaDisponivel].diaDevolucaoLivro = resultado;
    arrayUsers[user].hc(arrayLivros[respostaDisponivel]);
}
function mostrarHistorico() {
    console.log('Seu histórico geral');
    arrayUsers[user].mhc();
    var mostrarHistoricoTrue = false;
    for (var i = 0; i < arrayLivros.length; i++) {
        if (arrayLivros[i].usuarioStatus === user || arrayLivros[i].usuarioReservado === user) {
            mostrarHistoricoTrue = true;
            console.log("Livros emprestados(retirados por voce) ou reservados:", arrayLivros[i]);
        }
    }
    if (mostrarHistoricoTrue === false) {
        console.log("Não há livros emprestados(retirados por voce) ou reservados");
    }
}
function devolverLivro() {
    var devolverLivroTrue = false;
    for (var i = 0; i < arrayLivros.length; i++) {
        if (arrayLivros[i].usuarioStatus === user) {
            devolverLivroTrue = true;
            console.log("Livros para devolver:", arrayLivros[i]);
            console.log("Index", i);
        }
    }
    if (devolverLivroTrue === true) {
        var respostaDevolver = Number(prompt("Escolha o livro pelo index para devolver:"));
        arrayLivros[respostaDevolver].changeStatusDisponivel();
        arrayLivros[respostaDevolver].usuarioStatus = null;
        arrayUsers[user].hc(arrayLivros[respostaDevolver]);
        verificarMulta((arrayLivros[respostaDevolver].diaDevolucaoLivro), currentDate);
        arrayLivros[respostaDevolver].diaEmprestimo = "";
        arrayLivros[respostaDevolver].diaDevolucaoLivro = "";
    }
    if (devolverLivroTrue === false) {
        console.log("Não há livros em seu nome");
    }
}
function verificarReservado() {
    var verificarReservadoTrue = false;
    for (var i = 0; i < arrayLivros.length; i++) {
        if (arrayLivros[i].status === Status_1.Status.Disponivel && arrayLivros[i].usuarioStatus === null && arrayLivros[i].reservado === Status_1.Status.Reservado && arrayLivros[i].usuarioReservado === user) {
            verificarReservadoTrue = true;
            console.log("Livros reservados por voce:", arrayLivros[i]);
            console.log("Index:", i);
        }
    }
    if (verificarReservadoTrue === true) {
        var respostaVerificaReserva = Number(prompt("Qual livro reservado voce gostaria de pegar?:"));
        arrayLivros[respostaVerificaReserva].changeStatus();
        arrayLivros[respostaVerificaReserva].usuarioStatus = user;
        arrayLivros[respostaVerificaReserva].reservado = null;
        arrayLivros[respostaVerificaReserva].usuarioReservado = null;
        arrayLivros[respostaVerificaReserva].changeDiaEmprestimo();
        var resultado = setDiaDevolucao();
        arrayLivros[respostaVerificaReserva].diaDevolucaoLivro = resultado;
        arrayUsers[user].hc(arrayLivros[respostaVerificaReserva]);
    }
    if (verificarReservadoTrue === false) {
        console.log("Não há livros reservados por voce ou ainda estão indisponíveis");
    }
}
