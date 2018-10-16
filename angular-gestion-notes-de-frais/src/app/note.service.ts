import { Injectable } from '@angular/core';
import {Note} from './note_de_frais_classe';
import { Observable, of } from 'rxjs';

import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import {Response} from '@angular/http';
import { catchError, map, tap } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class NoteService {
    
    api_url = 'http://localhost:3000';
    private notesUrl = `${this.api_url}/api/todos`;
    
    // cherche les notes de frais sur le serveur
    getNotes(): Observable<Note[]>{
        return this.http.get<Note[]>(this.notesUrl)
        .pipe(catchError(this.handleError('getNotes', [])))
    }

    // crée une note de frais 
    createNote(note: Note): Observable<any>{
        //returns the observable of http post request 
        return this.http.post(`${this.notesUrl}`, note);
    }

    editNote(note:Note){
        let editUrl = `${this.notesUrl}`
        //returns the observable of http put request 
        return this.http.put(editUrl, note);
      }
    
   // deleteNote(id: string): any {
        //Delete the object by the id
       // let deleteUrl = `${this.notesUrl}/${id}`
        //return this.http.delete(deleteUrl).map(res => {
           // return res;
      //  })
   // }



    // La fonction qui suit est la fonction error handler qui est renvoyée lorsque l'application n'arrive pas à obtenir la liste des héros
    private handleError<T> (operation = 'operation', result?: T) {
        return (error: any): Observable<T> => {
 
    // TODO: send the error to remote logging infrastructure
    console.error(error); // log to console instead
 
    // TODO: better job of transforming error for user consumption
    // il y avait une erreur, j'ai remplacé this par console
    console.log(`${operation} failed: ${error.message}`);
 
    // Let the app keep running by returning an empty result.
    return of(result as T);
        };
  }

  constructor(
    private http: HttpClient) { }
}
