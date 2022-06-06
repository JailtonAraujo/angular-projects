import { Component, OnInit } from '@angular/core';

import { MessagesService } from 'src/app/services/messages.service';
import { Moment } from 'src/app/Moment';
import { environment } from 'src/environments/environment';
import { MomentService } from 'src/app/services/moment.service';


@Component({
  selector: 'app-homer',
  templateUrl: './homer.component.html',
  styleUrls: ['./homer.component.css']
})
export class HomerComponent implements OnInit {

  allMoments:Moment [] = [];
  moments:Moment [] = [];
  baseApiUrl = environment.baseApiUrl;

  searchTermo:string= "";

  constructor(private momentsSevrice:MomentService) { }

  ngOnInit(): void {
    this.momentsSevrice.getMoments().subscribe((itens)=>{
      const data = itens.data;

      data.map((item)=>{
        item.created_at = new Date(item.created_at!).toLocaleDateString('pt-BR');
      });
        this.moments = data;
        this.allMoments = data;
    })
  }

  serach(event:Event):void{
    const target = event.target as HTMLInputElement;
    const value = target.value;

    this.moments = this.allMoments.filter((moment => {
      return moment.title.toLocaleLowerCase().includes(value);
    }))
  }

}
