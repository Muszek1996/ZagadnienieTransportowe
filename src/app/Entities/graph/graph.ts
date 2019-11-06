import {TransportConnection} from '../transport-connection';
import {visit} from '@angular/compiler-cli/src/ngtsc/util/src/visitor';

export class Graph {
  adjacencyList = [];
  vertexList: TransportConnection[] = [];
  startVector: TransportConnection = null;

  addVertex(vertex) {
    this.adjacencyList[vertex] = [];
    this.vertexList.push(vertex);
    return vertex;
  }

  addEdge(vertex1, vertex2) {
    // if (this.adjacencyList[vertex2].includes(vertex1.toString())) {
    //   console.log('repeat');
    //   return;
    // }
    this.adjacencyList[vertex1].push(vertex2.toString());
  }

  detectCycle() {
    const path = [];
    console.log(this.adjacencyList);
    const graphNodes = Object.keys(this.adjacencyList);
    graphNodes.unshift(graphNodes.pop());
    const visited = [];
    const recStack = [];

    for (let i = 0; i < graphNodes.length; i++) {
      const node = graphNodes[i];
      if (this._detectCycleUtil(node, visited , recStack, -1, path)) {
        console.log(path);
        return {bool: false, path};
      }
    }
    return {bool: true, path: null};
  }

  _detectCycleUtil(vertex, visited, recStack, parent, path) {
    if (!visited[vertex]) {
      visited[vertex] = true;
      recStack[vertex] = true;
      const nodeNeighbors = this.adjacencyList[vertex];
      for (let i = 0; i < nodeNeighbors.length; i++) {
        const currentNode = nodeNeighbors[i];
        if (currentNode === parent) { continue; }
        console.log(`forward ${vertex},${currentNode}`);
        path.push(`${vertex},${currentNode}`);
        if (!visited[currentNode] && this._detectCycleUtil(currentNode, visited, recStack, vertex, path)) {
          console.log(visited);
          return true;
        } else if (recStack[currentNode]) {
          console.log(recStack);
          return true;
        } else {
          path.pop();
          console.log(`${currentNode},${vertex}`);
        }
      }
    }
    console.log(visited);
    recStack[vertex] = false;
    return false;
  }


  autoAddEdges() {

    console.log('vl', this.vertexList);
    if (this.vertexList.length <= 0) { return; }
    this.vertexList.forEach((v, i) => {

      if (v.isBase) { v.value = 999; }

      if (v.value !== 0) {
        const currRow =  v.currRow();

        let prev = 0;
        let next = 0;

        let j = v.recipient.index;
        while (!!currRow[--j] && currRow[j].value <= 0 && !currRow[j].isBase && j >= 0) {}
        if (!!currRow[j] && (currRow[j].value > 0 || currRow[j].isBase)) { prev = currRow[j]; }

        let k = v.recipient.index;
        while (!!currRow[++k] && currRow[k].value <= 0 && !currRow[k].isBase && k <= currRow.length) {}
        if (!!currRow[k] && (currRow[k].value > 0 || currRow[k].isBase)) {  next = currRow[k]; }

        const elements = [];
        if (prev) { elements.push(prev); }
        if (next) { elements.push(next); }

        console.log(currRow);
        console.log(elements);

        elements.forEach(cell => {
          if ((cell.value > 0 || cell.isBase) && cell !== v ) {
            this.addEdge(v, cell);
          } else if (cell.value === -1) {
            cell.value = 1;
            this.addEdge(v, cell);
            cell.value = 0;
          }
        });

      }

      if (v.value !== 0) {
          const currCol =  v.currCol();

          let prev = 0;
          let next = 0;

          let j = v.supplier.index;
          while (!!currCol[--j] && currCol[j].value <= 0 && !currCol[j].isBase && j >= 0) {}
          if (!!currCol[j] && (currCol[j].value > 0 || currCol[j].isBase)) { prev = currCol[j]; }

          let k = v.supplier.index;
          while (!!currCol[++k] && currCol[k].value <= 0 && !currCol[k].isBase && k <= currCol.length) {}
          if (!!currCol[k] && (currCol[k].value > 0 || currCol[k].isBase)) {  next = currCol[k]; }

          const elements = [];
          if (prev) { elements.push(prev); }
          if (next) { elements.push(next); }

          console.log(currCol);
          console.log(elements);

          elements.forEach(cell => {
            if ((cell.value > 0 || cell.isBase) && cell !== v ) {
              this.addEdge(v, cell);
            } else if (cell.value === -1) {
              cell.value = 1;
              this.addEdge(v, cell);
              cell.value = 0;
            }
          });
        }
      if (v.isBase) { v.value = 0; }
    });
  }
}
