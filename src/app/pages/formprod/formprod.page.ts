
import { Component, OnInit } from '@angular/core';

import { FormBuilder,FormGroup, Validators } from '@angular/forms';

import {Guid} from 'guid-typescript'

import { produto } from 'src/app/models/prod.model';

import { ProdserviceService} from 'src/app/services/prodservice.service'

@Component({
  selector: 'app-formprod',
  templateUrl: './formprod.page.html',
  styleUrls: ['./formprod.page.scss'],
})
export class FormprodPage implements OnInit {
  public ionForm:FormGroup

  private produtos: produto





  constructor(private FormBuilder:FormBuilder,private Prodserv : ProdserviceService) { }

  ngOnInit() {

   
    this.produtos = {id: Guid.createEmpty(),nome:"",fabric:"",valor:"",quan:""}


    this.ionForm = this.FormBuilder.group({

      'id':[this.produtos.id],
      'nome':  [this.produtos.nome, Validators.compose([Validators.required,Validators.minLength(3),Validators.maxLength(34)])],
      'fabric':[this.produtos.fabric, Validators.compose([Validators.required,Validators.minLength(3),Validators.maxLength(34)])],
      'valor': [this.produtos.valor, Validators.required],
      'quan':  [this.produtos.quan, Validators.required]



    })




  }

  enviar(){

    if(this.ionForm.valid){
      this.Prodserv.insert(this.ionForm.value)


    }





  }
}
