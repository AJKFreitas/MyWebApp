import { Component, OnInit } from "@angular/core"
import { DataServices } from "../servicos/dataService";
import { Produto } from "../modelos/produto";

@Component({
    selector: "lista-produto",
    templateUrl: "./listaProduto.component.html",
    styleUrls: ["./listaProduto.component.css"]
})
export class ListaProduto implements OnInit {
    
  public produtos: Produto[] = []

  constructor(private data: DataServices) {
        this.produtos = data.produtos;

    }


    ngOnInit(): void {
        this.data.carregarProdutos()
            .subscribe(( ) => this.produtos = this.data.produtos)
    }

    adicionarProduto(produto: Produto) {
        this.data.adicionarProduto(produto);
    }
}


