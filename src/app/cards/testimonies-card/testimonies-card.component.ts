import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-testimonies-card',
  templateUrl: './testimonies-card.component.html',
  styleUrls: [
    './testimonies-card.component.css',
    '../how-it-works/card.component.css'
  ]
})
export class TestimoniesCardComponent implements OnInit {
  @Input() testimony;
  constructor() {}

  ngOnInit() {}
}
