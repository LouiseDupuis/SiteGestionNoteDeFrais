import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {TestComponent} from './test/test.component';
import {UserViewComponent} from './user-view/user-view.component';

const routes: Routes = [
    {path: 'test',component: TestComponent},
    {path: 'userView', component: UserViewComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
exports:[RouterModule]
    
  
})
export class AppRoutingModule { }
