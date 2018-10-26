import { Component, OnInit } from '@angular/core';
import {NoteService} from '../note.service';
import { Note } from '../note_de_frais_classe';
import { Response } from '@angular/http';
import {NoteComponent} from '../note/note.component';

@Component({
  selector: 'app-creation-note',
  templateUrl: './creation-note.component.html',
  styleUrls: ['./creation-note.component.css']
})
export class CreationNoteComponent implements OnInit {
  
 
  constructor(private noteService: NoteService) { }
  
  //notes: Note[] = this.noteComponent.notes;

  public newNote: Note = new Note()


    create() {
      this.noteService.createNote(this.newNote)
        .subscribe((res) => {
          this.newNote = new Note()
        })
    }
  

  ngOnInit() {
  };

}
