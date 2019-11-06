import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CellComponent } from './cell/cell.component';
import { TableComponent } from './table/table.component';
import {FormsModule} from '@angular/forms';
import { EntityComponent } from './components/entity/entity.component';
import { ConnectionComponent } from './components/connection/connection.component';
import { XPipePipe } from './pipes/x-pipe.pipe';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    CellComponent,
    TableComponent,
    EntityComponent,
    ConnectionComponent,
    XPipePipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
