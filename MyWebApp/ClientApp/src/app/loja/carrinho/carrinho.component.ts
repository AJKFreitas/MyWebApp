import { Component } from "@angular/core";
import { DataServices } from "../../servicos/dataService";
import { Produto } from "../../modelos/produto";
import { Pedido, ItemPedido } from "../../modelos/pedidos";



@Component({
    selector: "carrinho",
    templateUrl: "carrinho.component.html",
    styleUrls: []
})
export class Carrinho {

  constructor( private data: DataServices) {

  }

  
 
}


