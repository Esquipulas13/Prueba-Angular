import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MicrodosisComponent } from './microdosis.component';

describe('MicrodosisComponent', () => {
  let component: MicrodosisComponent;
  let fixture: ComponentFixture<MicrodosisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MicrodosisComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MicrodosisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
