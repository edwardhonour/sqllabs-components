import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-sql-checkbox',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './sql-checkbox.component.html',
  styleUrls: ['./sql-checkbox.component.css']
})
export class SqlCheckboxComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
