import { Component, OnInit } from '@angular/core';
import {Note} from '../note_de_frais_classe';

import {NoteService} from '../note.service';



@Component({
  selector: 'app-note',
  templateUrl: './note.component.html',
  styleUrls: ['./note.component.css']
})
export class NoteComponent implements OnInit {
    
    notes: Note[];
    noteSelect : Note;
    
    onSelect(note : Note): void{
        this.noteSelect = note;
    }

  constructor(private noteService : NoteService) { }
    
getNote(): void{
    this.noteService.getNotes().subscribe(listeNotes => {this.notes = listeNotes});
}


  ngOnInit() {
      this.getNote();
  }

}
