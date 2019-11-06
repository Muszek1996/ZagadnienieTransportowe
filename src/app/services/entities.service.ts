import {Injectable, OnChanges} from '@angular/core';
import {TransportConnection} from '../Entities/transport-connection';
import {Entity} from '../Entities/entity';

@Injectable({
  providedIn: 'root'
})
export class EntitiesService {
  public suppliers: Entity[] = [];
  public recipients: Entity[] = [];
  public alfas = [0];
  public betas = [];
  public findCycleVisible = false;
  public getOptimalityVisible = false;
  public getAlfasBetasVisible = false;
  public degenerateProblemSolveVisible = false;
  public autoVisible = true;
  public countVisible = true;

  public transportConnections = [];
  public suppliersSum = 0;
  public recipientsSum = 0;
  public totalCost = 0;


  private vals = [
    [
     2, 5, 9
    ],
    [
     7, 3, 6
    ],
    [
     4, 8, 3
    ]];


  constructor() {
    const c1 = [300, 200, 200];
    const c2 = [200, 400, 100];


    for (let i = 0; i < 3; i++) {
      this.addSupplier(c1[i]);
      this.addRecipient(c2[i]);
    }
    this.refreshConnections();

    this.transportConnections.forEach((row, rowI) => {
      row.forEach( (connection, connectionI) => connection.cost = this.vals[rowI][connectionI]);
    });
  }

  addSupplier(cost = 0, name = 'Dostawca') {
    const supplier = new Entity(this.suppliers.length, cost, name, this);
    const supplierIndex = supplier.index;
    this.suppliers.push(supplier);

    if (!this.transportConnections[supplierIndex]) {
      this.transportConnections[supplierIndex] = [];

      this.recipients.forEach((r, rI) => {
        if (!this.transportConnections[supplierIndex][r.index]) {
          // tslint:disable-next-line:max-line-length
          this.transportConnections[supplierIndex][r.index] = new TransportConnection(supplier, r, 0, this);
        }
      });
    }

    this.refreshConnections();
  }

  removeSupplier() {
    this.suppliers.pop();
    this.transportConnections.pop();
    this.refreshConnections();
  }

  addRecipient(cost = 0, name = 'Odbiorca') {
    const recipient = new Entity(this.recipients.length, cost, name, this);
    const recipientIndex = recipient.index;
    this.recipients.push(recipient);

    this.suppliers.forEach(s => {
      if (!this.transportConnections[s.index][recipientIndex]) {
        this.transportConnections[s.index][recipientIndex] = new TransportConnection(s, recipient, 0, this);
      }
    });
    this.refreshConnections();
  }

  removeRecipient() {
    this.recipients.pop();
    this.suppliers.forEach(s => {
      this.transportConnections[s.index].pop();
    });
    this.refreshConnections();
  }

  getSuppliersSum() {
    let sum = 0;
    this.suppliers.forEach(r => sum += r.cost);
    return sum;
  }

  getRecipientsSum() {
    let sum = 0;
    this.recipients.forEach(r => sum += r.cost);
    return sum;
  }

  getTotalCost() {
    let sum = 0;
    this.transportConnections.forEach(row => {
      row.forEach(tc => sum += tc.cost * tc.value);
    });
    return sum;
  }

  getBaseVertexCount() {
    let bVC = 0;
    this.transportConnections.forEach( tCR => {
      tCR.forEach( tC => {
        if (tC.value !== 0 || tC.isBase) {++bVC; }
      });
    });
    return bVC;
  }

  refreshConnections() {

    console.log('refreshed connections');
    console.log('transportConnections', this.transportConnections);


    this.recipientsSum = this.getRecipientsSum();
    this.suppliersSum = this.getSuppliersSum();
    this.totalCost = this.getTotalCost();
    console.log('this.totalCost', this.totalCost);
    console.log('this.recipientsSum', this.recipientsSum);
    console.log('this.suppliersSum', this.suppliersSum);
  }

  getConnectionRow(index = 0) {
    return this.transportConnections[index];
  }


  getConnectionColumn(index = 0) {
    const col = [];
    this.transportConnections.forEach( row => {
      col.push(row[index]);
    });
    return col;
  }


}
