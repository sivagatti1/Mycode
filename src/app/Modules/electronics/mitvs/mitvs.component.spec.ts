import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MitvsComponent } from './mitvs.component';

describe('MitvsComponent', () => {
  let component: MitvsComponent;
  let fixture: ComponentFixture<MitvsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MitvsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MitvsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
