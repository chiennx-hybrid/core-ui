import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { LoginComponent } from './login.component';
import { LoginRoutes } from './login.routing';
import { GoogleLoginProvider, SocialAuthServiceConfig, SocialLoginModule } from 'angularx-social-login';

@NgModule({
  declarations: [
    LoginComponent
  ],
  imports: [
    CommonModule,
    SocialLoginModule,
    RouterModule.forChild(LoginRoutes)
  ],
  providers: [
    {
      provide: 'SocialAuthServiceConfig',
      useValue: {
        autoLogin: false,
        providers: [
          {
            id: GoogleLoginProvider.PROVIDER_ID,
            provider: new GoogleLoginProvider('197821058088-uvbnasmuc1dosa0dg86ctl8obb09e5a6.apps.googleusercontent.com')
          }
        ],
      } as SocialAuthServiceConfig
    }
  ],
  bootstrap: [LoginComponent]
})
export class LoginModule { }
