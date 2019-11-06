(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/app.component.html":
/*!**************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/app.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-table>\r\n</app-table>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/cell/cell.component.html":
/*!********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/cell/cell.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\n  a\n  <input type=\"number\" />\n</div>\n\n\n\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/connection/connection.component.html":
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/connection/connection.component.html ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"cell\" [ngClass]=\"{'baseVertex': transportConnection.value !== 0 || transportConnection.isBase}\">\n  <div>\n    <label>\n      <i class=\"fa fa-dollar\"></i><input type=\"number\" [(ngModel)]=\"transportConnection.cost\" [min]=\"0\" [max]=\"9999999\"/><i *ngIf=\"transportConnection.value !== 0 || transportConnection.isBase\" class=\"fa fa-star\"></i>\n    </label>\n  </div>\n  <br />\n\n  <br />\n  <div class=\"value\">\n   {{transportConnection.value | xPipe}} <i class=\"fa fa-truck\"></i>\n  </div>\n  <i *ngIf=\"transportConnection.isClosedLoopPossible\" class=\"fa fa-connectdevelop\"></i>\n  <div class=\"optimalityIndicator\" *ngIf=\"!(transportConnection.value !== 0 || transportConnection.isBase)\"> {{transportConnection.optimalityIndicator}}</div>\n</div>\n\n\n\n\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/entity/entity.component.html":
/*!***********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/entity/entity.component.html ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "{{this}}\n<br />\n<label>\n  {{this.labelInput()}}<input type=\"number\" [(ngModel)]=\"entity.cost\" [min]=\"0\" [max]=\"9999999\" />\n</label>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/table/table.component.html":
/*!**********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/table/table.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"table\"  *ngIf=\"showComponent\">\n  <table>\n    <tr>\n      <th class=\"background\" [ngClass]=\"{'wrong': entitiesService.suppliersSum !== entitiesService.recipientsSum}\">\n        <div><span class=\"bottom\">Σ= {{entitiesService.suppliersSum}}</span>\n          <span class=\"top\">Σ= {{entitiesService.recipientsSum}}</span>\n          <div class=\"line\"></div>\n        </div>\n      </th>\n      <th *ngFor=\"let recipient of entitiesService.recipients; last as isLast\">\n        <div class=\"recipientWrapper\">\n          <app-entity [entity]=\"recipient\"></app-entity>\n        </div>\n        <div *ngIf=\"isLast\" class=\"addRecipientButtonsWrapper\">\n          <button (click)=\"addRecipient()\">\n            <i class=\"fa fa-plus\" aria-hidden=\"true\"> </i>\n          </button>\n          <button  *ngIf=\"entitiesService.recipients.length>1\" (click)=\"removeRecipient()\">\n            <i class=\"fa fa-minus\" aria-hidden=\"true\"> </i>\n          </button>\n        </div>\n      </th>\n      <th style=\"width:50px; font-size: xx-large\">α</th>\n    </tr>\n    <tr class=\"row\" *ngFor=\"let supplier of entitiesService.suppliers; last as isLast; index as supplierIndex\">\n      <td>\n        <app-entity [entity]=\"supplier\"></app-entity>\n        <div *ngIf=\"isLast\" >\n          <button  (click)=\"addSupplier()\">\n            <i class=\"fa fa-plus\" aria-hidden=\"true\"> </i>\n          </button><br />\n          <button *ngIf=\"entitiesService.suppliers.length>1\" (click)=\"removeSupplier()\">\n            <i class=\"fa fa-minus \" aria-hidden=\"true\"> </i>\n          </button>\n        </div>\n      </td>\n      <td *ngFor=\"let connection of entitiesService.transportConnections[supplierIndex]\" [ngClass]=\"{'baseVertex': connection.value !== 0 || connection.isBase}\">\n        <app-connection [transportConnection]=\"connection\"></app-connection>\n      </td>\n      <td  style=\"width:50px; font-size: xx-large\">\n        {{entitiesService.alfas[supplierIndex]}}\n      </td>\n    </tr>\n    <tr style=\"height: 50px; font-size: xx-large\">\n      <td>β</td>\n      <td *ngFor=\"let recipient of entitiesService.recipients; last as isLast; index as recipientIndex\">  {{entitiesService.betas[recipientIndex]}} </td>\n    </tr>\n    <tr style=\"height: 20px;\">\n      <td colspan=\"5\"> Koszty transportu:  <i class=\"fa fa-money\" aria-hidden=\"true\"> </i> {{entitiesService.totalCost}}</td>\n    </tr>\n\n  </table>\n  <div id=\"buttonsWrapper\">\n    <button class=\"btn stepButton\" *ngIf=\"entitiesService.countVisible\" (click)=\"solver.count()\">Oblicz wartości transportów</button>\n    <button class=\"btn stepButton\" *ngIf=\"entitiesService.degenerateProblemSolveVisible\" (click)=\"solver.degenerateProblemSolve()\">Problem degeneracji - dołóż zerowe pole bazowe</button>\n    <button class=\"btn stepButton\" *ngIf=\"entitiesService.getAlfasBetasVisible\" (click)=\"solver.getAlfasBetas()\">Oblicz zmienne dualne</button>\n    <button class=\"btn stepButton\" *ngIf=\"entitiesService.getOptimalityVisible \" (click)=\"solver.getOptimalityIndicators(); oIVisible = !oIVisible\">Oblicz wskaźniki optymalności</button>\n    <button class=\"btn stepButton\" *ngIf=\"entitiesService.findCycleVisible\" (click)=\"solver.findCycle();\">Znajdź cykl i odpowiednio zmień wartości transportu</button>\n  </div>\n  <button class=\"btn licz\" *ngIf=\"entitiesService.autoVisible\" (click)=\"licz()\">Licz automatycznie!</button>\n  <button class=\"reload btn\" onClick=\"window.location.reload();\" >Przeładuj</button>\n</div>\n\n\n\n"

/***/ }),

/***/ "./src/app/Entities/entity.ts":
/*!************************************!*\
  !*** ./src/app/Entities/entity.ts ***!
  \************************************/
/*! exports provided: Entity */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Entity", function() { return Entity; });
/* harmony import */ var _services_entities_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../services/entities.service */ "./src/app/services/entities.service.ts");

var Entity = /** @class */ (function () {
    function Entity(index, cost, name, entitiesService) {
        if (cost === void 0) { cost = 0; }
        if (name === void 0) { name = 'O'; }
        this.entitiesService = entitiesService;
        this.name = name;
        this.index = index;
        this._cost = cost;
    }
    Object.defineProperty(Entity.prototype, "cost", {
        get: function () {
            return this._cost;
        },
        set: function (value) {
            this._cost = value;
            this.entitiesService.refreshConnections();
        },
        enumerable: true,
        configurable: true
    });
    Entity.ctorParameters = function () { return [
        { type: Number },
        null,
        null,
        { type: _services_entities_service__WEBPACK_IMPORTED_MODULE_0__["EntitiesService"] }
    ]; };
    return Entity;
}());



/***/ }),

/***/ "./src/app/Entities/graph/graph.ts":
/*!*****************************************!*\
  !*** ./src/app/Entities/graph/graph.ts ***!
  \*****************************************/
