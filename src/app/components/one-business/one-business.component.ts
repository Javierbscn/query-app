import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { SalesService } from './../../services/sales.service';
import { Sale } from './../../models/sale';

@Component({
  selector: 'app-one-business',
  templateUrl: './one-business.component.html',
  styleUrls: ['./one-business.component.css'],
})
export class OneBusinessComponent implements OnInit {
  nameOfAgency: string;
  allSales: Sale[];
  salesOfAgency: Sale[];

  constructor(
    private _route: ActivatedRoute,
    public salesService: SalesService
  ) {}

  ngOnInit(): void {
    // getting name agency 
    this._route.params.subscribe((params: Params) => {
      this.nameOfAgency = params.nombre_empresa.split('_').join(' ');
    });
    // getting data from database
    this.salesService.getSales().subscribe((data) => {
      this.allSales = data;
      this.salesOfAgency = this.getSalesOfAgency(this.allSales);
    });
  }

  getSalesOfAgency(nameAgency: Sale[]) {
    const sales = nameAgency.filter((doc) => {
      if (doc.nameAgency === this.nameOfAgency) return doc;
    });
    return sales;
  }
}
