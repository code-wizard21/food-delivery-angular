import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-how-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class HowItWorksCardComponent implements OnInit {
  @Input() guideDetail;
  constructor() {}

  ngOnInit() {}
}