/*! exports provided: Graph */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Graph", function() { return Graph; });
var Graph = /** @class */ (function () {
    function Graph() {
        this.adjacencyList = [];
        this.vertexList = [];
        this.startVector = null;
    }
    Graph.prototype.addVertex = function (vertex) {
        this.adjacencyList[vertex] = [];
        this.vertexList.push(vertex);
        return vertex;
    };
    Graph.prototype.addEdge = function (vertex1, vertex2) {
        // if (this.adjacencyList[vertex2].includes(vertex1.toString())) {
        //   console.log('repeat');
        //   return;
        // }
        this.adjacencyList[vertex1].push(vertex2.toString());
    };
    Graph.prototype.detectCycle = function () {
        var path = [];
        console.log(this.adjacencyList);
        var graphNodes = Object.keys(this.adjacencyList);
        graphNodes.unshift(graphNodes.pop());
        var visited = [];
        var recStack = [];
        for (var i = 0; i < graphNodes.length; i++) {
            var node = graphNodes[i];
            if (this._detectCycleUtil(node, visited, recStack, -1, path)) {
                console.log(path);
                return { bool: false, path: path };
            }
        }
        return { bool: true, path: null };
    };
    Graph.prototype._detectCycleUtil = function (vertex, visited, recStack, parent, path) {
        if (!visited[vertex]) {
            visited[vertex] = true;
            recStack[vertex] = true;
            var nodeNeighbors = this.adjacencyList[vertex];
            for (var i = 0; i < nodeNeighbors.length; i++) {
                var currentNode = nodeNeighbors[i];
                if (currentNode === parent) {
                    continue;
                }
                console.log("forward " + vertex + "," + currentNode);
                path.push(vertex + "," + currentNode);
                if (!visited[currentNode] && this._detectCycleUtil(currentNode, visited, recStack, vertex, path)) {
                    console.log(visited);
                    return true;
                }
                else if (recStack[currentNode]) {
                    console.log(recStack);
                    return true;
                }
                else {
                    path.pop();
                    console.log(currentNode + "," + vertex);
                }
            }
        }
        console.log(visited);
        recStack[vertex] = false;
        return false;
    };
    Graph.prototype.autoAddEdges = function () {
        var _this = this;
        console.log('vl', this.vertexList);
        if (this.vertexList.length <= 0) {
            return;
        }
        this.vertexList.forEach(function (v, i) {
            if (v.isBase) {
                v.value = Number.MAX_SAFE_INTEGER;
            }
            if (v.value !== 0) {
                var currRow = v.currRow();
                var prev = 0;
                var next = 0;
                var j = v.recipient.index;
                while (!!currRow[--j] && currRow[j].value <= 0 && !currRow[j].isBase && j >= 0) { }
                if (!!currRow[j] && (currRow[j].value > 0 || currRow[j].isBase)) {
                    prev = currRow[j];
                }
                var k = v.recipient.index;
                while (!!currRow[++k] && currRow[k].value <= 0 && !currRow[k].isBase && k <= currRow.length) { }
                if (!!currRow[k] && (currRow[k].value > 0 || currRow[k].isBase)) {
                    next = currRow[k];
                }
                var elements = [];
                if (prev) {
                    elements.push(prev);
                }
                if (next) {
                    elements.push(next);
                }
                console.log(currRow);
                console.log(elements);
                elements.forEach(function (cell) {
                    if ((cell.value > 0 || cell.isBase) && cell !== v) {
                        _this.addEdge(v, cell);
                    }
                    else if (cell.value === -1) {
                        cell.value = 1;
                        _this.addEdge(v, cell);
                        cell.value = 0;
                    }
                });
            }
            if (v.value !== 0) {
                var currCol = v.currCol();
                var prev = 0;
                var next = 0;
                var j = v.supplier.index;
                while (!!currCol[--j] && currCol[j].value <= 0 && !currCol[j].isBase && j >= 0) { }
                if (!!currCol[j] && (currCol[j].value > 0 || currCol[j].isBase)) {
                    prev = currCol[j];
                }
                var k = v.supplier.index;
                while (!!currCol[++k] && currCol[k].value <= 0 && !currCol[k].isBase && k <= currCol.length) { }
                if (!!currCol[k] && (currCol[k].value > 0 || currCol[k].isBase)) {
                    next = currCol[k];
                }
                var elements = [];
                if (prev) {
                    elements.push(prev);
                }
                if (next) {
                    elements.push(next);
                }
                console.log(currCol);
                console.log(elements);
                elements.forEach(function (cell) {
                    if ((cell.value > 0 || cell.isBase) && cell !== v) {
                        _this.addEdge(v, cell);
                    }
                    else if (cell.value === -1) {
                        cell.value = 1;
                        _this.addEdge(v, cell);
                        cell.value = 0;
                    }
                });
            }
            if (v.isBase) {
                v.value = 0;
            }
        });
    };
    return Graph;
}());



/***/ }),

/***/ "./src/app/Entities/transport-connection.ts":
/*!**************************************************!*\
  !*** ./src/app/Entities/transport-connection.ts ***!
  \**************************************************/
/*! exports provided: TransportConnection */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TransportConnection", function() { return TransportConnection; });
/* harmony import */ var _entity__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./entity */ "./src/app/Entities/entity.ts");
/* harmony import */ var _services_entities_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/entities.service */ "./src/app/services/entities.service.ts");


var TransportConnection = /** @class */ (function () {
    function TransportConnection(supplier, recipient, cost, entitiesService) {
        if (cost === void 0) { cost = 0; }
        this.supplier = supplier;
        this.recipient = recipient;
        this.cost = cost;
        this.entitiesService = entitiesService;
        this.value = 0;
        this.isClosedLoopPossible = false;
        this.isBase = false;
        this.optimalityIndicator = 0;
    }
    TransportConnection.prototype.toString = function () {
        return this.supplier.index + ";" + this.recipient.index;
    };
    TransportConnection.prototype.currRow = function () {
        return this.entitiesService.getConnectionRow(this.supplier.index);
    };
    TransportConnection.prototype.currCol = function () {
        return this.entitiesService.getConnectionColumn(this.recipient.index);
    };
    TransportConnection.prototype.supIndex = function () {
        return this.supplier.index;
    };
    TransportConnection.prototype.recIndex = function () {
        return this.recipient.index;
    };
    TransportConnection.ctorParameters = function () { return [
        { type: _entity__WEBPACK_IMPORTED_MODULE_0__["Entity"] },
        { type: _entity__WEBPACK_IMPORTED_MODULE_0__["Entity"] },
        null,
        { type: _services_entities_service__WEBPACK_IMPORTED_MODULE_1__["EntitiesService"] }
    ]; };
    return TransportConnection;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'ZagadnienieTransportowe';
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/index.js!./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _cell_cell_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./cell/cell.component */ "./src/app/cell/cell.component.ts");
/* harmony import */ var _table_table_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./table/table.component */ "./src/app/table/table.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _components_entity_entity_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/entity/entity.component */ "./src/app/components/entity/entity.component.ts");
/* harmony import */ var _components_connection_connection_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/connection/connection.component */ "./src/app/components/connection/connection.component.ts");
/* harmony import */ var _pipes_x_pipe_pipe__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./pipes/x-pipe.pipe */ "./src/app/pipes/x-pipe.pipe.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");











