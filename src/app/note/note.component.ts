import { Component, Input, OnInit } from '@angular/core';
import { Note } from '../models/note';
import { NoteService } from '../sarvice/note.service';

@Component({
  selector: 'app-note',
  templateUrl: './note.component.html',
  styleUrls: ['./note.component.css']
})
export class NoteComponent{

  @Input() 
  note?:Note;
}
