import { Component, OnInit } from '@angular/core';
import { FirebaseServiceService } from '../../services/firebase-service.service';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { auth } from 'firebase';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private router: Router,
              private authServices: FirebaseServiceService) { }
  public email = '';
  public password = '';
  ngOnInit() {
  }
  addUser(email, password) {
    console.log(email)
    this.authServices.registerWithEmail(email, password).then( (data) => {
      alert('Loggeado correctamente');
      console.log(data);
      this.router.navigate(['admin']);
    }).catch((error) => {
      alert('Ocurrioo un error');
      console.log(error);
    });
  }

}
