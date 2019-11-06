import {Entity} from './entity';
import {EntitiesService} from '../services/entities.service';

export class TransportConnection {
  public value = 0;
  public isClosedLoopPossible = false;
  public isBase = false;
  public optimalityIndicator = 0;

  constructor(public supplier: Entity, public recipient: Entity, public cost = 0, private entitiesService: EntitiesService) {

  }

  toString() {
    return `${this.supplier.index};${this.recipient.index}`;
  }

  currRow() {
    return this.entitiesService.getConnectionRow(this.supplier.index);
  }
  currCol() {
    return this.entitiesService.getConnectionColumn(this.recipient.index);
  }

  supIndex() {
    return this.supplier.index;
  }
  recIndex() {
    return this.recipient.index;
  }

}