var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                _cell_cell_component__WEBPACK_IMPORTED_MODULE_4__["CellComponent"],
                _table_table_component__WEBPACK_IMPORTED_MODULE_5__["TableComponent"],
                _components_entity_entity_component__WEBPACK_IMPORTED_MODULE_7__["EntityComponent"],
                _components_connection_connection_component__WEBPACK_IMPORTED_MODULE_8__["ConnectionComponent"],
                _pipes_x_pipe_pipe__WEBPACK_IMPORTED_MODULE_9__["XPipePipe"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_10__["HttpClientModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/cell/cell.component.scss":
/*!******************************************!*\
  !*** ./src/app/cell/cell.component.scss ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "div {\n  border: 2px solid #476fbd;\n  width: 100px;\n}\ndiv > input {\n  width: 50%;\n  display: inline-block;\n  float: left;\n  clear: left;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY2VsbC9DOlxcVXNlcnNcXE11c3pla1xcV2Vic3Rvcm1Qcm9qZWN0c1xcWmFnYWRuaWVuaWVUcmFuc3BvcnRvd2Uvc3JjXFxhcHBcXGNlbGxcXGNlbGwuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2NlbGwvY2VsbC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHlCQUFBO0VBQ0EsWUFBQTtBQ0NGO0FEQUU7RUFDRSxVQUFBO0VBQ0EscUJBQUE7RUFDQSxXQUFBO0VBQ0EsV0FBQTtBQ0VKIiwiZmlsZSI6InNyYy9hcHAvY2VsbC9jZWxsLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiZGl2e1xyXG4gIGJvcmRlcjogMnB4IHNvbGlkICM0NzZmYmQ7XHJcbiAgd2lkdGg6MTAwcHg7XHJcbiAgJj5pbnB1dHtcclxuICAgIHdpZHRoOjUwJTtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIGZsb2F0OiBsZWZ0O1xyXG4gICAgY2xlYXI6bGVmdDtcclxuICB9XHJcblxyXG59XHJcbiIsImRpdiB7XG4gIGJvcmRlcjogMnB4IHNvbGlkICM0NzZmYmQ7XG4gIHdpZHRoOiAxMDBweDtcbn1cbmRpdiA+IGlucHV0IHtcbiAgd2lkdGg6IDUwJTtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBmbG9hdDogbGVmdDtcbiAgY2xlYXI6IGxlZnQ7XG59Il19 */"

/***/ }),

/***/ "./src/app/cell/cell.component.ts":
/*!****************************************!*\
  !*** ./src/app/cell/cell.component.ts ***!
  \****************************************/
/*! exports provided: CellComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CellComponent", function() { return CellComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var CellComponent = /** @class */ (function () {
    function CellComponent() {
    }
    CellComponent.prototype.ngOnInit = function () {
    };
    CellComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-cell',
            template: __webpack_require__(/*! raw-loader!./cell.component.html */ "./node_modules/raw-loader/index.js!./src/app/cell/cell.component.html"),
            styles: [__webpack_require__(/*! ./cell.component.scss */ "./src/app/cell/cell.component.scss")]
        })
    ], CellComponent);
    return CellComponent;
}());



/***/ }),

/***/ "./src/app/components/connection/connection.component.scss":
/*!*****************************************************************!*\
  !*** ./src/app/components/connection/connection.component.scss ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".cell {\n  margin: 5px;\n  height: 100%;\n  width: 100%;\n}\n\ninput {\n  width: 40px;\n}\n\n.optimalityIndicator {\n  position: relative;\n  top: -35%;\n  left: -4%;\n  -webkit-transform: translate(50%, 50%);\n          transform: translate(50%, 50%);\n}\n\n.value {\n  float: right;\n  font-weight: 900;\n  font-size: 1.5rem;\n  margin-right: 10px;\n}\n\n.fa-star {\n  color: gold;\n  font-size: 1.1rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9jb25uZWN0aW9uL0M6XFxVc2Vyc1xcTXVzemVrXFxXZWJzdG9ybVByb2plY3RzXFxaYWdhZG5pZW5pZVRyYW5zcG9ydG93ZS9zcmNcXGFwcFxcY29tcG9uZW50c1xcY29ubmVjdGlvblxcY29ubmVjdGlvbi5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvY29tcG9uZW50cy9jb25uZWN0aW9uL2Nvbm5lY3Rpb24uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7QUNDRjs7QURFQTtFQUNFLFdBQUE7QUNDRjs7QURFQTtFQUNFLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLFNBQUE7RUFDQSxzQ0FBQTtVQUFBLDhCQUFBO0FDQ0Y7O0FERUE7RUFDRSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0FDQ0Y7O0FERUE7RUFDRSxXQUFBO0VBQ0EsaUJBQUE7QUNDRiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvY29ubmVjdGlvbi9jb25uZWN0aW9uLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNlbGx7XHJcbiAgbWFyZ2luOiA1cHg7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIHdpZHRoOjEwMCU7XHJcbn1cclxuXHJcbmlucHV0e1xyXG4gIHdpZHRoOiA0MHB4O1xyXG59XHJcblxyXG4ub3B0aW1hbGl0eUluZGljYXRvcntcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgdG9wOiAtMzUlO1xyXG4gIGxlZnQ6IC00JTtcclxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSg1MCUsNTAlKTtcclxufVxyXG5cclxuLnZhbHVle1xyXG4gIGZsb2F0OiByaWdodDtcclxuICBmb250LXdlaWdodDogOTAwO1xyXG4gIGZvbnQtc2l6ZTogMS41cmVtO1xyXG4gIG1hcmdpbi1yaWdodDogMTBweDtcclxufVxyXG5cclxuLmZhLXN0YXJ7XHJcbiAgY29sb3I6IGdvbGQ7XHJcbiAgZm9udC1zaXplOiAxLjFyZW07XHJcbn1cclxuXHJcbiIsIi5jZWxsIHtcbiAgbWFyZ2luOiA1cHg7XG4gIGhlaWdodDogMTAwJTtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbmlucHV0IHtcbiAgd2lkdGg6IDQwcHg7XG59XG5cbi5vcHRpbWFsaXR5SW5kaWNhdG9yIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB0b3A6IC0zNSU7XG4gIGxlZnQ6IC00JTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoNTAlLCA1MCUpO1xufVxuXG4udmFsdWUge1xuICBmbG9hdDogcmlnaHQ7XG4gIGZvbnQtd2VpZ2h0OiA5MDA7XG4gIGZvbnQtc2l6ZTogMS41cmVtO1xuICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG59XG5cbi5mYS1zdGFyIHtcbiAgY29sb3I6IGdvbGQ7XG4gIGZvbnQtc2l6ZTogMS4xcmVtO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/components/connection/connection.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/components/connection/connection.component.ts ***!
  \***************************************************************/
/*! exports provided: ConnectionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConnectionComponent", function() { return ConnectionComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_entities_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/entities.service */ "./src/app/services/entities.service.ts");



var ConnectionComponent = /** @class */ (function () {
    function ConnectionComponent(entitiesService) {
        this.entitiesService = entitiesService;
    }
    ConnectionComponent.prototype.ngOnInit = function () {
    };
    ConnectionComponent.prototype.toString = function () {
        return "D(" + this.transportConnection.supplier.index + ") O(" + this.transportConnection.recipient.index + ")";
    };
    ConnectionComponent.prototype.currRow = function () {
        return this.transportConnection.supplier.index;
    };
    ConnectionComponent.prototype.currCol = function () {
        return this.transportConnection.recipient.index;
    };
    ConnectionComponent.ctorParameters = function () { return [
        { type: _services_entities_service__WEBPACK_IMPORTED_MODULE_2__["EntitiesService"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
    ], ConnectionComponent.prototype, "transportConnection", void 0);
    ConnectionComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-connection',
            template: __webpack_require__(/*! raw-loader!./connection.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/connection/connection.component.html"),
            styles: [__webpack_require__(/*! ./connection.component.scss */ "./src/app/components/connection/connection.component.scss")]
        })
    ], ConnectionComponent);
    return ConnectionComponent;
}());



