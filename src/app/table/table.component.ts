import {Component, Input, OnChanges, OnInit, SimpleChanges, } from '@angular/core';
import {EntitiesService} from '../services/entities.service';
import {Entity} from '../Entities/entity';
import {SolverService} from '../services/solver.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {
  private showComponent = true;

  public refresh() {
    this.showComponent = false;
    setTimeout(x => this.showComponent = true);
  }

  public licz() {

    while (
      this.entitiesService.countVisible ||
      this.entitiesService.degenerateProblemSolveVisible ||
      this.entitiesService.getAlfasBetasVisible ||
      this.entitiesService.getOptimalityVisible ||
      this.entitiesService.findCycleVisible) {
      if ( this.entitiesService.countVisible) {
        this.solver.count();
      }
      if ( this.entitiesService.degenerateProblemSolveVisible) {
        this.solver.degenerateProblemSolve();
      }
      if ( this.entitiesService.getAlfasBetasVisible) {
        this.solver.getAlfasBetas();
      }
      if ( this.entitiesService.getOptimalityVisible) {
        this.solver.getOptimalityIndicators();
      }
      if ( this.entitiesService.findCycleVisible) {
        this.solver.findCycle();
      }
    }
  }

  constructor(private entitiesService: EntitiesService, private solver: SolverService) {

  }

  addSupplier() {
    this.entitiesService.addSupplier();
  }

  removeSupplier() {
    this.entitiesService.removeSupplier();
  }

  addRecipient() {
    this.entitiesService.addRecipient();
  }

  removeRecipient() {
    this.entitiesService.removeRecipient();
  }

  ngOnInit() {
  }

}
