
import * as promptSync from 'prompt-sync';
const prompt = promptSync();

import { Generos } from './Generos';
import { Status } from './Status';
import { Cliente } from './Cliente';
import { Livro } from './Livro';


const currentDate = new Date().toDateString();




// Calendário

// Ano Atual

// Janeiro
let Jan: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];

// Fevereiro
let Feb: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29];

// Março
let Mar: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];

// Abril
let Apr: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30];

// Maio
let May: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];

// Junho
let Jun: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30];

// Julho
let Jul: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];

// Agosto
let Aug: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];

// Setembro
let Sep: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30];

// Outubro
let Oct: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];

// Novembro
let Nov: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30];

// Dezembro
let Dec: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];


// Próximo ano 

let JanX: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];
let FebX: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28];
let MarX: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];
let AprX: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30];
let MayX: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];
let JunX: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30];
let JulX: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];
let AugX: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];
let SepX: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30];
let OctX: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];
let NovX: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30];
let DecX: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];









//Tendo 2 anos para que não tenha conflito caso o ano vire

let year: number[][] = [Jan, Feb, Mar, Apr, May, Jun, Jul, Aug, Sep, Oct, Nov, Dec, JanX, FebX, MarX, AprX, MayX, JunX, JulX, AugX, SepX, OctX, NovX, DecX]












//Ano atual 


let JanNumber: number = 0;
let FebNumber: number = 1
let MarNumber: number = 2
let AprNumber: number = 3
let MayNumber: number = 4
let JunNumber: number = 5
let JulNumber: number = 6
let AugNumber: number = 7
let SepNumber: number = 8
let OctNumber: number = 9
let NovNumber: number = 10
let DecNumber: number = 11

let JanNumberX: number = 12
let FebNumberX: number = 13
let MarNumberX: number = 14
let AprNumberX: number = 15
let MayNumberX: number = 16
let JunNumberX: number = 17
let JulNumberX: number = 18
let AugNumberX: number = 19
let SepNumberX: number = 20
let OctNumberX: number = 21
let NovNumberX: number = 22
let DecNumberX: number = 23






