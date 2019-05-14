import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFireAuth } from '@angular/fire/auth';



@Injectable({
  providedIn: 'root'
})
export class FirebaseServiceService {

  constructor(public firestore: AngularFirestore, 
              public auth: AngularFireAuth) { }

  getVisitors() {
    return this.firestore.collection('visitors').valueChanges();
  }

  registerWithEmail(email: string, password: string) {
    return this.auth.auth.createUserWithEmailAndPassword(email, password);
  }

}
