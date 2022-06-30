import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {

  @Input()
  filmInfo!: any;

  @Input()
  albumInfo!: any;

  constructor() { }

  ngOnInit(): void {
  }

}
