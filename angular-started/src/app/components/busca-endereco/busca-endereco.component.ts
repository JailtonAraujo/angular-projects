import { Component, OnInit } from '@angular/core';
import { ListService } from 'src/app/services/list.service';
import { Endereco } from 'src/app/Endereco';

@Component({
  selector: 'app-busca-endereco',
  templateUrl: './busca-endereco.component.html',
  styleUrls: ['./busca-endereco.component.css']
})
export class BuscaEnderecoComponent implements OnInit {

  endereco?:Endereco;

  Cep:string = '';

  constructor(private listServer:ListService) { 

  }

  ngOnInit(): void {
  }

  getEndereco():void{
    if(this.Cep !== null && this.Cep.trim() !== ''){
      this.listServer.getEndereco(this.Cep).subscribe((endereco) => (this.endereco = endereco));
    }
  }

}
