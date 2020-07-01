import { Component, OnInit } from '@angular/core';
import { GoogleLoginProvider, SocialAuthService, SocialUser } from 'angularx-social-login';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: 'login.component.html'
})
export class LoginComponent implements OnInit {

  user: SocialUser;

  constructor(
    private authService: SocialAuthService,
    private router: Router
  ) {}

  ngOnInit(): void {}

  signinWithGoogle() {
    this.authService.signIn(GoogleLoginProvider.PROVIDER_ID).then(user => {
      this.user = user;
      console.log(user);
      sessionStorage.setItem('X-Authentication', this.user.idToken);
      sessionStorage.setItem('AUTHENTICATED', String(true));
      sessionStorage.setItem('PHOTO', this.user.photoUrl);
      sessionStorage.setItem('FULL_NAME', this.user.name);
      sessionStorage.setItem('EMAIL', this.user.email);
      this.router.navigate(['/dashboard']).then(r => console.log(r));
    });
  }
}
