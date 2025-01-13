import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, RouterLink } from '@angular/router';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [CommonModule,RouterLink],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent implements OnInit {
  
  public user =[
    {id:1,name:"john"},
    {id:2,name:"alphonse"},
    {id:3,name:"george"}
  ];


  public id: String | null | undefined;
  constructor(private route: ActivatedRoute){

    console.log("composant id:" + this.id)
  }

  ngOnInit(): void {
      this.route.paramMap.subscribe((paramMap: ParamMap) =>{
      this.id=paramMap.get('id')
      });/*En gros ca recupere l'id depuis l'url*/
      console.log("composant user id:" + this.id)
  }
}

 