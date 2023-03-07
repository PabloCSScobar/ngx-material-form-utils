import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxMaterialFormUtilsComponent } from './ngx-material-form-utils.component';

describe('NgxMaterialFormUtilsComponent', () => {
  let component: NgxMaterialFormUtilsComponent;
  let fixture: ComponentFixture<NgxMaterialFormUtilsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgxMaterialFormUtilsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NgxMaterialFormUtilsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
