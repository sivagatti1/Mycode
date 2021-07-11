import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MiphonesComponent } from './miphones.component';

describe('MiphonesComponent', () => {
  let component: MiphonesComponent;
  let fixture: ComponentFixture<MiphonesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MiphonesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MiphonesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
