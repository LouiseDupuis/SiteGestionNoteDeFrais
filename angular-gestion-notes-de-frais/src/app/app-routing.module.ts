import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {TestComponent} from './test/test.component';
import {UserViewComponent} from './user-view/user-view.component';
import {CreationNoteComponent} from './creation-note/creation-note.component';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { PageDeConnexionComponent } from './page-de-connexion/page-de-connexion.component';
import { AuthGuardService } from './auth-guard.service';

const routes: Routes = [
    {path: 'test',component: TestComponent},
    {path: 'userView', component: UserViewComponent, /* canActivate : [AuthGuardService] */},
    {path: 'creationNote', component: CreationNoteComponent},
    { path: 'login', component: LoginComponent },
    { path: 'register', component: RegisterComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
exports:[RouterModule]
    
  
})
export class AppRoutingModule { }