function verificarMulta(ddd: string, currentDate: string): void | Boolean {





  //Variáveis caso seja o mesmo mês

  let emptyBottleDay: string = ''
  let emptyBottleMonth: string = ''
  let dayDevolucao: string = ''
  let monthDevolucao: string = ''
  let yearMonthDevolucao: string = ''
  let yearEmptyBottleMonth: string = ''
  let multa: number = 3
  let multaFinal: number = 0

  //Variáveis caso não seja o mesmo mês

  let mesQueDevolveuComparacao: number = 0
  let mesQueDeveriaSerEntregeComparacao: number = 0



  //Pegar dia



  for (var i = 8; i < 9 + 1; i++) {

    dayDevolucao += currentDate[i]
    emptyBottleDay += ddd[i]

  }



  //Pegar mes

  for (var i = 4; i < 6 + 1; i++) {

    monthDevolucao += currentDate[i]
    emptyBottleMonth += ddd[i]

  }

  //pegar ano

  for (var i = 11; i < 14 + 1; i++) {

    yearMonthDevolucao += currentDate[i]
    yearEmptyBottleMonth += ddd[i]

  }



  if (yearMonthDevolucao === '2025') {

    for (var i = 7; i < 8; i++) {

      monthDevolucao += 'X'


    }


  }

  if (yearEmptyBottleMonth === '2025') {

    for (var i = 7; i < 8; i++) {

      emptyBottleMonth += 'X'

    }

  }


  if ((emptyBottleMonth === monthDevolucao) && (parseInt(dayDevolucao) <= parseInt(emptyBottleDay))) {

    console.log("Não há multa")

    return false





  }














  if (parseInt(dayDevolucao) > parseInt(emptyBottleDay) && emptyBottleMonth === monthDevolucao) {



    for (var i = parseInt(emptyBottleDay); i < parseInt(dayDevolucao); i++) {

      multaFinal += multa


    }

    console.log(`Multa a ser paga: ${multaFinal}£`)

    return true






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
      mesQueDeveriaSerEntregeComparacao = JanNumber
    }

    if (emptyBottleMonth === 'Feb') {
      mesQueDeveriaSerEntregeComparacao = FebNumber
    }

    if (emptyBottleMonth === 'Mar') {
      mesQueDeveriaSerEntregeComparacao = MarNumber
    }

    if (emptyBottleMonth === 'Apr') {
      mesQueDeveriaSerEntregeComparacao = AprNumber
    }

    if (emptyBottleMonth === 'May') {
      mesQueDeveriaSerEntregeComparacao = MayNumber
    }

    if (emptyBottleMonth === 'Jun') {
      mesQueDeveriaSerEntregeComparacao = JunNumber
    }

    if (emptyBottleMonth === 'Jul') {
      mesQueDeveriaSerEntregeComparacao = JulNumber
    }

    if (emptyBottleMonth === 'Aug') {
      mesQueDeveriaSerEntregeComparacao = AugNumber
    }

    if (emptyBottleMonth === 'Sep') {
      mesQueDeveriaSerEntregeComparacao = SepNumber
    }

    if (emptyBottleMonth === 'Oct') {
      mesQueDeveriaSerEntregeComparacao = OctNumber
    }

    if (emptyBottleMonth === 'Nov') {
      mesQueDeveriaSerEntregeComparacao = NovNumber
    }

    if (emptyBottleMonth === 'Dec') {
      mesQueDeveriaSerEntregeComparacao = DecNumber
    }

    // 2025

    if (emptyBottleMonth === 'JanX') {
      mesQueDeveriaSerEntregeComparacao = JanNumberX
    }

    if (emptyBottleMonth === 'FebX') {
      mesQueDeveriaSerEntregeComparacao = FebNumberX
    }

    if (emptyBottleMonth === 'MarX') {
      mesQueDeveriaSerEntregeComparacao = MarNumberX
    }

    if (emptyBottleMonth === 'AprX') {
      mesQueDeveriaSerEntregeComparacao = AprNumberX
    }

    if (emptyBottleMonth === 'MayX') {
      mesQueDeveriaSerEntregeComparacao = MayNumberX
    }

    if (emptyBottleMonth === 'JunX') {
      mesQueDeveriaSerEntregeComparacao = JunNumberX
    }

    if (emptyBottleMonth === 'JulX') {
      mesQueDeveriaSerEntregeComparacao = JulNumberX
    }

    if (emptyBottleMonth === 'AugX') {
      mesQueDeveriaSerEntregeComparacao = AugNumberX
    }

    if (emptyBottleMonth === 'SepX') {
      mesQueDeveriaSerEntregeComparacao = SepNumberX
    }

    if (emptyBottleMonth === 'OctX') {
      mesQueDeveriaSerEntregeComparacao = OctNumberX
    }

    if (emptyBottleMonth === 'NovX') {
      mesQueDeveriaSerEntregeComparacao = NovNumberX
    }

    if (emptyBottleMonth === 'DecX') {
      mesQueDeveriaSerEntregeComparacao = DecNumberX
    }




    if (mesQueDevolveuComparacao < mesQueDeveriaSerEntregeComparacao) {

      console.log("Não há multa mês")
      return false



    }








    //Setar valor final se tiver mais meses

    for (var i = parseInt(emptyBottleDay); i < year[mesQueDeveriaSerEntregeComparacao].length; i++) {



      multaFinal += multa



    }

    // De Dezembro para Janeiro


    // K

    for (var k = mesQueDeveriaSerEntregeComparacao; k <= mesQueDevolveuComparacao; k++) {





      if (mesQueDevolveuComparacao === (k + 1)) {


        for (var i = 0; i < parseInt(dayDevolucao); i++) {


          multaFinal += multa


        }
      }




      else if (mesQueDevolveuComparacao != k) {


        for (var i = 0; i < year[k + 1].length; i++) {

          multaFinal += multa



        }

      }




    }

    console.log(`Multa a ser paga final: ${multaFinal}£`)

    return true


  }










}













