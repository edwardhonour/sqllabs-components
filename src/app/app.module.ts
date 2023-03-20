import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClient, HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SqlFormComponent } from './sqllabs/sql-form/sql-form.component';
import { SqlInputComponent } from './sqllabs/sql-input/sql-input.component';
import { SqlSubmitComponent } from './sqllabs/sql-submit/sql-submit.component';
import { SqlSelectComponent } from './sqllabs/sql-select/sql-select.component';
import { SqlTextareaComponent } from './sqllabs/sql-textarea/sql-textarea.component';
import { SqlRadioGroupComponent } from './sqllabs/sql-radio-group/sql-radio-group.component';
import { SqlTableComponent } from './sqllabs/sql-table/sql-table.component';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { NgxTablePaginationModule } from 'ngx-table-pagination';
import { SqlTableColumnComponent } from './sqllabs/sql-table-column/sql-table-column.component';
import { SqlDatepickerComponent } from './sqllabs/sql-datepicker/sql-datepicker.component';
import { SqlCardComponent } from './sqllabs/sql-card/sql-card.component';
import { SqlPanelComponent } from './sqllabs/sql-panel/sql-panel.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    SqlFormComponent,
    SqlInputComponent,
    SqlSubmitComponent,
    SqlSelectComponent,
    SqlTextareaComponent,
    SqlRadioGroupComponent,
    SqlDatepickerComponent,
    HttpClientModule,
    Ng2SearchPipeModule,
    NgxTablePaginationModule,
    SqlTableColumnComponent,
    SqlTableComponent,
    SqlCardComponent,
    SqlPanelComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
