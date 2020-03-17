import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardComponent } from './dashboard.component';
import { ModalComponent } from 'src/app/shared/components/components-organisms/modal/modal.component';
import { LinkComponent } from 'src/app/shared/components/components-atom/link/link.component';
import { IconComponent } from 'src/app/shared/components/components-atom/icon/icon.component';
import { RouterTestingModule } from '@angular/router/testing'

describe('DashboardComponent', () => {
  let component: DashboardComponent;
  let fixture: ComponentFixture<DashboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [ 
        DashboardComponent,
        ModalComponent,
        LinkComponent,
        IconComponent
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});