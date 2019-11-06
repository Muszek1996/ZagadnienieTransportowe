import {Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {EntitiesService} from '../../services/entities.service';

@Component({
  selector: 'app-entity',
  templateUrl: './entity.component.html',
  styleUrls: ['./entity.component.scss']
})
export class EntityComponent implements OnInit, OnChanges {

  @Input() entity;
  constructor(private entitiesService: EntitiesService) {
  }

  ngOnInit() {
  }

  toString() {
    return `${this.entity.name}(${this.entity.index})`;
  }

  labelInput() {
    return this.entity.name === 'Dostawca' ? 'Podaż:' : 'Popyt:';
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('changes');

  }

}
