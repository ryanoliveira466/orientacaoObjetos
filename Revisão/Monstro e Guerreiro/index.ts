import { Guerreiro } from "./Guerreiro";
import { Monstro} from "./Monstro";

const guerreiro = new Guerreiro('Ryan', 'Guerreiro', 5)
const monstro = new Monstro('Cobra', 'Monstro')

guerreiro.atacar(monstro)

monstro.atacar(guerreiro)

guerreiro.atacar(monstro)


