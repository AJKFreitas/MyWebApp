import { Component } from "@angular/core";
import { DataServices } from "../../servicos/dataService";
import { Router } from "@angular/router";

@Component({
    selector: "efetivar",
    templateUrl: "efetivarCompra.component.html",
    styles: []
})
export class EfetivarCompra {
    mensagem: string;
 
    constructor(private data: DataServices, public router:Router) {

    }
    onEfetivarCompra() {
      this.data.efetivarCompra()
        .subscribe(sucesso => {
          if (sucesso) {
            this.router.navigate([""]);
          }
        }, _erro => this.mensagem = "Falha ao Salvar pedido.");
    }
}
// prof usou erro sem underscore
