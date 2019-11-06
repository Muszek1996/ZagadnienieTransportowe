import {EntitiesService} from '../services/entities.service';

export class Entity {
  set cost(value: number) {
    this._cost = value;
    this.entitiesService.refreshConnections();
  }

  get cost(): number {
    return this._cost;
  }
  name: string;
  public index: number;
  private _cost: number;

  constructor(index: number, cost = 0, name = 'O', private entitiesService: EntitiesService) {
    this.name = name;
    this.index = index;
    this._cost = cost;
  }
}

