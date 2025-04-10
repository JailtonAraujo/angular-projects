import { Component, OnInit } from '@angular/core';
import { Animal } from 'src/app/Animal';
import { ActivatedRoute } from '@angular/router';
import { ListService } from 'src/app/services/list.service';

@Component({
  selector: 'app-item-detail',
  templateUrl: './item-detail.component.html',
  styleUrls: ['./item-detail.component.css']
})
export class ItemDetailComponent implements OnInit {

  animal?:Animal

  constructor(private listServise :ListService, private router :ActivatedRoute) {
      this.getAnimal();
   }

  ngOnInit(): void {
  }

  getAnimal(){
    const id = Number(this.router.snapshot.paramMap.get("id"));
    this.listServise.getItem(id).subscribe((animal) => (this.animal = animal));
  }

}
