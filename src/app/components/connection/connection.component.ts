import {Component, Input, OnInit} from '@angular/core';
import {EntitiesService} from '../../services/entities.service';
import {TransportConnection} from '../../Entities/transport-connection';

@Component({
  selector: 'app-connection',
  templateUrl: './connection.component.html',
  styleUrls: ['./connection.component.scss']
})
export class ConnectionComponent implements OnInit {
  @Input() transportConnection: TransportConnection;


  constructor(private entitiesService: EntitiesService) {
  }

  ngOnInit() {
  }

  toString() {
    return `D(${this.transportConnection.supplier.index}) O(${this.transportConnection.recipient.index})`;
  }

  currRow() {
    return this.transportConnection.supplier.index;
  }
  currCol() {
    return this.transportConnection.recipient.index;
  }

}
