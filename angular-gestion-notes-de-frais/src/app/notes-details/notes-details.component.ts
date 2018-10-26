import { Component, OnInit, Input } from '@angular/core';
import {NoteService} from '../note.service';

import {Note} from '../note_de_frais_classe'; 

@Component({
  selector: 'app-notes-details',
  templateUrl: './notes-details.component.html',
  styleUrls: ['./notes-details.component.css']
})
export class NotesDetailsComponent implements OnInit {

    @Input() note: Note;

  constructor(private noteService : NoteService) { }
  notesModif : Note[] =[];

  editNote(note: Note) {
    console.log(note)
    this.noteService.editNote(note).subscribe(res => {
          console.log('Update Succesful')
        }, err => {
          this.editNote(note)
          console.error('Update Unsuccesful')
        })
  }
  
  deleteNote(note: Note) {
    this.noteService.deleteNote(note._id).subscribe(res => {
      console.log('Notesupprimée');
    })
  }


 

  ngOnInit() {
  }

}
