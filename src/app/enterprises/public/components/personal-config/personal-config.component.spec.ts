import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonalConfigComponent } from './personal-config.component';
import { ComponentsModule } from 'src/app/shared/components/components.module';

describe('PersonalConfigComponent', () => {
  let component: PersonalConfigComponent;
  let fixture: ComponentFixture<PersonalConfigComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PersonalConfigComponent ],
      imports: [ComponentsModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PersonalConfigComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
