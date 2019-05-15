import { Component} from '@angular/core';
import { FirebaseServiceService } from 'src/app/services/firebase-service.service';

@Component({
  selector: 'app-invitations',
  templateUrl: './invitations.component.html',
  styleUrls: ['./invitations.component.css']
})
export class InvitationsComponent {


  constructor(public firestore : FirebaseServiceService) { }

  enviarInvitados(nombre, fecha, hora, email, empresavisitada, notas) {
    console.log(nombre, fecha, hora, email, empresavisitada, notas);
    this.firestore.addInvitacion(nombre, fecha, hora, email, empresavisitada, notas)
  }


}
