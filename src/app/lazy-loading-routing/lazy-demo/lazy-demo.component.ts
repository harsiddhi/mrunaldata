import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lazy-demo',
  templateUrl: './lazy-demo.component.html',
  styleUrls: ['./lazy-demo.component.css']
})
export class LazyDemoComponent implements OnInit {

  constructor() {

    console.log("constructor call in lazy demo")
   }

  ngOnInit(): void {
  }

}
