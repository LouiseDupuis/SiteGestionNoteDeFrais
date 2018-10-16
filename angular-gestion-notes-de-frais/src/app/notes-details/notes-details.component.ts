import { Component, OnInit, Input } from '@angular/core';

import {Note} from '../note_de_frais_classe'; 

@Component({
  selector: 'app-notes-details',
  templateUrl: './notes-details.component.html',
  styleUrls: ['./notes-details.component.css']
})
export class NotesDetailsComponent implements OnInit {

    @Input() note: Note;

  constructor() { }

  ngOnInit() {
  }

}
