import { Produto } from 'src/app/Models/produto';
import { ProdutosService } from './../../services/produtos.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-cadastro-produtos',
  templateUrl: './cadastro-produtos.component.html',
  styleUrls: ['./cadastro-produtos.component.css']
})
export class CadastroProdutosComponent implements OnInit {
descricao: any;

  constructor(private router: Router, private service: ProdutosService) { }

  formulario: FormGroup = [];

  produto: Produto = {
    descricao : '',
    unmedida : '',
    ncm : ''
  }

  ngOnInit(): void {
  }

  cancel(): void {
    this.router.navigate(['produtos'])
  }

  create(): void {
    this.service.create(this.produto).subscribe((resposta)=>{
      this.router.navigate(["produtos"])
    })
  }
}
