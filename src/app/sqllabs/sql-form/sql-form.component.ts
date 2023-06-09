import { Component, OnInit, Input, Output, EventEmitter, ViewChild, ElementRef, AfterViewInit, DoCheck, OnChanges, SimpleChanges } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SqlInputComponent } from '../sql-input/sql-input.component';
import { DataService } from 'src/app/data.service';

@Component({
  selector: 'sql-form',
  standalone: true,
  imports: [CommonModule, SqlInputComponent],
  templateUrl: './sql-form.component.html',
  styleUrls: ['./sql-form.component.css']
})
export class SqlFormComponent implements OnInit, DoCheck, OnChanges, AfterViewInit {
  
  constructor(private _dataService: DataService) {
      
      this._dataService.dataSubject.subscribe(d => {
        this.data=d;
        this.counter++;
        console.log('sql-form' + this.counter)
        if (this.data.submit==='Y') {
          console.log('FIRE FIRE FIRE!!!')
        }
        console.log(d)
      })
   }

  //-- Inputs
  @Input() data: any;                                     // Depreciated
  @Input() id: any = '0';                                 // Primary key for an existing record = 0=Insert
  @Input() table: any = "dual";                           // Name of the base table.
  @Input() card: any = "Y";                               // Show the form in a card Y/N
  @Input() closable: any = "N";                           // Is the form closable Y/N
  @Input() open: any = "Y";                               // Does a closable form start open.
  @Input() class: any = "";                               // Class for the form container.
  @Input() style: any = "";                               // Style for the form container.
  @Input() title: any = "";                               // Title of the form.
  @Input() bs_row: any = 'Y';                             // Y means add a bootstrap row.
  @Input() bs_col: any = 'col-sm-12 col-lg-6 col-xl-4';   // What bootstrap columns.
  @Input() handler: any = 'default';                      // what handler is used to process the form.

  @Output() change: EventEmitter<any> = new EventEmitter<any>();
  counter: number = 0;

  ngOnInit(): void {

  }

  ngAfterViewInit(): void {
      this._dataService.getForm("psp_survey_option", this.id).subscribe((data:any)=>{
        this.data=data;
        console.log('pushing first query')
        this._dataService.pushNotification(this.data);
      });
  }
  
  ngDoCheck(): void {

  }

  ngOnChanges(changes: SimpleChanges): void {

  }

}
