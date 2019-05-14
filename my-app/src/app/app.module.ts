import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AngularFireModule } from '@angular/fire';
import { environment } from '../environments/environment.prod';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { VisitorTableComponent } from './components/visitor-table/visitor-table.component';
import { MenuComponent } from './components/menu/menu.component';
import { NewVisitorComponent } from './components/new-visitor/new-visitor.component';


@NgModule({
  declarations: [
    AppComponent,
    VisitorTableComponent,
    MenuComponent,
    NewVisitorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFirestoreModule,
    AngularFireModule.initializeApp(environment.firebaseConfig)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
