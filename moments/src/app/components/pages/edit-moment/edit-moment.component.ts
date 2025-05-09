import { Component, OnInit } from '@angular/core';

import { Moment } from 'src/app/Moment';
import { ActivatedRoute, Router } from '@angular/router';

import { MomentService } from 'src/app/services/moment.service';
import { MessagesService } from 'src/app/services/messages.service';

@Component({
  selector: 'app-edit-moment',
  templateUrl: './edit-moment.component.html',
  styleUrls: ['./edit-moment.component.css']
})
export class EditMomentComponent implements OnInit {

  moment!:Moment;
  btnText:string= "Editar";

  constructor(
    private momentService:MomentService, 
    private raute:ActivatedRoute,
    public messageService:MessagesService, 
    private router:Router 
    ) { }

  ngOnInit(): void {
    const id = Number(this.raute.snapshot.paramMap.get("id"));

    this.momentService.getMoment(id).subscribe((item) =>{
      this.moment = item.data;
    });
  }

  async edit(momentData:Moment){

    const id = this.moment.id;
     const formData = new FormData();

     formData.append('title', momentData.title);
     formData.append('description', momentData.description);
    
     if(momentData.image){
      formData.append('image', momentData.image);
     }

     await this.momentService.updateMoment(id!, formData).subscribe();

     this.messageService.add(`Momento ${id} Atualizado com sucesso!`);

     this.router.navigate(['/']);

  }

}
