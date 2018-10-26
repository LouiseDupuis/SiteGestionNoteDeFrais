import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { TestComponent } from './test/test.component';

import{FormsModule} from '@angular/forms';
import { CreationNoteComponent } from './creation-note/creation-note.component';
import { NoteComponent } from './note/note.component';

import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { NotesDetailsComponent } from './notes-details/notes-details.component';
import { AppRoutingModule } from './/app-routing.module';
import { UserViewComponent } from './user-view/user-view.component';

import { HttpClientModule }    from '@angular/common/http';

import {NoteService} from './note.service';

import { PageDeConnexionComponent } from './page-de-connexion/page-de-connexion.component';


import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';

import { AuthenticationService } from './authentication.service';
import { AuthGuardService } from './auth-guard.service';



@NgModule({

  


  declarations: [
    AppComponent,
    TestComponent,
    CreationNoteComponent,
    NoteComponent,
    NotesDetailsComponent,
    UserViewComponent,
    PageDeConnexionComponent,
    LoginComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
      FormsModule,
      NgbModule.forRoot(),
      AppRoutingModule,
      HttpClientModule,
      
      
      // The HttpClientInMemoryWebApiModule module intercepts HTTP requests
     // and returns simulated server responses.
     // Remove it when a real server is ready to receive requests.
     //HttpClientInMemoryWebApiModule.forRoot(
    //InMemoryDataService, { dataEncapsulation: false }
  ],
  providers: [NoteService,  AuthenticationService, 
    AuthGuardService],
  bootstrap: [AppComponent]
})
export class AppModule { }
