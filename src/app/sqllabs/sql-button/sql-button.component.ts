import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-sql-button',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './sql-button.component.html',
  styleUrls: ['./sql-button.component.css']
})
export class SqlButtonComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