//Função para ver o dia de devolução

function setDiaDevolucao(): string {
  let emptyBottleDay: string = ''
  let emptyBottleMonth: string = ''
  let yearEmptyBottleMonth: string = ''
  let diaDevolucao: string = ""

  //Pegar dia

  for (var i = 8; i < 9 + 1; i++) {

    emptyBottleDay += currentDate[i]

  }

  //Pegar mes

  for (var i = 4; i < 6 + 1; i++) {

    emptyBottleMonth += currentDate[i]

  }


  //pegar ano

  for (var i = 11; i < 14 + 1; i++) {

    yearEmptyBottleMonth += currentDate[i]

  }





  if (yearEmptyBottleMonth === '2025') {

    for (var i = 7; i < 8; i++) {

      emptyBottleMonth += 'X'

    }

  }








  //Setar dia devolução








  let NumberMonth: number = 0
  let nexMonth: string | null = ''

  //2024

  if (emptyBottleMonth === 'Jan') {
    NumberMonth = JanNumber
    nexMonth = 'Feb'
  }

  if (emptyBottleMonth === 'Feb') {
    NumberMonth = FebNumber
    nexMonth = 'Mar'
  }

  if (emptyBottleMonth === 'Mar') {
    NumberMonth = MarNumber
    nexMonth = 'Apr'
  }

  if (emptyBottleMonth === 'Apr') {
    NumberMonth = AprNumber
    nexMonth = 'May'
  }

  if (emptyBottleMonth === 'May') {
    NumberMonth = MayNumber
    nexMonth = 'Jun'
  }

  if (emptyBottleMonth === 'Jun') {
    NumberMonth = JunNumber
    nexMonth = 'Jul'
  }

  if (emptyBottleMonth === 'Jul') {
    NumberMonth = JulNumber
    nexMonth = 'Aug'
  }

  if (emptyBottleMonth === 'Aug') {
    NumberMonth = AugNumber
    nexMonth = 'Sep'
  }

  if (emptyBottleMonth === 'Sep') {
    NumberMonth = SepNumber
    nexMonth = 'Oct'
  }

  if (emptyBottleMonth === 'Oct') {
    NumberMonth = OctNumber
    nexMonth = 'Nov'
  }

  if (emptyBottleMonth === 'Nov') {
    NumberMonth = NovNumber
    nexMonth = 'Dec'
  }

  if (emptyBottleMonth === 'Dec') {
    NumberMonth = DecNumber
    nexMonth = 'JanX'
  }

  //2025

  if (emptyBottleMonth === 'JanX') {
    NumberMonth = JanNumberX
    nexMonth = 'FebX'
  }

  if (emptyBottleMonth === 'FebX') {
    NumberMonth = FebNumberX
    nexMonth = 'MarX'
  }

  if (emptyBottleMonth === 'MarX') {
    NumberMonth = MarNumberX
    nexMonth = 'AprX'
  }

  if (emptyBottleMonth === 'AprX') {
    NumberMonth = AprNumberX
    nexMonth = 'MayX'
  }

  if (emptyBottleMonth === 'MayX') {
    NumberMonth = MayNumberX
    nexMonth = 'JunX'
  }

  if (emptyBottleMonth === 'JunX') {
    NumberMonth = JunNumberX
    nexMonth = 'JulX'
  }

  if (emptyBottleMonth === 'JulX') {
    NumberMonth = JulNumberX
    nexMonth = 'AugX'
  }

  if (emptyBottleMonth === 'AugX') {
    NumberMonth = AugNumberX
    nexMonth = 'SepX'
  }

  if (emptyBottleMonth === 'SepX') {
    NumberMonth = SepNumberX
    nexMonth = 'OctX'
  }

  if (emptyBottleMonth === 'OctX') {
    NumberMonth = OctNumberX
    nexMonth = 'NovX'
  }

  if (emptyBottleMonth === 'NovX') {
    NumberMonth = NovNumberX
    nexMonth = 'DecX'
  }

  // array com meses acaba
  if (emptyBottleMonth === 'DecX') {
    NumberMonth = DecNumber
    nexMonth = null
  }






  let indexYear: number = 0




  for (var r = 0; r < year.length; r++) {



    if (NumberMonth === r) {
      indexYear = r




      for (var i = 0; i < year[indexYear].length; i++) {






        if (parseInt(emptyBottleDay) + 5 === year[indexYear][i]) {




          diaDevolucao = `Xxx ${emptyBottleMonth} ${parseInt(emptyBottleDay) + 5} ${yearEmptyBottleMonth}`



        }
      }




    }

  }


  // Verificar se coincide dia no mes



  let coincideTrue: Boolean = false
  let newDay: number = 0
  let newMonth: string | null = ''


  for (var k = 1; k < 6; k++) {




    if (parseInt(emptyBottleDay) + k === year[indexYear][(parseInt(emptyBottleDay) + k) - 1]) {


      diaDevolucao = diaDevolucao



    }





    else {

      coincideTrue = true

    }

    if ((coincideTrue === true) && (k < 6)) {


      newMonth = nexMonth


      //verifica se é o ano de 2025



      if (nexMonth?.toString()[3] === 'X') {

        newDay += 1

        diaDevolucao = `Xxx ${newMonth} ${newDay.toString()} 2025`

      }





      else {


        newDay += 1

        diaDevolucao = `Xxx ${newMonth} ${newDay.toString()} ${yearEmptyBottleMonth}`


      }
    }




  }// } k


  //r



  return diaDevolucao


}













