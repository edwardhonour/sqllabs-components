import { Component, OnInit, Input, Output, EventEmitter,DoCheck } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataService } from 'src/app/data.service';

@Component({
  selector: 'sql-submit',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './sql-submit.component.html',
  styleUrls: ['./sql-submit.component.css']
})
export class SqlSubmitComponent implements OnInit {

  @Input() data: any={};
  @Input() label: any = 'No Label Defined';
  @Input() class: any = '';
  @Input() style: any = '';
  @Output()
  change: EventEmitter<any> = new EventEmitter<any>();
  counter: number = 0;

  constructor(public _dataService: DataService) { 
    this._dataService.dataSubject.subscribe(d => {
      this.data=d;
      this.counter++;
      console.log('sql-submit' + this.counter)
      console.log(d)
    })
  }

  ngOnInit(): void {

  }

  handleClick() {
    this.data['submit']='Y';
    this._dataService.pushNotification(this.data);
  }
}
