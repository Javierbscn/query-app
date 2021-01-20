import { Component, OnInit } from '@angular/core';
import { SalesService } from './../../services/sales.service';
import { Sale } from './../../models/sale';

@Component({
  selector: 'app-all-business',
  templateUrl: './all-business.component.html',
  styleUrls: ['./all-business.component.css'],
})
export class AllBusinessComponent implements OnInit {
  agencyMostSales: any;
  monthMostSales: string;
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
        doc.formatedNameAgency = doc.nameAgency.split(' ').join('_');
        return doc;
      });

      // getting agency with most sales
      this.agencyMostSales = this.sales.reduce((acc, doc) => {
        return acc.finalPrice > doc.finalPrice ? acc : doc;
      });

      // getting required data from the agency with most sales
      this.agencyMostSales = this.getAgencyMostSales(this.agencyMostSales);

      // getting month with most sales
      this.monthMostSales = this.getMonthMostSales(this.sales);
    });
  }

  getAgencyMostSales(agencyBusiness: Sale): object {
    const name = agencyBusiness.nameAgency;
    let totalSales = 0;
    this.sales.forEach((doc) => {
      if (doc.nameAgency === name) {
        totalSales += doc.finalPrice;
      }
    });
    return { name, totalSales };
  }

  sortByAgencys(): void {
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

  sortBySales(): void {
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

  getMonthMostSales(sales: Sale[]): string {
    let totalMonths = [];

    sales.forEach((doc) => {
      const month = doc.datePayment.split(' ')[0].split('-')[1];
      totalMonths.push(month);
    });

    totalMonths = totalMonths.reduce((acc, el) => {
      if (acc[el]) {
        acc[el]++;
      } else {
        acc[el] = 1;
      }
      return acc;
    }, {});

    totalMonths = Object.entries(totalMonths).reduce((acc, el) =>
      acc[1] > el[1] ? acc : el
    );

    return this.getMonthString(totalMonths[0]);
  }

  getMonthString(month: string): string {
    let monthString: string;
    if (month === '01') monthString = 'Enero';
    else if (month === '02') monthString = 'Febrero';
    else if (month === '03') monthString = 'Marzo';
    else if (month === '04') monthString = 'Abril';
    else if (month === '05') monthString = 'Mayo';
    else if (month === '06') monthString = 'Junio';
    else if (month === '07') monthString = 'Julio';
    else if (month === '08') monthString = 'Agosto';
    else if (month === '09') monthString = 'Septiembre';
    else if (month === '10') monthString = 'Octubre';
    else if (month === '11') monthString = 'Noviembre';
    else if (month === '12') monthString = 'Diciembre';
    return monthString;
  }
}
