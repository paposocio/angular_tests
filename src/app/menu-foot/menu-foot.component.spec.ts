import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuFootComponent } from './menu-foot.component';

describe('MenuFootComponent', () => {
  let component: MenuFootComponent;
  let fixture: ComponentFixture<MenuFootComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MenuFootComponent]
    });
    fixture = TestBed.createComponent(MenuFootComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
