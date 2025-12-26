import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { RegisterComponent } from './register/register.component';
import { ReactiveFormsModule } from '@angular/forms';
import { OtpComponent } from './otp/otp.component';
import { LoginComponent } from './login/login.component';

@NgModule({
  declarations: [
    RegisterComponent,
    OtpComponent,
    LoginComponent
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,ReactiveFormsModule
  ]
})
export class AuthModule {}
