import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ListgatitosPage } from './listgatitos.page';

describe('ListgatitosPage', () => {
  let component: ListgatitosPage;
  let fixture: ComponentFixture<ListgatitosPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ListgatitosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
