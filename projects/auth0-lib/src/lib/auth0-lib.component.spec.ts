import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Auth0LibComponent } from './auth0-lib.component';

describe('Auth0LibComponent', () => {
  let component: Auth0LibComponent;
  let fixture: ComponentFixture<Auth0LibComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Auth0LibComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Auth0LibComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
