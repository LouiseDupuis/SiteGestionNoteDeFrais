import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-creation-note',
  templateUrl: './creation-note.component.html',
  styleUrls: ['./creation-note.component.css']
})
export class CreationNoteComponent implements OnInit {
   c = false;
  constructor() { };
  onClick(){
    console.log('ça marche !!');
    this.c = true;
    };

  ngOnInit() {
  };

}
