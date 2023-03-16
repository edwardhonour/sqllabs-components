import { Component, OnInit, Input, Output, EventEmitter, 
  ViewChild, ViewChildren, QueryList, ContentChild, ContentChildren,
  ElementRef, AfterViewInit, DoCheck, OnChanges, SimpleChanges } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SqlInputComponent } from '../sql-input/sql-input.component';
import { DataService } from 'src/app/data.service';
import { Data } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { NgxTablePaginationModule} from 'ngx-table-pagination';
import { SqlTableColumnComponent } from '../sql-table-column/sql-table-column.component';

@Component({
  selector: 'sql-table',
  standalone: true,
  imports: [CommonModule, FormsModule, NgxTablePaginationModule, Ng2SearchPipeModule, SqlTableColumnComponent],
  templateUrl: './sql-table.component.html',
  styleUrls: ['./sql-table.component.css']
})
export class SqlTableComponent implements OnInit, DoCheck, OnChanges, AfterViewInit {
  // 
 @ContentChildren('title') private title_list!: ElementRef;
 @ContentChildren('column') private column_list!: ElementRef[];

  constructor(private _dataService: DataService) { }

   term: any;
   buttons: any;
   columns: any;
   list: any;
   p: any;
   format: any = {
    title: '',
    search: '',
    class: '',
    style: '',
    columns: [],
    buttons: []
   };
   column_template: any = {
    column_name: '',
    class: '',
    type: '',
    style: '',
    title: '',
    value: ''
   };

   button_template: any = {
    class: '',
    title: '',
    value: ''
   }

  //-- Inputs
  @Input() search: any = 'TOP';
  @Input() container_class: any = '';
  @Input() container_style: any = '';
  @Input() bs_row: any = 'Y';                             // Y means add a bootstrap row.
  @Input() bs_col: any = 'col-sm-12 col-lg-6 col-xl-4';   // What bootstrap columns.
  @Input() table_class: any = 'table table-striped table-condensed';
  @Input() edit: any = 'N';
  @Input() title: any = 'Title Not Set';
  @Input() pagesize: number = 25;
  @Input() data: any;                                     // Parent Form Data
  @Input() sql: any;                                      // SQL that gets data.
  @Input() id: any = '0';                                 // Primary key for an existing record = 0=Insert
  @Input() card: any = "Y";                               // Show the form in a card Y/N
  @Input() closable: any = "N";                           // Is the form closable Y/N
  @Input() open: any = "Y";                               // Does a closable form start open.
  @Input() class: any = "";                               // Class for the form container.
  @Input() style: any = "";                               // Style for the form container.
  @Input() pagination: any = 'Y';
  @Input() handler: any = 'default';                      // what handler is used to process the form.

  @Output() change: EventEmitter<any> = new EventEmitter<any>();
  counter: number = 0;
  
  ngOnInit(): void {
      this.format.search='Y';
  }

  editClick(m: any) {

  }

  ngAfterViewInit(): void {

    this.format.title=this.title;
    this.format.class=this.class;
    this.format.style=this.style;

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
    console.log(this.format)
    
//      this._dataService.getSQL(this.sql, this.id).subscribe((data:any)=>{
//        this.data=data;
//        console.log('pushing first query')
//        this._dataService.pushNotification(this.data);
//      });
  }
  
  ngDoCheck(): void {

  }

  buttonClick(m: any) {

  }
  ngOnChanges(changes: SimpleChanges): void {

  }

}
