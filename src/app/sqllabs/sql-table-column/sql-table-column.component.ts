import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-sql-table-column',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './sql-table-column.component.html',
  styleUrls: ['./sql-table-column.component.css']
})
export class SqlTableColumnComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
