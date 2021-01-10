import { Component, OnInit } from '@angular/core';
import { SalesService } from 'src/app/services/sales.service';
import { Sale } from './../../models/sale';

@Component({
  selector: 'app-all-business',
  templateUrl: './all-business.component.html',
  styleUrls: ['./all-business.component.css'],
})
export class AllBusinessComponent implements OnInit {
  sales: Sale[];
  salesOrdered: Sale[];
  constructor(public salesService: SalesService) {}

  ngOnInit(): void {
    this.salesService.getSales().subscribe((data) => this.sales = data);
  }

  getData() {}
}
