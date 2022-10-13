import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, NgForm, NgModel } from '@angular/forms';
import { Router } from '@angular/router';
import { Produto } from 'src/app/Models/produto';
import { ProdutosService } from './../../services/produtos.service';

@Component({
  selector: 'app-cadastro-produtos',
  templateUrl: './cadastro-produtos.component.html',
  styleUrls: ['./cadastro-produtos.component.css']
})
export class CadastroProdutosComponent implements OnInit {

  constructor(private router: Router, private service: ProdutosService, private formBuilder: FormBuilder){ }

  public formulario!: FormGroup;

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

  create(formulario: NgForm): void {
    console.log(this.formulario);

    this.service.create(this.produto).subscribe((resposta)=>{
      this.router.navigate(["produtos"])
    },err => {
      console.log("Error")
    })
  }
}
