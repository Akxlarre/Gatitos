import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DetailgatitoPage } from './detailgatito.page';

describe('DetailgatitoPage', () => {
  let component: DetailgatitoPage;
  let fixture: ComponentFixture<DetailgatitoPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailgatitoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
