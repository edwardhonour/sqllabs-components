import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-sql-radio',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './sql-radio.component.html',
  styleUrls: ['./sql-radio.component.css']
})
export class SqlRadioComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
