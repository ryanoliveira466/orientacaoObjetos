import { Stack } from "./Stack";

const web = new Stack()

//Inserindo site

web.push('Youtube')
web.push('Twitch')
web.push('Instagram')

//Vê o último site acessado
console.log(web.peek())


//Função de voltar
web.pop()

//Vê o site acessado depois do site removido antes
console.log(web.peek());

//Mostra o histórico
console.log(web.show())
 