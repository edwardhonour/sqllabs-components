import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SqlCancelComponent } from './sql-cancel.component';

describe('SqlCancelComponent', () => {
  let component: SqlCancelComponent;
  let fixture: ComponentFixture<SqlCancelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ SqlCancelComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SqlCancelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
