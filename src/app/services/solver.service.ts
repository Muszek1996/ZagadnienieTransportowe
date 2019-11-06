import {Injectable} from '@angular/core';
import {EntitiesService} from './entities.service';
import {Graph} from '../Entities/graph/graph';
import {min} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SolverService {

  constructor(private entitiesService: EntitiesService) {
  }

  count() {
    console.log('COUNT');
    const tC = this.entitiesService.transportConnections;

    tC.forEach(row => {
      row.forEach(cell => {
        const min = Math.min(cell.supplier.cost, cell.recipient.cost);
        if (cell.supplier.cost === cell.recipient.cost) { console.log('CELL', cell); }
        cell.supplier.cost -= min;
        cell.recipient.cost -= min;

        cell.value = min;
        console.log(min);
      });
    });
    if (this.entitiesService.getBaseVertexCount() !== (this.entitiesService.suppliers.length + this.entitiesService.recipients.length - 1)) {
      this.entitiesService.degenerateProblemSolveVisible = true;
    } else {
      this.entitiesService.getAlfasBetasVisible = true;
    }

    this.entitiesService.refreshConnections();
    this.entitiesService.countVisible = false;
  }

  getAlfasBetas() {
    this.entitiesService.alfas = [0];
    this.entitiesService.betas = [];

    let i = 0;
    while ((this.entitiesService.alfas.length !== this.entitiesService.suppliers.length ||
             this.entitiesService.betas.length !== this.entitiesService.recipients.length) && ++i < 100) {


        if (this.entitiesService.getBaseVertexCount() !==
          (this.entitiesService.suppliers.length + this.entitiesService.recipients.length - 1)) {
          this.entitiesService.degenerateProblemSolveVisible = true;
          this.entitiesService.getAlfasBetasVisible = false;
          alert(`Ilość wierzchołków bazowych nie zgodna (m+n-1) => (${this.entitiesService.suppliers.length }
      +${this.entitiesService.recipients.length}-1)
      != ${this.entitiesService.getBaseVertexCount()}`);
          return ;
        }


        this.entitiesService.transportConnections.forEach( (tCRow, tCRowI) => {
          tCRow.forEach( (tC, tCI) => {
            console.log(isNaN(this.entitiesService.betas[tCI]));
            if (tC.value === 0 || !isNaN(this.entitiesService.betas[tCI]) || isNaN(this.entitiesService.alfas[tCRowI])) { return; }
            this.entitiesService.betas[tCI] = tC.cost - this.entitiesService.alfas[tCRowI];
          });
        });

        this.entitiesService.betas.forEach( (b, bI) => {
          this.entitiesService.transportConnections.forEach( (tCRow, tCRowI) => {
            if ((tCRow[bI].value === 0 && !tCRow[bI].isBase) || !isNaN(this.entitiesService.alfas[tCRowI]) ) { return; }
            console.log(`alfa:${this.entitiesService.alfas[tCRowI]}[${bI}]`);
            console.log(`cost:${tCRow[bI].cost}[${tCRowI},${bI}]`);
            this.entitiesService.alfas[tCRowI] = tCRow[bI].cost - b;
          });
        });

      }

    this.entitiesService.getAlfasBetasVisible = false;
    this.entitiesService.getOptimalityVisible = true;
    this.entitiesService.refreshConnections();
    }





    degenerateProblemSolve() {
      this.entitiesService.degenerateProblemSolveVisible = false;
      this.entitiesService.getAlfasBetasVisible = true;
      const newBaseCandidates = [];

      const nonBase = this.getNonBaseVectors();

      nonBase.forEach( nB => {
          const graph = new Graph();

          this.entitiesService.transportConnections.forEach((tCR, tCRI) => {
            tCR.forEach((cell, cellI) => {
              if (cell.value > 0) {
                graph.addVertex(cell);
              }
            });
          });

          const x = nB.supIndex();
          const y = nB.recIndex();


          this.entitiesService.transportConnections[x][y].value = Number.MAX_SAFE_INTEGER;
          const ver = graph.addVertex(this.entitiesService.transportConnections[x][y]);
          graph.autoAddEdges();
          ver.isClosedLoopImpossible = graph.detectCycle().bool;
          if (ver.isClosedLoopImpossible) {
            newBaseCandidates.push(ver);
          }
          this.entitiesService.transportConnections[x][y].value = 0;
        });

      let val = Number.MAX_SAFE_INTEGER;
      let zeroBaseVertex;
      newBaseCandidates.forEach( nbc => {
        if (nbc.cost < val) {
          val = nbc.cost;
          zeroBaseVertex = nbc;
        }
      });
      if (zeroBaseVertex === undefined) {val = 0; zeroBaseVertex = 0; }

      if (!!zeroBaseVertex) {
        console.log(zeroBaseVertex.isBase = true);
      }

      this.entitiesService.refreshConnections();
      this.entitiesService.degenerateProblemSolveVisible = false;
      this.entitiesService.getAlfasBetasVisible = true;
    }

    getNonBaseVectors() {
      const nonBase = [];

      this.entitiesService.transportConnections.forEach(r => {
        r.forEach( c => {
          if (c.value === 0 && !c.isBase) { nonBase.push(c); }
        });
      });
      return nonBase;
    }

    getOptimalityIndicators() {
      const nB = this.getNonBaseVectors();
      let isOptimal = true;
      nB.forEach( nb => {
        const alpha = this.entitiesService.alfas[nb.supIndex()];
        const beta = this.entitiesService.betas[nb.recIndex()];

        nb.optimalityIndicator = nb.cost - alpha - beta;
        if (nb.optimalityIndicator < 0) { isOptimal = false; }
      });


      this.entitiesService.getOptimalityVisible = false;
      this.entitiesService.findCycleVisible = true;
      this.entitiesService.refreshConnections();
      if (isOptimal) {
        alert(`Znaleziono rozwiązanie optymalne !`);
        this.entitiesService.findCycleVisible = false;
        this.entitiesService.autoVisible = false;
      }
    }

  pathBeautify(path) {
    path = path.map( row => row.split(',')[0]);

    path.push(path[0]);

    console.log(path);

    for (let i = 0; i <= path.length - 3; i++) {
      if (
        (
          (path[i].split(';')[0] === path[i + 1].split(';')[0]) &&
          (path[i + 1].split(';')[0] === path[i + 2].split(';')[0])
        )
        ||
        (
          (path[i].split(';')[1] === path[i + 1].split(';')[1]) &&
          (path[i + 1].split(';')[1] === path[i + 2].split(';')[1]))
      ) {
        delete path[i + 1];
        i++;
      }
    }
    path.pop();
    const arr = [];

    path.forEach(v => {
      if (!!v) {
        arr.push(v);
      }
    });

    console.log(arr);
    return arr;
  }

  getVertexFromPath(path) {
    const vertexArr = [];
    path.forEach(xy => {
      const y = xy.split(';')[0];
      const x = xy.split(';')[1];

      vertexArr.push(this.entitiesService.transportConnections[y][x]);
    });
    return vertexArr;
  }

  changeValuesInCycle(vertexArr) {
    let minVal = Number.MAX_SAFE_INTEGER;
    vertexArr.forEach(v => {
      if (v.value < minVal && v.value > 0) {
        minVal = v.value;
      }
    });

    vertexArr.forEach((v, i) => {
      if (i % 2) {
        v.value -= minVal;
      } else {
        v.value += minVal;
      }
    });

    console.log(vertexArr);
  }

  isCyclable(vertex, graph) {
    vertex.value = Number.MAX_SAFE_INTEGER;
    const ver = graph.addVertex(vertex);
    graph.autoAddEdges();
    const retVal = graph.detectCycle();

    ver.isClosedLoopImpossible = retVal.bool;
    console.log('path:', retVal.path);
    vertex.value = 0;

    const path = this.pathBeautify(retVal.path);

    const vertexArr = this.getVertexFromPath(path);

    this.changeValuesInCycle(vertexArr);

    console.log('vertexArr', vertexArr);

    return ver.isClosedLoopImpossible;
  }

    findCycle() {
      let nonBase = this.getNonBaseVectors();
      nonBase = nonBase.filter( nb => nb.optimalityIndicator < 0);

      let val = Number.MAX_SAFE_INTEGER;
      let smallestCandidate;
      nonBase.forEach( nbc => {
        if (nbc.optimalityIndicator < val) {
          val = nbc.optimalityIndicator;
          smallestCandidate = nbc;
        }
      });
      if (!smallestCandidate) {
        return; }

      const graph = new Graph();
      const tC = this.entitiesService.transportConnections;
      tC.forEach((tCR, tCRI) => {
          tCR.forEach((cell, cellI) => {
            if (cell.value > 0 || cell.isBase) {
              graph.addVertex(cell);
            }
          });
        });

      const x = smallestCandidate.supIndex();
      const y = smallestCandidate.recIndex();
      if (this.isCyclable(this.entitiesService.transportConnections[x][y], graph)) {
          smallestCandidate.isClosedLoopPossible = true;
        }
      this.entitiesService.refreshConnections();
      this.entitiesService.getAlfasBetasVisible = true;
      this.entitiesService.findCycleVisible = false;
    }
}
