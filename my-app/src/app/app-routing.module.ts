import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { VisitorTableComponent } from './components/visitor-table/visitor-table.component';
import { LoginComponent } from './components/login/login.component';
const routes: Routes = [
  {path: '', component: LoginComponent},
  {path: 'admin', component: VisitorTableComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