/***/ }),

/***/ "./src/app/components/entity/entity.component.scss":
/*!*********************************************************!*\
  !*** ./src/app/components/entity/entity.component.scss ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "input {\n  width: 40px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9lbnRpdHkvQzpcXFVzZXJzXFxNdXN6ZWtcXFdlYnN0b3JtUHJvamVjdHNcXFphZ2FkbmllbmllVHJhbnNwb3J0b3dlL3NyY1xcYXBwXFxjb21wb25lbnRzXFxlbnRpdHlcXGVudGl0eS5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvY29tcG9uZW50cy9lbnRpdHkvZW50aXR5LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsV0FBQTtBQ0NGIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9lbnRpdHkvZW50aXR5LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW5wdXR7XHJcbiAgd2lkdGg6NDBweDtcclxufVxyXG4iLCJpbnB1dCB7XG4gIHdpZHRoOiA0MHB4O1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/components/entity/entity.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/entity/entity.component.ts ***!
  \*******************************************************/
/*! exports provided: EntityComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EntityComponent", function() { return EntityComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_entities_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/entities.service */ "./src/app/services/entities.service.ts");



var EntityComponent = /** @class */ (function () {
    function EntityComponent(entitiesService) {
        this.entitiesService = entitiesService;
    }
    EntityComponent.prototype.ngOnInit = function () {
    };
    EntityComponent.prototype.toString = function () {
        return this.entity.name + "(" + this.entity.index + ")";
    };
    EntityComponent.prototype.labelInput = function () {
        return this.entity.name === 'Dostawca' ? 'Podaż:' : 'Popyt:';
    };
    EntityComponent.prototype.ngOnChanges = function (changes) {
        console.log('changes');
    };
    EntityComponent.ctorParameters = function () { return [
        { type: _services_entities_service__WEBPACK_IMPORTED_MODULE_2__["EntitiesService"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
    ], EntityComponent.prototype, "entity", void 0);
    EntityComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-entity',
            template: __webpack_require__(/*! raw-loader!./entity.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/entity/entity.component.html"),
            styles: [__webpack_require__(/*! ./entity.component.scss */ "./src/app/components/entity/entity.component.scss")]
        })
    ], EntityComponent);
    return EntityComponent;
}());



/***/ }),

/***/ "./src/app/pipes/x-pipe.pipe.ts":
/*!**************************************!*\
  !*** ./src/app/pipes/x-pipe.pipe.ts ***!
  \**************************************/
/*! exports provided: XPipePipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "XPipePipe", function() { return XPipePipe; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var XPipePipe = /** @class */ (function () {
    function XPipePipe() {
    }
    XPipePipe.prototype.transform = function (value) {
        if (!value) {
            return 'X';
        }
        return value;
    };
    XPipePipe = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
            name: 'xPipe'
        })
    ], XPipePipe);
    return XPipePipe;
}());



/***/ }),

/***/ "./src/app/services/entities.service.ts":
/*!**********************************************!*\
  !*** ./src/app/services/entities.service.ts ***!
  \**********************************************/
/*! exports provided: EntitiesService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EntitiesService", function() { return EntitiesService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _Entities_transport_connection__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Entities/transport-connection */ "./src/app/Entities/transport-connection.ts");
/* harmony import */ var _Entities_entity__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Entities/entity */ "./src/app/Entities/entity.ts");




var EntitiesService = /** @class */ (function () {
    function EntitiesService() {
        var _this = this;
        this.suppliers = [];
        this.recipients = [];
        this.alfas = [0];
        this.betas = [];
        this.findCycleVisible = false;
        this.getOptimalityVisible = false;
        this.getAlfasBetasVisible = false;
        this.degenerateProblemSolveVisible = false;
        this.autoVisible = true;
        this.countVisible = true;
        this.transportConnections = [];
        this.suppliersSum = 0;
        this.recipientsSum = 0;
        this.totalCost = 0;
        this.vals = [
            [
                2, 5, 9
            ],
            [
                7, 3, 6
            ],
            [
                4, 8, 3
            ]
        ];
        var c1 = [300, 200, 200];
        var c2 = [200, 400, 100];
        for (var i = 0; i < 3; i++) {
            this.addSupplier(c1[i]);
            this.addRecipient(c2[i]);
        }
        this.refreshConnections();
        this.transportConnections.forEach(function (row, rowI) {
            row.forEach(function (connection, connectionI) { return connection.cost = _this.vals[rowI][connectionI]; });
        });
    }
    EntitiesService.prototype.addSupplier = function (cost, name) {
        var _this = this;
        if (cost === void 0) { cost = 0; }
        if (name === void 0) { name = 'Dostawca'; }
        var supplier = new _Entities_entity__WEBPACK_IMPORTED_MODULE_3__["Entity"](this.suppliers.length, cost, name, this);
        var supplierIndex = supplier.index;
        this.suppliers.push(supplier);
        if (!this.transportConnections[supplierIndex]) {
            this.transportConnections[supplierIndex] = [];
            this.recipients.forEach(function (r, rI) {
                if (!_this.transportConnections[supplierIndex][r.index]) {
                    // tslint:disable-next-line:max-line-length
                    _this.transportConnections[supplierIndex][r.index] = new _Entities_transport_connection__WEBPACK_IMPORTED_MODULE_2__["TransportConnection"](supplier, r, 0, _this);
                }
            });
        }
        this.refreshConnections();
    };
    EntitiesService.prototype.removeSupplier = function () {
        this.suppliers.pop();
        this.transportConnections.pop();
        this.refreshConnections();
    };
    EntitiesService.prototype.addRecipient = function (cost, name) {
        var _this = this;
        if (cost === void 0) { cost = 0; }
        if (name === void 0) { name = 'Odbiorca'; }
        var recipient = new _Entities_entity__WEBPACK_IMPORTED_MODULE_3__["Entity"](this.recipients.length, cost, name, this);
        var recipientIndex = recipient.index;
        this.recipients.push(recipient);
        this.suppliers.forEach(function (s) {
            if (!_this.transportConnections[s.index][recipientIndex]) {
                _this.transportConnections[s.index][recipientIndex] = new _Entities_transport_connection__WEBPACK_IMPORTED_MODULE_2__["TransportConnection"](s, recipient, 0, _this);
            }
        });
        this.refreshConnections();
    };
    EntitiesService.prototype.removeRecipient = function () {
        var _this = this;
        this.recipients.pop();
        this.suppliers.forEach(function (s) {
            _this.transportConnections[s.index].pop();
        });
        this.refreshConnections();
    };
    EntitiesService.prototype.getSuppliersSum = function () {
        var sum = 0;
        this.suppliers.forEach(function (r) { return sum += r.cost; });
        return sum;
    };
    EntitiesService.prototype.getRecipientsSum = function () {
        var sum = 0;
        this.recipients.forEach(function (r) { return sum += r.cost; });
        return sum;
    };
    EntitiesService.prototype.getTotalCost = function () {
        var sum = 0;
        this.transportConnections.forEach(function (row) {
            row.forEach(function (tc) { return sum += tc.cost * tc.value; });
        });
        return sum;
    };
    EntitiesService.prototype.getBaseVertexCount = function () {
        var bVC = 0;
        this.transportConnections.forEach(function (tCR) {
            tCR.forEach(function (tC) {
                if (tC.value !== 0 || tC.isBase) {
                    ++bVC;
                }
            });
        });
        return bVC;
    };
    EntitiesService.prototype.refreshConnections = function () {
        console.log('refreshed connections');
        console.log('transportConnections', this.transportConnections);
        this.recipientsSum = this.getRecipientsSum();
        this.suppliersSum = this.getSuppliersSum();
        this.totalCost = this.getTotalCost();
        console.log('this.totalCost', this.totalCost);
        console.log('this.recipientsSum', this.recipientsSum);
        console.log('this.suppliersSum', this.suppliersSum);
    };
    EntitiesService.prototype.getConnectionRow = function (index) {
        if (index === void 0) { index = 0; }
        return this.transportConnections[index];
    };
    EntitiesService.prototype.getConnectionColumn = function (index) {
        if (index === void 0) { index = 0; }
        var col = [];
        this.transportConnections.forEach(function (row) {
            col.push(row[index]);
        });
        return col;
    };
    EntitiesService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        })
    ], EntitiesService);
    return EntitiesService;
}());



