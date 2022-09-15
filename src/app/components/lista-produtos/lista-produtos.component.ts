import { ProdutosService } from './../../services/produtos.service';
import { Component, OnInit } from '@angular/core';
import { Produto } from 'src/app/Models/produto';

@Component({
  selector: 'app-lista-produtos',
  templateUrl: './lista-produtos.component.html',
  styleUrls: ['./lista-produtos.component.css']
})

export class ListaProdutosComponent implements OnInit {

  produtos: Produto[] = []

  constructor(private service: ProdutosService) { }

  ngOnInit(): void {
    this.findAll();
  }

  findAll(){
    this.service.findAll().subscribe(resposta => {
      console.log(resposta);
      this.produtos = resposta;
    })
  }

}
