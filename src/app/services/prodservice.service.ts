import { produto } from './../models/prod.model';



import { Storage } from '@ionic/storage-angular';
import { Injectable } from '@angular/core';



import { Guid } from 'guid-typescript';



@Injectable({
  providedIn: 'root'
})
export class ProdserviceService {

  constructor(private storage : Storage) { }

  insert(argumento:produto){

    argumento.id = Guid.create()

    this.storage.set(argumento.id.toString() ,JSON.stringify(argumento))


  }




 async listartodos(){

  let arrayprod : produto [] = [];
  await this.storage.forEach((value:string)=>{const produto: produto = JSON.parse(value);arrayprod.push(produto)})
  
  return arrayprod;
}



 async filtrarid(id){

  console.log(id)


  console.log(JSON.parse(await this.storage.get(id)))

  
  return console.log('asd',JSON.parse(await this.storage.get(id)))
}


 ExcluirContatoId(id : string){
  this.storage.remove(id)

}
 


// update===


// AlterarContatoId(id: string, dadosRecebidos: Contato){
//   dadosRecebidos.id = Guid.parse(id)
//   this.storage.set(dadosRecebidos.id.toString(), JSON.stringify(dadosRecebidos))
// }

// }


updatequan(id,quan){

let quant = quan+1

console.log(quant)

quant.id = Guid.parse(id)
this.storage.set(quant.id.toString(),JSON.stringify(quant))







}


// ==================================



// DELL==============================

// ===================================


}
