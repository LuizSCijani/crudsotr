import { Component, OnInit } from '@angular/core';
import { ProdserviceService} from 'src/app/services/prodservice.service';
import { ActivatedRoute, Route, Router} from '@angular/router';

@Component({
  selector: 'app-saida',
  templateUrl: './saida.page.html',
  styleUrls: ['./saida.page.scss'],
})
export class SaidaPage implements OnInit {

  constructor(private Prodserv : ProdserviceService,public rout:ActivatedRoute) { }
  public arrayprod:any
  ngOnInit() {
    this.Prodserv.listartodos().then(arrayprod =>(this.arrayprod = arrayprod))
  }

  ExcluirContato(id){
    // captura do id do contato
    // const id : string = String(this.rout.snapshot.paramMap.get('id'))
    
    this.Prodserv.ExcluirContatoId(id)
  }
  add(key){



  this.Prodserv.filtrarid(key)
  
  
 
}
  
  
}
