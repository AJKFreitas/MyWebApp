import { Produto } from "./produto";
import * as _ from "lodash";

export class Pedido {
    public Id: number;
    public DataDoPedido: Date;
    public ItensPedidos: Array<ItemPedido> = new Array<ItemPedido>();

    get total(): number {
      //return 25;
      return _.sum(_.map(this.ItensPedidos, i => i.Produto.preco * i.Quantidade));
    }
}


export class ItemPedido {
    public Id: number;
    public Produto: Produto;
    public Quantidade: number;

    constructor() {
        this.Produto = new Produto();
    }
}
