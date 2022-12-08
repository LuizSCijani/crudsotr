import { Component, OnInit } from '@angular/core';
import { ProdserviceService} from 'src/app/services/prodservice.service';
import { ActivatedRoute, Route, Router} from '@angular/router';
@Component({
  selector: 'app-lista-produtos',
  templateUrl: './lista-produtos.page.html',
  styleUrls: ['./lista-produtos.page.scss'],
})
export class ListaProdutosPage implements OnInit {

  constructor(private Prodserv : ProdserviceService,public rout:ActivatedRoute) { }
  public arrayprod:any
  ngOnInit() {
  
     this.Prodserv.listartodos().then(arrayprod =>(this.arrayprod = arrayprod))
  }


 


aumentar(id){
  return id
}


ExcluirContato(id){
  // captura do id do contato
 
  
  this.Prodserv.ExcluirContatoId(id)
}


}
