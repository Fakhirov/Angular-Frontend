import { Component, OnInit } from '@angular/core';
import { AuthService} from '../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit {

  constructor( private authService: AuthService, private router: Router) {
  }

  ngOnInit(): void {
  }

  onSignIn(){
    this.authService.signIn().then(() =>
    {
      console.log('Authentication is successful!!!');
      this.router.navigate(['devices']).then(() => {
        console.log('Go back to devices');
      });
    });
  }

  onSignOut(){
    this.authService.signOut();
  }
}
