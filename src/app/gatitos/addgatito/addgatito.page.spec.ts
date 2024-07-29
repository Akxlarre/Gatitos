import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AddgatitoPage } from './addgatito.page';

describe('AddgatitoPage', () => {
  let component: AddgatitoPage;
  let fixture: ComponentFixture<AddgatitoPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(AddgatitoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
