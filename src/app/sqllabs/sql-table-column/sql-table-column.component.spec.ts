import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SqlTableColumnComponent } from './sql-table-column.component';

describe('SqlTableColumnComponent', () => {
  let component: SqlTableColumnComponent;
  let fixture: ComponentFixture<SqlTableColumnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ SqlTableColumnComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SqlTableColumnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
