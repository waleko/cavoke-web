import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GameInfoSlimComponent } from './game-info-slim.component';

describe('GameInfoSlimComponent', () => {
  let component: GameInfoSlimComponent;
  let fixture: ComponentFixture<GameInfoSlimComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GameInfoSlimComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GameInfoSlimComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
