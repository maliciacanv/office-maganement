import { Component, OnInit } from '@angular/core';
import { FirebaseServiceService } from '../../services/firebase-service.service';


@Component({
  selector: 'app-visitor-table',
  templateUrl: './visitor-table.component.html',
  styleUrls: ['./visitor-table.component.css']
})
export class VisitorTableComponent implements OnInit {
  today = '';
  visitors: any;
  filterVisitante = '';
  date: any;



  constructor(public firestore: FirebaseServiceService) {

    this.firestore.getVisitors().subscribe((data) => {
      this.visitors = data;
    });

  }

  ngOnInit() {
  }

  getOutVisitor(id) {
    console.log(id)
  //   if()
  //   const newDate= new Date();
  //   this.date = newDate
}

}
