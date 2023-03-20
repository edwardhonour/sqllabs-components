import { Component, OnInit, Input, Output, EventEmitter, 
         ContentChildren, ElementRef, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataService } from 'src/app/data.service';
import { Data } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { NgxTablePaginationModule} from 'ngx-table-pagination';
import { SqlTableColumnComponent } from '../sql-table-column/sql-table-column.component';

@Component({
  selector: 'sql-table',
  standalone: true,
  imports: [CommonModule, 
            FormsModule, 
            NgxTablePaginationModule, 
            Ng2SearchPipeModule, 
            SqlTableColumnComponent],
  templateUrl: './sql-table.component.html',
  styleUrls: ['./sql-table.component.css']
})
export class SqlTableComponent implements OnInit, AfterViewInit {
  // 
 @ContentChildren('title') private title_list!: ElementRef;
 @ContentChildren('column') private column_list!: ElementRef[];

  constructor(private _dataService: DataService) { }

  // format: is built from ContentChildren and Input Parameters
  format: any = { title: '', search: '', class: '', style: '', columns: [], buttons: [] };
  term: any;          // used by search filter.
  list: any;          // holds the list returned by the query.
  p: any;             // used by pagination

  row_placeholder: any = 'row';
  col_placeholder: any = 'col-12';

  //-- Inputs
  @Input() data: any = '';                                // Use Data if data comes from function.
  @Input() sql: any = '';                                 // SQL that gets data.
  @Input() card: any = "Y";                               // Show the form in a card Y/N
      @Input() card_class: any = '';
      @Input() card_style: any = '';
  @Input() container_class: any = 'container-fluid m-2 p-2';              // Class of the outer ng-container.
  @Input() container_style: any = '';                     // Style of the outer ng-container.

  @Input() closable: any = "N";                           // Is the form closable Y/N
  @Input() search: any = 'TOP';                           // Location of the search box.

  @Input() bs_row: any = 'Y';                             // Y means add a bootstrap row.
  @Input() bs_col: any = 'col-sm-12 col-lg-12 col-xl-12';   // What bootstrap columns.

  @Input() table_class: any = 'table table-striped table-condensed';   // class of the table.
  @Input() table_style: any = '';                                      // style of the table.
  @Input() edit: any = 'Y';                               // Add custom edit button.
  @Input() title: any = 'Title Not Set';                  // title of the page.
  @Input() pagination: any = 'Y';                         // Include pagination.
  @Input() pagesize: number = 25;                         // rows per page for pagination.

  @Input() id: any = '0';                                 // id for where clause.

  @Input() open: any = "Y";                               // Does a closable list start open.
  @Input() class: any = 'table table-striped table-condensed';  // Class for the table container.
  @Input() style: any = "";                               // Style for the table container.
  @Input() handler: any = 'default';                      // what handler is used to process the form.

  @Output() button_click: EventEmitter<any> = new EventEmitter<any>();
  @Output() row_click: EventEmitter<any> = new EventEmitter<any>();
  @Output() top_button_click: EventEmitter<any> = new EventEmitter<any>();

  counter: number = 0;
  
  ngOnInit(): void {
      this.format.search='Y';
  }

  topButtonClick(m: any) {
       this.top_button_click.emit(m);
  }

  rowClick(m: any) {
       this.row_click.emit(m);
  }

  editClick(m: any) {
    if (m.edit==='Y') {
      m.edit='N';
    } else {
      m.edit='Y';
    }
  }
  buttonClick(m: any) {
       this.button_click.emit(m);
  }

  ngAfterViewInit(): void {

    this.format.title=this.title;
    this.format.class=this.class;
    this.format.style=this.style;
    this.format.pagesize=this.pagesize;
    if (this.bs_row=='Y') {
      this.row_placeholder="row";
    } else {
      this.row_placeholder="none";
    }
    this.col_placeholder=this.bs_col;

    this.column_list.forEach((e: ElementRef) => {

            let column_template: any = { column_name: '',  class: '',  type: '',  style: '',  title: '',  value: '' };
            
            //-- TH is data column
            if (e.nativeElement.nodeName=='TH') {
              column_template.type="data";
              column_template.value=e.nativeElement.id;
              column_template.title=e.nativeElement.innerHTML;
            }      
            //-- BUTTON is button column
            if (e.nativeElement.nodeName=='BUTTON') {
              column_template.type="button";
              column_template.value='';
              column_template.title=e.nativeElement.innerHTML;
            } 
            //-- TD is text column
            if (e.nativeElement.nodeName=='TD') {
              column_template.type="text";
              column_template.title='';
              column_template.value=e.nativeElement.innerHTML;
            } 
            if (e.nativeElement.className!==undefined) { column_template.class=e.nativeElement.className; }
            column_template.style=e.nativeElement.style.cssText;
            this.format.columns.push(column_template);
    });

      this._dataService.getSQL(this.sql, this.id).subscribe((data:any)=>{
        this.list=data;
      });
  }
  
}