//Registro dos Livros e Usuários

let arrayLivros: Livro[] = []
let arrayUsers: Cliente[] = []




let livro1 = new Livro('Abracadabra', 'Ryan', Generos.Fantasia, null, Status.Emprestado, 0, null, null, '', `Xxx Mar 14 2024`, null);
let livro2 = new Livro('Segunda Guerra', 'Michael', Generos.Romance, null, Status.Emprestado, 1, null, null, null, `Xxx Mar 18 2024`, null)
let livro3 = new Livro('Excalibur', 'Arthur', Generos.FiccaoCientifica, null, Status.Disponivel, null, Status.Reservado, 2, null, `Xxx Mar 10 2024`, null)

let livro4 = new Livro('Esgrima', 'Faustino', Generos.FiccaoCientifica, null, Status.Disponivel, null, null, null, null, `Xxx Mar 18 2024`, null)

let livro5 = new Livro('Final Fantasy IV', 'Square Enix', Generos.Fantasia, Generos.FiccaoCientifica, Status.Disponivel, null, null, null, null, `Xxx Mar 18 2024`, null)



arrayLivros.push(livro1, livro2, livro3, livro4, livro5)



















//Cadastro de Usuário

function registerUser(nome: string, ID: number, contato: string) {

  let newUser: Cliente = new Cliente(nome, ID, contato)
  arrayUsers.push(newUser)


}

registerUser('Helena', 0, 'helena@')
registerUser('José', 1, 'josé@')
registerUser('Karina', 2, 'karina@')
registerUser('Selena', 3, 'selena@')





function sistemaVerificandoAtrasado(): void {



  for (var i = 0; i < arrayLivros.length; i++) {

    // Save the original console.log
    let originalConsoleLog = console.log;

    // Override console.log
    console.log = function () { };

    // Call your function
    let a: Boolean | void = verificarMulta(arrayLivros[i].diaDevolucaoLivro, currentDate);

    // Restore console.log
    console.log = originalConsoleLog;





    if (a === true) {

      arrayLivros[i].atrasado = Status.Atrasado





    }

  }

}

sistemaVerificandoAtrasado()


let user: number = Number(prompt("Qual o seu ID?: "))


//Menu

let menu: Boolean = true
let nomeSaudacao: string = ''

