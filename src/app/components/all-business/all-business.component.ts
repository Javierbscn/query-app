import { Component, OnInit } from '@angular/core';
import { SalesService } from 'src/app/services/sales.service';
import { Sale } from './../../models/sale';

@Component({
  selector: 'app-all-business',
  templateUrl: './all-business.component.html',
  styleUrls: ['./all-business.component.css'],
})
export class AllBusinessComponent implements OnInit {
  agencyMostSales: any;
  sales: Sale[];
  orderedSales: Sale[];
  symbolAgencys: string;
  symbolSales: string;

  constructor(public salesService: SalesService) {
    this.symbolAgencys = '▼';
    this.symbolSales = '▼';
  }

  ngOnInit(): void {
    this.salesService.getSales().subscribe((data) => {
      this.sales = data;
      this.orderedSales = this.sales;

      // add formated name agency for routing params
      this.orderedSales = this.orderedSales.map((doc) => {
        doc.formatedNameAgency = doc.nameAgency
                                  .toLowerCase()
                                  .split(' ')
                                  .join('_');
        return doc;
      });

      // get agency with most sales
      this.agencyMostSales = this.sales.reduce((acc, doc) => {
        return acc.finalPrice > doc.finalPrice ? acc : doc;
      });

      // get required data from the agency with most sales
      this.agencyMostSales = this.getAgencyMostSales(this.agencyMostSales);
    });
  }

  getAgencyMostSales(agencyMostSales: Sale) {
    const name = agencyMostSales.nameAgency;
    let totalSales = 0;
    this.sales.forEach((doc) => {
      if (doc.nameAgency === name) {
        totalSales += doc.finalPrice;
      }
    });
    return { name, totalSales };
  }

  sortByAgencys() {
    if (this.orderedSales[0].nameAgency[0].toUpperCase() !== 'A') {
      this.orderedSales = this.orderedSales.sort((a: Sale, b: Sale) => {
        this.symbolAgencys = '▼';
        return a.nameAgency > b.nameAgency ? 1 : 0;
      });
    } else {
      this.orderedSales = this.orderedSales.sort((a: Sale, b: Sale) => {
        this.symbolAgencys = '▲';
        return a.nameAgency < b.nameAgency ? 1 : 0;
      });
    }
  }

  sortBySales() {
    if (this.orderedSales[0].finalPrice > 500) {
      this.orderedSales = this.orderedSales.sort((a: Sale, b: Sale) => {
        this.symbolSales = '▼';
        return a.finalPrice > b.finalPrice ? 1 : 0;
      });
    } else {
      this.orderedSales = this.orderedSales.sort((a: Sale, b: Sale) => {
        this.symbolSales = '▲';
        return a.finalPrice > b.finalPrice ? 0 : 1;
      });
    }
  }

  getData() {}
}
