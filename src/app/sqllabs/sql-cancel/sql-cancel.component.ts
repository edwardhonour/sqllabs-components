import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-sql-cancel',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './sql-cancel.component.html',
  styleUrls: ['./sql-cancel.component.css']
})
export class SqlCancelComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
