import { CommonModule } from '@angular/common';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FsEditingAreaComponent } from './fs-editing-area.component';

describe('FsEditingAreaComponent', () => {
  let component: FsEditingAreaComponent;
  let fixture: ComponentFixture<FsEditingAreaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FsEditingAreaComponent],
      imports: [CommonModule],
      providers: [],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FsEditingAreaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