while (menu) {
  for (var i = 0; i < arrayUsers.length; i++) {

    if (user === arrayUsers[i].ID) {

      nomeSaudacao = arrayUsers[i].nome

    }

  }
  console.log(`Olá ${nomeSaudacao}, Bem-Vindo(a) a Biblioteca Virtual`)

  console.log("Mostrar Disponível = A")
  console.log("Mostrar Atrasado = B")
  console.log("Mostrar Genero = C")
  console.log("Mostrar Emprestado = K")
  console.log("Mostrar Histórico = H")
  console.log("Empréstimo = D")
  console.log("Reservar = E")
  console.log("Devolver Livro = G")
  console.log("Verificar Reservado = L")
  console.log("Encerrar = F")

  let selecaoMenu = prompt("Qual opção deseja?: ")

  if (selecaoMenu === "F") {
    console.log("Até mais <3")
    menu = false
  }

  if (selecaoMenu === "A") {
    mostrarDisponivel()
  }

  if (selecaoMenu === "K") {
    mostrarEmprestado()
  }


  if (selecaoMenu === "B") {
    mostrarAtrasado()
  }


  if (selecaoMenu === "C") {
    mostrarGenero()
  }

  if (selecaoMenu === "D") {
    emprestimoLivro()
  }

  if (selecaoMenu === "E") {
    reservarLivro()
  }

  if (selecaoMenu === "H") {
    mostrarHistorico()
  }

  if (selecaoMenu === "G") {
    devolverLivro()
  }

  if (selecaoMenu === "L") {
    verificarReservado()
  }







}



//Mostrar livros por status




function mostrarDisponivel(): void {



  for (var i = 0; i < arrayLivros.length; i++) {

    if (arrayLivros[i].status === Status.Disponivel && arrayLivros[i].reservado === null) {
      console.log("Disponível", arrayLivros[i]);



    }

  }
}







function mostrarAtrasado(): void {



  let b: Livro[] = []

  for (var i = 0; i < arrayLivros.length; i++) {

    // Save the original console.log
    let originalConsoleLog = console.log;

    // Override console.log
    console.log = function () { };

    // Call your function
    let a: Boolean | void = verificarMulta(arrayLivros[i].diaDevolucaoLivro, currentDate);

    // Restore console.log
    console.log = originalConsoleLog;





    if (a === true) {

      b.push(arrayLivros[i])





    }

  }


  console.log(b)

}







function mostrarEmprestado() {

  for (var i = 0; i < arrayLivros.length; i++) {

    if (arrayLivros[i].status === Status.Emprestado) {
      console.log("Emprestado", arrayLivros[i]);

    }

  }

}






















//Mostrar livro por gênero

function mostrarGenero() {

  console.log(Generos)
  let respostaGenero = prompt("Escolha um genero: ")

  let respostaGenero1 = prompt("Escolha um outro genero para mesclar (não obrigatório): ")

  for (var i = 0; i < arrayLivros.length; i++) {

    if (respostaGenero === arrayLivros[i].genero && respostaGenero1 === "" && arrayLivros[i].genero1 === null) {

      console.log("Genero", arrayLivros[i])

    }




    if (respostaGenero === arrayLivros[i].genero && respostaGenero1 === arrayLivros[i].genero1) {
      console.log("Genero mesclado", arrayLivros[i])
    }







  }


}



//Função para reservar Livro

function reservarLivro() {

  for (var i = 0; i < arrayLivros.length; i++) {


    if (arrayLivros[i].status === Status.Emprestado && arrayLivros[i].usuarioStatus != user && arrayLivros[i].usuarioReservado == null && arrayLivros[i].reservado === null) {

      console.log("Livro: ", arrayLivros[i])
      console.log("Index: ", i)


    }

  }


  let respostaReserva = Number(prompt(`Reserva: Escolha o index desejado conforme o livro:
  `))


  arrayLivros[respostaReserva].changeReservado()

  arrayLivros[respostaReserva].usuarioReservado = user








}







