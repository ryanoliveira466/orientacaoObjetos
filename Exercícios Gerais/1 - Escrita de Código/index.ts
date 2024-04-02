import { Manoel } from "./Manoel";
import { Carlos } from "./Carlos";
import { Joana } from "./Joana";

const manoel = new Manoel('Manoel', 50, 'Driver')
const carlos = new Carlos('Carlos', 35, 'Seller', 'Mazda RX8')
const joana = new Joana('Joana', 25, 'Designer', 'Toyota Supra', 'White House')

//Método de classe pessoa no manoel
manoel.talk()
//Método próprio do manoel
manoel.eat()

//Mesma lógica para os outros 2

carlos.talk()
carlos.eat()
carlos.sleep()

joana.talk()
joana.eat()
joana.sleep()
joana.run()


//Poderiamos usar Get e Setters(mudar atributo) para ter acesso aos atributos  'Private' e 'Protected'

// A palavra-chave `public` para tornar membros acessíveis de fora da classe.
// A palavra-chave `private` para limitar o acesso aos membros apenas dentro da classe.
// A palavra-chave `protected` para permitir acesso aos membros apenas dentro da classe e suas subclasses.



