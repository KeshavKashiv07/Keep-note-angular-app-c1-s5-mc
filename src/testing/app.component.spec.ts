import { NO_ERRORS_SCHEMA } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { AppComponent } from 'src/app/app.component';
import { HeaderComponent } from 'src/app/header/header.component';
import { NoteAddComponent } from 'src/app/note-add/note-add.component';
import { NoteViewComponent } from 'src/app/note-view/note-view.component';
import { SearchComponent } from 'src/app/search/search.component';

import { NoteServiceStub } from './noteServiceStub';
import { NoteService } from 'src/app/sarvice/note.service';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        NoteViewComponent,
        HeaderComponent,
        SearchComponent,
        NoteAddComponent  
      ],
      providers: [{ provide: NoteService, useClass: NoteServiceStub }],
      // schemas: [ NO_ERRORS_SCHEMA ]
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

});
