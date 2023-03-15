import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SqlButtonComponent } from './sql-button.component';

describe('SqlButtonComponent', () => {
  let component: SqlButtonComponent;
  let fixture: ComponentFixture<SqlButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ SqlButtonComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SqlButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
