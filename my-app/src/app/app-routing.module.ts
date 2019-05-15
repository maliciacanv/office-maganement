import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { VisitorTableComponent } from './components/visitor-table/visitor-table.component';
import { LoginComponent } from './components/login/login.component';
import { NewVisitorComponent } from './components/new-visitor/new-visitor.component';
import { InvitationsComponent } from './components/invitations/invitations.component';

const routes: Routes = [
  {path: '', component: LoginComponent},
  {path: 'admin', component: VisitorTableComponent},
  {path: 'new-visitor', component: NewVisitorComponent},
  {path: 'new-invitation', component: InvitationsComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
