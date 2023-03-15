import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SqlRadioComponent } from './sql-radio.component';

describe('SqlRadioComponent', () => {
  let component: SqlRadioComponent;
  let fixture: ComponentFixture<SqlRadioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ SqlRadioComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SqlRadioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
