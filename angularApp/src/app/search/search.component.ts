import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})

export class SearchComponent implements OnInit {
    values: string = '';
    minLength: number = 3;
    onKey(value: string) {
      console.log(this.values = value );
    }

    constructor() { }

  ngOnInit() {
  }

}
