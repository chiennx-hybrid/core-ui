import {Component, OnInit} from '@angular/core';
import {GoogleLoginProvider, SocialAuthService, SocialUser} from 'angularx-social-login';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  user: SocialUser;

  constructor(
    private authService: SocialAuthService,
    private router: Router,
  ) {
  }

  ngOnInit() {
    this.authService.authState.subscribe((user) => {
      this.user = user;
      console.log(this.user.idToken);
      // sessionStorage.setItem('X-Authentication', this.user.idToken);
      // sessionStorage.setItem('AUTHENTICATED', String(true));
      // sessionStorage.setItem('FULL_NAME', this.user.name);
      // sessionStorage.setItem('PHOTO', this.user.photoUrl);
      sessionStorage.setItem('FULL_NAME', this.user.name);
      sessionStorage.setItem('EMAIL', this.user.email);
      this.router.navigate(['/dashboard']).then(r => r.valueOf());
    });
  }

  signInWithGoogle(): void {
    this.authService.signIn(GoogleLoginProvider.PROVIDER_ID).then(x => console.log(x));
  }
}
