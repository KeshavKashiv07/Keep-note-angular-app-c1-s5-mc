import { Component, EventEmitter, Output } from '@angular/core';
import { Note } from '../models/note';

@Component({
  selector: 'app-note-add',
  templateUrl: './note-add.component.html',
  styleUrls: ['./note-add.component.css']
})
export class NoteAddComponent {

  note: Note = {};

    @Output()
    noteAdded: EventEmitter<any> = new EventEmitter<any>();

  addNote() {
    this.noteAdded.emit(this.note);
  }

}
