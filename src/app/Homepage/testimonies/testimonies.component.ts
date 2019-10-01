import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-testimonies',
  templateUrl: './testimonies.component.html',
  styleUrls: ['./testimonies.component.css']
})
export class TestimoniesComponent implements OnInit {
  testimonies: Array<{}> = [
    {
      content:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam harum optio sint, perferendis vero deserunt mollitia quos nostrum eveniet nisi est saepe excepturi distinctio ipsam, tempora voluptas perspiciatis, repellat ad?',
      name: 'Customer Name'
    },
    {
      content:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam harum optio sint, perferendis vero deserunt mollitia quos nostrum eveniet nisi est saepe excepturi distinctio ipsam, tempora voluptas perspiciatis, repellat ad?',
      name: 'Customer Name'
    }
  ];
  constructor() {}

  ngOnInit() {}
}
