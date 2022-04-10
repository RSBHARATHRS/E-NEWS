import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { NewsViewedPage } from './news-viewed.page';

describe('NewsViewedPage', () => {
  let component: NewsViewedPage;
  let fixture: ComponentFixture<NewsViewedPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewsViewedPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(NewsViewedPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
