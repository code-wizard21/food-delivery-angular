import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-popular-resturants',
  templateUrl: './popular-resturants.component.html',
  styleUrls: ['./popular-resturants.component.css','../recommended/recommended.component.css']
})
export class PopularResturantsComponent implements OnInit {
  foods = [
    { name: 'Jollof Rice', rating: 4 },
    { name: 'Jollof Rice', rating: 4 },
    { name: 'Jollof Rice', rating: 4 },
    { name: 'Jollof Rice', rating: 4 }
  ];
  constructor() {}

  ngOnInit() {}
}