/***/ }),

/***/ "./src/app/services/solver.service.ts":
/*!********************************************!*\
  !*** ./src/app/services/solver.service.ts ***!
  \********************************************/
/*! exports provided: SolverService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SolverService", function() { return SolverService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _entities_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./entities.service */ "./src/app/services/entities.service.ts");
/* harmony import */ var _Entities_graph_graph__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Entities/graph/graph */ "./src/app/Entities/graph/graph.ts");




var SolverService = /** @class */ (function () {
    function SolverService(entitiesService) {
        this.entitiesService = entitiesService;
    }
    SolverService.prototype.count = function () {
        console.log('COUNT');
        var tC = this.entitiesService.transportConnections;
        tC.forEach(function (row) {
            row.forEach(function (cell) {
                var min = Math.min(cell.supplier.cost, cell.recipient.cost);
                if (cell.supplier.cost === cell.recipient.cost) {
                    console.log('CELL', cell);
                }
                cell.supplier.cost -= min;
                cell.recipient.cost -= min;
                cell.value = min;
                console.log(min);
            });
        });
        if (this.entitiesService.getBaseVertexCount() !== (this.entitiesService.suppliers.length + this.entitiesService.recipients.length - 1)) {
            this.entitiesService.degenerateProblemSolveVisible = true;
        }
        else {
            this.entitiesService.getAlfasBetasVisible = true;
        }
        this.entitiesService.refreshConnections();
        this.entitiesService.countVisible = false;
    };
    SolverService.prototype.getAlfasBetas = function () {
        var _this = this;
        this.entitiesService.alfas = [0];
        this.entitiesService.betas = [];
        var i = 0;
        while ((this.entitiesService.alfas.length !== this.entitiesService.suppliers.length ||
            this.entitiesService.betas.length !== this.entitiesService.recipients.length) && ++i < 100) {
            if (this.entitiesService.getBaseVertexCount() !==
                (this.entitiesService.suppliers.length + this.entitiesService.recipients.length - 1)) {
                this.entitiesService.degenerateProblemSolveVisible = true;
                alert("Ilo\u015B\u0107 wierzcho\u0142k\u00F3w bazowych nie zgodna (m+n-1) => (" + this.entitiesService.suppliers.length + "\n      +" + this.entitiesService.recipients.length + "-1)\n      != " + this.entitiesService.getBaseVertexCount());
                return;
            }
            this.entitiesService.transportConnections.forEach(function (tCRow, tCRowI) {
                tCRow.forEach(function (tC, tCI) {
                    console.log(isNaN(_this.entitiesService.betas[tCI]));
                    if (tC.value === 0 || !isNaN(_this.entitiesService.betas[tCI]) || isNaN(_this.entitiesService.alfas[tCRowI])) {
                        return;
                    }
                    _this.entitiesService.betas[tCI] = tC.cost - _this.entitiesService.alfas[tCRowI];
                });
            });
            this.entitiesService.betas.forEach(function (b, bI) {
                _this.entitiesService.transportConnections.forEach(function (tCRow, tCRowI) {
                    if ((tCRow[bI].value === 0 && !tCRow[bI].isBase) || !isNaN(_this.entitiesService.alfas[tCRowI])) {
                        return;
                    }
                    console.log("alfa:" + _this.entitiesService.alfas[tCRowI] + "[" + bI + "]");
                    console.log("cost:" + tCRow[bI].cost + "[" + tCRowI + "," + bI + "]");
                    _this.entitiesService.alfas[tCRowI] = tCRow[bI].cost - b;
                });
            });
        }
        this.entitiesService.getAlfasBetasVisible = false;
        this.entitiesService.getOptimalityVisible = true;
        this.entitiesService.refreshConnections();
    };
    SolverService.prototype.degenerateProblemSolve = function () {
        var _this = this;
        var newBaseCandidates = [];
        var nonBase = this.getNonBaseVectors();
        nonBase.forEach(function (nB) {
            var graph = new _Entities_graph_graph__WEBPACK_IMPORTED_MODULE_3__["Graph"]();
            _this.entitiesService.transportConnections.forEach(function (tCR, tCRI) {
                tCR.forEach(function (cell, cellI) {
                    if (cell.value > 0) {
                        graph.addVertex(cell);
                    }
                });
            });
            var x = nB.supIndex();
            var y = nB.recIndex();
            _this.entitiesService.transportConnections[x][y].value = Number.MAX_SAFE_INTEGER;
            var ver = graph.addVertex(_this.entitiesService.transportConnections[x][y]);
            graph.autoAddEdges();
            ver.isClosedLoopImpossible = graph.detectCycle().bool;
            if (ver.isClosedLoopImpossible) {
                newBaseCandidates.push(ver);
            }
            _this.entitiesService.transportConnections[x][y].value = 0;
        });
        var val = Number.MAX_SAFE_INTEGER;
        var zeroBaseVertex;
        newBaseCandidates.forEach(function (nbc) {
            if (nbc.cost < val) {
                val = nbc.cost;
                zeroBaseVertex = nbc;
            }
        });
        if (!!zeroBaseVertex) {
            console.log(zeroBaseVertex.isBase = true);
        }
        this.entitiesService.refreshConnections();
        this.entitiesService.degenerateProblemSolveVisible = false;
        this.entitiesService.getAlfasBetasVisible = true;
    };
    SolverService.prototype.getNonBaseVectors = function () {
        var nonBase = [];
        this.entitiesService.transportConnections.forEach(function (r) {
            r.forEach(function (c) {
                if (c.value === 0 && !c.isBase) {
                    nonBase.push(c);
                }
            });
        });
        return nonBase;
    };
    SolverService.prototype.getOptimalityIndicators = function () {
        var _this = this;
        var nB = this.getNonBaseVectors();
        var isOptimal = true;
        nB.forEach(function (nb) {
            var alpha = _this.entitiesService.alfas[nb.supIndex()];
            var beta = _this.entitiesService.betas[nb.recIndex()];
            nb.optimalityIndicator = nb.cost - alpha - beta;
            if (nb.optimalityIndicator < 0) {
                isOptimal = false;
            }
        });
        this.entitiesService.getOptimalityVisible = false;
        this.entitiesService.findCycleVisible = true;
        this.entitiesService.refreshConnections();
        if (isOptimal) {
            alert("Znaleziono rozwi\u0105zanie optymalne !");
            this.entitiesService.findCycleVisible = false;
            this.entitiesService.autoVisible = false;
        }
    };
    SolverService.prototype.pathBeautify = function (path) {
        path = path.map(function (row) { return row.split(',')[0]; });
        path.push(path[0]);
        console.log(path);
        for (var i = 0; i <= path.length - 3; i++) {
            if (((path[i].split(';')[0] === path[i + 1].split(';')[0]) &&
                (path[i + 1].split(';')[0] === path[i + 2].split(';')[0]))
                ||
                    ((path[i].split(';')[1] === path[i + 1].split(';')[1]) &&
                        (path[i + 1].split(';')[1] === path[i + 2].split(';')[1]))) {
                delete path[i + 1];
                i++;
            }
        }
        path.pop();
        var arr = [];
        path.forEach(function (v) {
            if (!!v) {
                arr.push(v);
            }
        });
        console.log(arr);
        return arr;
    };
    SolverService.prototype.getVertexFromPath = function (path) {
        var _this = this;
        var vertexArr = [];
        path.forEach(function (xy) {
            var y = xy.split(';')[0];
            var x = xy.split(';')[1];
            vertexArr.push(_this.entitiesService.transportConnections[y][x]);
        });
        return vertexArr;
    };
    SolverService.prototype.changeValuesInCycle = function (vertexArr) {
        var minVal = Number.MAX_SAFE_INTEGER;
        vertexArr.forEach(function (v) {
            if (v.value < minVal && v.value > 0) {
                minVal = v.value;
            }
        });
        vertexArr.forEach(function (v, i) {
            if (i % 2) {
                v.value -= minVal;
            }
            else {
                v.value += minVal;
            }
        });
        console.log(vertexArr);
    };
    SolverService.prototype.isCyclable = function (vertex, graph) {
        vertex.value = Number.MAX_SAFE_INTEGER;
        var ver = graph.addVertex(vertex);
        graph.autoAddEdges();
        var retVal = graph.detectCycle();
        ver.isClosedLoopImpossible = retVal.bool;
        console.log('path:', retVal.path);
        vertex.value = 0;
        var path = this.pathBeautify(retVal.path);
        var vertexArr = this.getVertexFromPath(path);
        this.changeValuesInCycle(vertexArr);
        console.log('vertexArr', vertexArr);
        return ver.isClosedLoopImpossible;
    };
    SolverService.prototype.findCycle = function () {
        var nonBase = this.getNonBaseVectors();
        nonBase = nonBase.filter(function (nb) { return nb.optimalityIndicator < 0; });
        var val = Number.MAX_SAFE_INTEGER;
        var smallestCandidate;
        nonBase.forEach(function (nbc) {
            if (nbc.optimalityIndicator < val) {
                val = nbc.optimalityIndicator;
                smallestCandidate = nbc;
            }
        });
        if (!smallestCandidate) {
            return;
        }
        var graph = new _Entities_graph_graph__WEBPACK_IMPORTED_MODULE_3__["Graph"]();
        var tC = this.entitiesService.transportConnections;
        tC.forEach(function (tCR, tCRI) {
            tCR.forEach(function (cell, cellI) {
                if (cell.value > 0 || cell.isBase) {
                    graph.addVertex(cell);
                }
            });
        });
        var x = smallestCandidate.supIndex();
        var y = smallestCandidate.recIndex();
        if (this.isCyclable(this.entitiesService.transportConnections[x][y], graph)) {
            smallestCandidate.isClosedLoopPossible = true;
        }
        this.entitiesService.refreshConnections();
        this.entitiesService.getAlfasBetasVisible = true;
        this.entitiesService.findCycleVisible = false;
    };
    SolverService.ctorParameters = function () { return [
        { type: _entities_service__WEBPACK_IMPORTED_MODULE_2__["EntitiesService"] }
    ]; };
    SolverService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        })
    ], SolverService);
    return SolverService;
}());



