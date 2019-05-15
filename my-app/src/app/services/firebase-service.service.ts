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
  public Visitor = {
    nombre: '',
    correo: '',
    empresaPorVisitada: '',
    persona: '',
    empresaVisitante: '',
    id:""
  };

  getVisitors() {
    return this.firestore.collection('visitors').valueChanges();
  }

  registerWithEmail(email: string, password: string) {
    return this.auth.auth.signInWithEmailAndPassword(email, password);
  }
  addVisitors(name, email, companyVisitador, comunero, comuneroVisitador,userId) {
  const newObj = {
    ...this.Visitor,
    nombre: name,
    correo: email,
    empresaPorVisitada: companyVisitador,
    persona: comunero,
    empresaVisitante: comuneroVisitador,
    id:userId
  };
  this.firestore.collection('visitors').add(newObj);
  }
}
