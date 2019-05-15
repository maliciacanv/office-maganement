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
  today: any = '';
  visitors: any;
 filterVisitante = '';

  constructor(public firestore: FirebaseServiceService) {

    this.firestore.getVisitors().subscribe((data) => {
      this.visitors = data;
      
    });

  }

  ngOnInit() {
  }

  getOutVisitor(obj: any, id: any) {
const arraysito = [];
arraysito.push(obj)
const obje = arraysito.map((ele:any) => {
      console.log(ele)
      if(ele.id === id){
        return this.today= new Date();
      }
    })
this.today = obje;

  // this.firestore.getDateForVisitorOut(obj, id);
  console.log(obj, id);
  }
}
