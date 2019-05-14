import { Component, OnInit } from '@angular/core';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule, AngularFirestore } from '@angular/fire/firestore';
import { FirebaseServiceService } from '../../services/firebase-service.service';



@Component({
  selector: 'app-visitor-table',
  templateUrl: './visitor-table.component.html',
  styleUrls: ['./visitor-table.component.css']
})
export class VisitorTableComponent implements OnInit {
  visitors: any;
 filterVisitante = '';

  constructor(public firestore: FirebaseServiceService) { 
    this.firestore.getVisitors().subscribe((data) => {
      console.log(data)
      this.visitors = data;
    })

  }

  ngOnInit() {
  }


}