/***/ }),

/***/ "./src/app/table/table.component.scss":
/*!********************************************!*\
  !*** ./src/app/table/table.component.scss ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "table {\n  position: absolute;\n  border: 5px solid #476fbd;\n  border-radius: 10px;\n  border-spacing: 0px;\n  -webkit-transform: translate(-50%, -50%);\n  transform: translate(-50%, -50%);\n  top: 50%;\n  left: 50%;\n}\ntable > tr {\n  height: 70px;\n  vertical-align: center;\n}\ntable > tr > th {\n  height: 40px;\n}\ntable td, table th {\n  border: 3px solid #476fbd;\n  width: 200px;\n}\ntable i {\n  color: green;\n}\ntable div {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 100%;\n  height: 100%;\n  vertical-align: middle;\n}\ntable div button {\n  width: 100%;\n  height: 50%;\n  background: none;\n  border: none;\n}\ntable .addRecipientButtonsWrapper {\n  width: 15px;\n  margin-right: 5px;\n  display: flex;\n  flex-direction: column;\n}\ntable .addRecipientButtonsWrapper {\n  width: 20px;\n  float: right;\n}\ntable .recipientWrapper {\n  width: 80%;\n  height: 100px;\n  float: left;\n}\ntable .fa-plus {\n  color: green;\n}\ntable .fa-minus {\n  color: red;\n}\ntable th.background {\n  background: rgba(0, 255, 37, 0.4);\n  color: #302f32;\n}\ntable th.background.wrong {\n  background: rgba(255, 109, 31, 0.4);\n  color: #9c1523;\n}\n.reload {\n  position: fixed;\n  bottom: 30px;\n  right: 40px;\n  float: right;\n}\n.background {\n  width: 140px;\n  padding: 0;\n  margin: 0;\n}\n.line {\n  border-bottom: 1px solid red;\n  -webkit-transform: translateY(-44px) translateX(21px) rotate(25deg);\n          transform: translateY(-44px) translateX(21px) rotate(25deg);\n  position: absolute;\n  z-index: -1;\n}\n.background > div {\n  position: relative;\n  height: 100%;\n  width: 100%;\n  top: 0;\n  left: 0;\n}\n.bottom {\n  position: absolute;\n  bottom: 1px;\n  font-size: large;\n  left: 1px;\n}\n.top {\n  position: absolute;\n  font-size: large;\n  margin: 0px;\n  top: 1px;\n  right: 1px;\n}\n.baseVertex {\n  background: rgba(215, 81, 18, 0.45);\n}\n.licz {\n  position: fixed;\n  top: 5px;\n  right: 5px;\n  float: right;\n}\n.stepButton {\n  position: fixed;\n  top: 5px;\n  left: 5px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdGFibGUvQzpcXFVzZXJzXFxNdXN6ZWtcXFdlYnN0b3JtUHJvamVjdHNcXFphZ2FkbmllbmllVHJhbnNwb3J0b3dlL3NyY1xcYXBwXFx0YWJsZVxcdGFibGUuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3RhYmxlL3RhYmxlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usa0JBQUE7RUFDQSx5QkFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSx3Q0FBQTtFQUlBLGdDQUFBO0VBQ0EsUUFBQTtFQUNBLFNBQUE7QUNDRjtBREFFO0VBQ0UsWUFBQTtFQUNBLHNCQUFBO0FDRUo7QURESTtFQUVFLFlBQUE7QUNFTjtBREVFO0VBQ0UseUJBQUE7RUFDQSxZQUFBO0FDQUo7QURFRTtFQUNFLFlBQUE7QUNBSjtBRElFO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLHNCQUFBO0FDRko7QURHSTtFQUNFLFdBQUE7RUFDQSxXQUFBO0VBQ0EsZ0JBQUE7RUFDQSxZQUFBO0FDRE47QURLRTtFQUNFLFdBQUE7RUFDQSxpQkFBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtBQ0hKO0FETUU7RUFDRSxXQUFBO0VBQ0EsWUFBQTtBQ0pKO0FETUU7RUFDRSxVQUFBO0VBQ0EsYUFBQTtFQUNBLFdBQUE7QUNKSjtBRE9FO0VBQ0UsWUFBQTtBQ0xKO0FET0U7RUFDRSxVQUFBO0FDTEo7QURPRTtFQUNFLGlDQUFBO0VBQ0EsY0FBQTtBQ0xKO0FETUk7RUFDRSxtQ0FBQTtFQUNBLGNBQUE7QUNKTjtBRFNBO0VBQ0UsZUFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtBQ05GO0FEUUE7RUFDRSxZQUFBO0VBQ0EsVUFBQTtFQUNBLFNBQUE7QUNMRjtBRFFBO0VBQ0UsNEJBQUE7RUFDQSxtRUFBQTtVQUFBLDJEQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0FDTEY7QURRQTtFQUNFLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxNQUFBO0VBQ0EsT0FBQTtBQ0xGO0FEUUE7RUFDRSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtFQUNBLFNBQUE7QUNMRjtBRFFBO0VBQ0Usa0JBQUE7RUFDQSxnQkFBQTtFQUNBLFdBQUE7RUFDQSxRQUFBO0VBQ0EsVUFBQTtBQ0xGO0FET0E7RUFDRSxtQ0FBQTtBQ0pGO0FETUE7RUFDRSxlQUFBO0VBQ0EsUUFBQTtFQUNBLFVBQUE7RUFDRCxZQUFBO0FDSEQ7QURLQTtFQUNFLGVBQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtBQ0ZGIiwiZmlsZSI6InNyYy9hcHAvdGFibGUvdGFibGUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJ0YWJsZXtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgYm9yZGVyOiA1cHggc29saWQgIzQ3NmZiZDtcclxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gIGJvcmRlci1zcGFjaW5nOiAwcHg7XHJcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLC01MCUpO1xyXG4gIC1tb3otdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwtNTAlKTtcclxuICAtbXMtdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwtNTAlKTtcclxuICAtby10cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLC01MCUpO1xyXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsLTUwJSk7XHJcbiAgdG9wOiA1MCU7XHJcbiAgbGVmdDogNTAlO1xyXG4gICY+dHJ7XHJcbiAgICBoZWlnaHQ6IDcwcHg7XHJcbiAgICB2ZXJ0aWNhbC1hbGlnbjogY2VudGVyO1xyXG4gICAgJj50aHtcclxuXHJcbiAgICAgIGhlaWdodDogNDBweDtcclxuXHJcbiAgICB9XHJcbiAgfVxyXG4gICYgdGQsICYgdGh7XHJcbiAgICBib3JkZXI6IDNweCBzb2xpZCAjNDc2ZmJkO1xyXG4gICAgd2lkdGg6MjAwcHg7XHJcbiAgfVxyXG4gIGl7XHJcbiAgICBjb2xvcjogZ3JlZW47XHJcbiAgfVxyXG5cclxuXHJcbiAgZGl2e1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIHdpZHRoOjEwMCU7XHJcbiAgICBoZWlnaHQ6MTAwJTtcclxuICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XHJcbiAgICBidXR0b257XHJcbiAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICBoZWlnaHQ6IDUwJTtcclxuICAgICAgYmFja2dyb3VuZDogbm9uZTtcclxuICAgICAgYm9yZGVyOiBub25lO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLmFkZFJlY2lwaWVudEJ1dHRvbnNXcmFwcGVye1xyXG4gICAgd2lkdGg6IDE1cHg7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDVweDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIH1cclxuXHJcbiAgLmFkZFJlY2lwaWVudEJ1dHRvbnNXcmFwcGVye1xyXG4gICAgd2lkdGg6MjBweDtcclxuICAgIGZsb2F0OiByaWdodDtcclxuICB9XHJcbiAgLnJlY2lwaWVudFdyYXBwZXJ7XHJcbiAgICB3aWR0aDo4MCU7XHJcbiAgICBoZWlnaHQ6MTAwcHg7XHJcbiAgICBmbG9hdDogbGVmdDtcclxuICB9XHJcblxyXG4gIC5mYS1wbHVze1xyXG4gICAgY29sb3I6IGdyZWVuO1xyXG4gIH1cclxuICAuZmEtbWludXN7XHJcbiAgICBjb2xvcjogcmVkO1xyXG4gIH1cclxuICB0aC5iYWNrZ3JvdW5ke1xyXG4gICAgYmFja2dyb3VuZDogcmdiYSgwLCAyNTUsIDM3LCAwLjQpO1xyXG4gICAgY29sb3I6ICMzMDJmMzI7XHJcbiAgICAmLndyb25ne1xyXG4gICAgICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMTA5LCAzMSwgMC40KTtcclxuICAgICAgY29sb3I6ICM5YzE1MjM7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxufVxyXG4ucmVsb2Fke1xyXG4gIHBvc2l0aW9uOmZpeGVkO1xyXG4gIGJvdHRvbTogMzBweDtcclxuICByaWdodDogNDBweDtcclxuICBmbG9hdDpyaWdodDtcclxufVxyXG4uYmFja2dyb3VuZCB7XHJcbiAgd2lkdGg6IDE0MHB4O1xyXG4gIHBhZGRpbmc6IDA7XHJcbiAgbWFyZ2luOiAwO1xyXG59XHJcblxyXG4ubGluZSB7XHJcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHJlZDtcclxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTQ0cHgpIHRyYW5zbGF0ZVgoMjFweCkgcm90YXRlKDI1ZGVnKTtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgei1pbmRleDogLTE7XHJcbn1cclxuXHJcbi5iYWNrZ3JvdW5kPmRpdiB7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIGhlaWdodDogMTAwJTtcclxuICB3aWR0aDogMTAwJTtcclxuICB0b3A6IDA7XHJcbiAgbGVmdDogMDtcclxufVxyXG5cclxuLmJvdHRvbSB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIGJvdHRvbTogMXB4O1xyXG4gIGZvbnQtc2l6ZTogbGFyZ2U7XHJcbiAgbGVmdDogMXB4O1xyXG59XHJcblxyXG4udG9wIHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgZm9udC1zaXplOiBsYXJnZTtcclxuICBtYXJnaW46IDBweDtcclxuICB0b3A6IDFweDtcclxuICByaWdodDogMXB4O1xyXG59XHJcbi5iYXNlVmVydGV4e1xyXG4gIGJhY2tncm91bmQ6IHJnYmEoMjE1LCA4MSwgMTgsIDAuNDUpO1xyXG59XHJcbi5saWN6e1xyXG4gIHBvc2l0aW9uOmZpeGVkO1xyXG4gIHRvcDo1cHg7XHJcbiAgcmlnaHQ6IDVweDtcclxuIGZsb2F0OiByaWdodDtcclxufVxyXG4uc3RlcEJ1dHRvbntcclxuICBwb3NpdGlvbjpmaXhlZDtcclxuICB0b3A6NXB4O1xyXG4gIGxlZnQ6IDVweDtcclxuXHJcbn1cclxuIiwidGFibGUge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJvcmRlcjogNXB4IHNvbGlkICM0NzZmYmQ7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIGJvcmRlci1zcGFjaW5nOiAwcHg7XG4gIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG4gIC1tb3otdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG4gIC1tcy10cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcbiAgLW8tdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xuICB0b3A6IDUwJTtcbiAgbGVmdDogNTAlO1xufVxudGFibGUgPiB0ciB7XG4gIGhlaWdodDogNzBweDtcbiAgdmVydGljYWwtYWxpZ246IGNlbnRlcjtcbn1cbnRhYmxlID4gdHIgPiB0aCB7XG4gIGhlaWdodDogNDBweDtcbn1cbnRhYmxlIHRkLCB0YWJsZSB0aCB7XG4gIGJvcmRlcjogM3B4IHNvbGlkICM0NzZmYmQ7XG4gIHdpZHRoOiAyMDBweDtcbn1cbnRhYmxlIGkge1xuICBjb2xvcjogZ3JlZW47XG59XG50YWJsZSBkaXYge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbn1cbnRhYmxlIGRpdiBidXR0b24ge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiA1MCU7XG4gIGJhY2tncm91bmQ6IG5vbmU7XG4gIGJvcmRlcjogbm9uZTtcbn1cbnRhYmxlIC5hZGRSZWNpcGllbnRCdXR0b25zV3JhcHBlciB7XG4gIHdpZHRoOiAxNXB4O1xuICBtYXJnaW4tcmlnaHQ6IDVweDtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbn1cbnRhYmxlIC5hZGRSZWNpcGllbnRCdXR0b25zV3JhcHBlciB7XG4gIHdpZHRoOiAyMHB4O1xuICBmbG9hdDogcmlnaHQ7XG59XG50YWJsZSAucmVjaXBpZW50V3JhcHBlciB7XG4gIHdpZHRoOiA4MCU7XG4gIGhlaWdodDogMTAwcHg7XG4gIGZsb2F0OiBsZWZ0O1xufVxudGFibGUgLmZhLXBsdXMge1xuICBjb2xvcjogZ3JlZW47XG59XG50YWJsZSAuZmEtbWludXMge1xuICBjb2xvcjogcmVkO1xufVxudGFibGUgdGguYmFja2dyb3VuZCB7XG4gIGJhY2tncm91bmQ6IHJnYmEoMCwgMjU1LCAzNywgMC40KTtcbiAgY29sb3I6ICMzMDJmMzI7XG59XG50YWJsZSB0aC5iYWNrZ3JvdW5kLndyb25nIHtcbiAgYmFja2dyb3VuZDogcmdiYSgyNTUsIDEwOSwgMzEsIDAuNCk7XG4gIGNvbG9yOiAjOWMxNTIzO1xufVxuXG4ucmVsb2FkIHtcbiAgcG9zaXRpb246IGZpeGVkO1xuICBib3R0b206IDMwcHg7XG4gIHJpZ2h0OiA0MHB4O1xuICBmbG9hdDogcmlnaHQ7XG59XG5cbi5iYWNrZ3JvdW5kIHtcbiAgd2lkdGg6IDE0MHB4O1xuICBwYWRkaW5nOiAwO1xuICBtYXJnaW46IDA7XG59XG5cbi5saW5lIHtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHJlZDtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC00NHB4KSB0cmFuc2xhdGVYKDIxcHgpIHJvdGF0ZSgyNWRlZyk7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgei1pbmRleDogLTE7XG59XG5cbi5iYWNrZ3JvdW5kID4gZGl2IHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIHdpZHRoOiAxMDAlO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG59XG5cbi5ib3R0b20ge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJvdHRvbTogMXB4O1xuICBmb250LXNpemU6IGxhcmdlO1xuICBsZWZ0OiAxcHg7XG59XG5cbi50b3Age1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGZvbnQtc2l6ZTogbGFyZ2U7XG4gIG1hcmdpbjogMHB4O1xuICB0b3A6IDFweDtcbiAgcmlnaHQ6IDFweDtcbn1cblxuLmJhc2VWZXJ0ZXgge1xuICBiYWNrZ3JvdW5kOiByZ2JhKDIxNSwgODEsIDE4LCAwLjQ1KTtcbn1cblxuLmxpY3oge1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHRvcDogNXB4O1xuICByaWdodDogNXB4O1xuICBmbG9hdDogcmlnaHQ7XG59XG5cbi5zdGVwQnV0dG9uIHtcbiAgcG9zaXRpb246IGZpeGVkO1xuICB0b3A6IDVweDtcbiAgbGVmdDogNXB4O1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/table/table.component.ts":
/*!******************************************!*\
  !*** ./src/app/table/table.component.ts ***!
  \******************************************/
