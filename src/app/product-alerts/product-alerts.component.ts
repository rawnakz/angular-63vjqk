import { Component, OnInit } from '@angular/core';
import { Component, Input } from '@angular/core';
import { Product } from '../products';
@Component({
  selector: 'app-product-alerts',
  templateUrl: './product-alerts.component.html',
  styleUrls: ['./product-alerts.component.css']
})
export class ProductAlertsComponent implements OnInit {

  constructor() { }
  @Input() product!: Product;
  ngOnInit(): void {
  }

}
