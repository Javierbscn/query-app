import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { map } from 'rxjs/operators';
import { Sale } from './../models/sale';

@Injectable({
  providedIn: 'root'
})
export class SalesService {

  constructor(private db: AngularFirestore) { }

  getSales() {
    return this.db
      .collection('sales')
      .snapshotChanges()
      .pipe(
        map((actions) => {
          return actions.map((a) => {
            const data = a.payload.doc.data() as Sale;
            data.id = a.payload.doc.id;
            return data;
          });
        })
      );
  }
}