/*! exports provided: TableComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TableComponent", function() { return TableComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_entities_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/entities.service */ "./src/app/services/entities.service.ts");
/* harmony import */ var _services_solver_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/solver.service */ "./src/app/services/solver.service.ts");




var TableComponent = /** @class */ (function () {
    function TableComponent(entitiesService, solver) {
        this.entitiesService = entitiesService;
        this.solver = solver;
        this.showComponent = true;
    }
    TableComponent.prototype.refresh = function () {
        var _this = this;
        this.showComponent = false;
        setTimeout(function (x) { return _this.showComponent = true; });
    };
    TableComponent.prototype.licz = function () {
        while (this.entitiesService.countVisible ||
            this.entitiesService.degenerateProblemSolveVisible ||
            this.entitiesService.getAlfasBetasVisible ||
            this.entitiesService.getOptimalityVisible ||
            this.entitiesService.findCycleVisible) {
            if (this.entitiesService.countVisible) {
                this.solver.count();
            }
            if (this.entitiesService.degenerateProblemSolveVisible) {
                this.solver.degenerateProblemSolve();
            }
            if (this.entitiesService.getAlfasBetasVisible) {
                this.solver.getAlfasBetas();
            }
            if (this.entitiesService.getOptimalityVisible) {
                this.solver.getOptimalityIndicators();
            }
            if (this.entitiesService.findCycleVisible) {
                this.solver.findCycle();
            }
        }
    };
    TableComponent.prototype.addSupplier = function () {
        this.entitiesService.addSupplier();
    };
    TableComponent.prototype.removeSupplier = function () {
        this.entitiesService.removeSupplier();
    };
    TableComponent.prototype.addRecipient = function () {
        this.entitiesService.addRecipient();
    };
    TableComponent.prototype.removeRecipient = function () {
        this.entitiesService.removeRecipient();
    };
    TableComponent.prototype.ngOnInit = function () {
    };
    TableComponent.ctorParameters = function () { return [
        { type: _services_entities_service__WEBPACK_IMPORTED_MODULE_2__["EntitiesService"] },
        { type: _services_solver_service__WEBPACK_IMPORTED_MODULE_3__["SolverService"] }
    ]; };
    TableComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-table',
            template: __webpack_require__(/*! raw-loader!./table.component.html */ "./node_modules/raw-loader/index.js!./src/app/table/table.component.html"),
            styles: [__webpack_require__(/*! ./table.component.scss */ "./src/app/table/table.component.scss")]
        })
    ], TableComponent);
    return TableComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\Muszek\WebstormProjects\ZagadnienieTransportowe\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es5.js.map