import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class FirebaseServiceService {

  constructor(public firestore: AngularFirestore) { }
  
  getVisitors() {
    return this.firestore.collection('visitors').valueChanges();
  }
}
