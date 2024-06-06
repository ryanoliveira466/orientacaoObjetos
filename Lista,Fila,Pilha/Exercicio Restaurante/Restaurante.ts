import { TipoComida } from "./TipoComida";
import { ArrayLista } from "./ArrayLista";



let sistema = new ArrayLista()

sistema.registrarPedidoGarcom('Pudim', TipoComida.Sobremesas)
sistema.registrarPedidoGarcom('Espaguete', TipoComida.Prato_Principal)
sistema.registrarPedidoGarcom('Guaraná', TipoComida.Bebidas)

sistema.preparoMaisRapido()

sistema.saidaPedidos()












