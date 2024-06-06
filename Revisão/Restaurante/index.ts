import { ArrayList } from "./ArrayList";
import { TipoComida } from "./EnumComida";

let restaurante = new ArrayList();

restaurante.addPedido('Trufa',TipoComida.Sobremesa)
restaurante.addPedido('Coca',TipoComida.Bebida)
restaurante.addPedido('À La Minuta',TipoComida.Almoco)



restaurante.preparoPedido()

restaurante.saidaPedidos()


