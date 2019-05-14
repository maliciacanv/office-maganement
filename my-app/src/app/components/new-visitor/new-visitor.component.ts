import { Component } from '@angular/core';
import { FirebaseServiceService } from '../../services/firebase-service.service';

@Component({
  selector: 'app-new-visitor',
  templateUrl: './new-visitor.component.html',
  styleUrls: ['./new-visitor.component.css']
})
export class NewVisitorComponent {

  constructor(public firestore: FirebaseServiceService) { }

  getVisitorManual(name, email, companyVisitador, comunero, comuneroVisitador){
    this.firestore.addVisitors(name, email, companyVisitador, comunero, comuneroVisitador)
  }
 

}
