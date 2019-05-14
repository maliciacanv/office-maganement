import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class FirebaseServiceService {

  public Visitor = {
    nombre: '',
    correo: '',
    empresaPorVisitada: '',
    persona: '',
    empresaVisitante: '',
  };

  constructor(public firestore: AngularFirestore) { }

  getVisitors() {
    return this.firestore.collection('visitors').valueChanges();
  }

  addVisitors(name, email, companyVisitador, comunero, comuneroVisitador){
  const newObj = {
    ...this.Visitor,
    nombre: name,
    correo: email,
    empresaPorVisitada: companyVisitador,
    persona: comunero,
    empresaVisitante: comuneroVisitador
  };
    this.firestore.collection('visitors').add(newObj);
    console.log('se envio a base de datos', newObj)
  };

}
