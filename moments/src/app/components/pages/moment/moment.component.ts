import { Component, OnInit } from '@angular/core';

import { MomentService } from 'src/app/services/moment.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Moment } from 'src/app/Moment';

@Component({
  selector: 'app-moment',
  templateUrl: './moment.component.html',
  styleUrls: ['./moment.component.css']
})
export class MomentComponent implements OnInit {
  moment?:Moment;

  constructor(private momentService:MomentService,
     private router:ActivatedRoute) { }

  ngOnInit(): void {
    const id = Number(this.router.snapshot.paramMap.get("id"));

    this.momentService.getMoment(id).subscribe((item) => (this.moment =  item.data));
  }

}
