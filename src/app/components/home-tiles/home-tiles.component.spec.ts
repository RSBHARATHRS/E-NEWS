import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { HomeTilesComponent } from './home-tiles.component';

describe('HomeTilesComponent', () => {
  let component: HomeTilesComponent;
  let fixture: ComponentFixture<HomeTilesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeTilesComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(HomeTilesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