function emprestimoLivro(): void {

  for (var i = 0; i < arrayLivros.length; i++) {


    if (arrayLivros[i].status === Status.Disponivel && arrayLivros[i].usuarioStatus === null && arrayLivros[i].reservado != Status.Reservado && arrayLivros[i].usuarioReservado === null) {

      console.log("Livro: ", arrayLivros[i])
      console.log("Index: ", i)

    }
  }

  let respostaDisponivel = Number(prompt(`Empréstimo: Escolha o index conforme o livro: `))


  arrayLivros[respostaDisponivel].changeStatus()

  arrayLivros[respostaDisponivel].usuarioStatus = user

  arrayLivros[respostaDisponivel].changeDiaEmprestimo()

  var resultado: string = setDiaDevolucao()

  arrayLivros[respostaDisponivel].diaDevolucaoLivro = resultado

  arrayUsers[user].hc(arrayLivros[respostaDisponivel])








}




function mostrarHistorico() {

  console.log('Seu histórico geral')
  arrayUsers[user].mhc()


  let mostrarHistoricoTrue: Boolean = false

  for (var i = 0; i < arrayLivros.length; i++) {



    if (arrayLivros[i].usuarioStatus === user || arrayLivros[i].usuarioReservado === user) {

      mostrarHistoricoTrue = true

      console.log(`Livros emprestados(retirados por voce) ou reservados:`, arrayLivros[i])

    }




  }

  if (mostrarHistoricoTrue === false) {
    console.log("Não há livros emprestados(retirados por voce) ou reservados")
  }


}


function devolverLivro() {

  let devolverLivroTrue: Boolean = false

  for (var i = 0; i < arrayLivros.length; i++) {

    if (arrayLivros[i].usuarioStatus === user) {

      devolverLivroTrue = true

      console.log("Livros para devolver:",
        arrayLivros[i])

      console.log("Index", i)

    }

  }

  if (devolverLivroTrue === true) {
    let respostaDevolver = Number(prompt("Escolha o livro pelo index para devolver:"))

    arrayLivros[respostaDevolver].changeStatusDisponivel()

    arrayLivros[respostaDevolver].usuarioStatus = null

    arrayUsers[user].hc(arrayLivros[respostaDevolver])



    verificarMulta((arrayLivros[respostaDevolver].diaDevolucaoLivro), currentDate)

    arrayLivros[respostaDevolver].diaEmprestimo = ``

    arrayLivros[respostaDevolver].diaDevolucaoLivro = ``





  }
  if (devolverLivroTrue === false) {
    console.log("Não há livros em seu nome")
  }





}


function verificarReservado() {

  let verificarReservadoTrue: Boolean = false

  for (var i = 0; i < arrayLivros.length; i++) {



    if (arrayLivros[i].status === Status.Disponivel && arrayLivros[i].usuarioStatus === null && arrayLivros[i].reservado === Status.Reservado && arrayLivros[i].usuarioReservado === user) {

      verificarReservadoTrue = true

      console.log("Livros reservados por voce:",
        arrayLivros[i])


      console.log("Index:", i)

    }

  }

  if (verificarReservadoTrue === true) {
    let respostaVerificaReserva = Number(prompt("Qual livro reservado voce gostaria de pegar?:"))

    arrayLivros[respostaVerificaReserva].changeStatus()

    arrayLivros[respostaVerificaReserva].usuarioStatus = user

    arrayLivros[respostaVerificaReserva].reservado = null

    arrayLivros[respostaVerificaReserva].usuarioReservado = null

    arrayLivros[respostaVerificaReserva].changeDiaEmprestimo()

  var resultado: string = setDiaDevolucao()

  arrayLivros[respostaVerificaReserva].diaDevolucaoLivro = resultado

    arrayUsers[user].hc(arrayLivros[respostaVerificaReserva])







  }

  if (verificarReservadoTrue === false) {

    console.log("Não há livros reservados por voce ou ainda estão indisponíveis")

  }

}















