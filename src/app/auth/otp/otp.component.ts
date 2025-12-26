import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../../core/services/auth.service';

@Component({
  selector: 'app-otp',
  templateUrl: './otp.component.html'
})
export class OtpComponent {

  userId: string = '';
  error = '';
  loading = false;

  otpForm = this.fb.group({
    otp: ['', Validators.required]
  });

  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private authService: AuthService,
    private router: Router
  ) {
    this.userId = this.route.snapshot.queryParamMap.get('userId') || '';
  }

  submit() {
    if (this.otpForm.invalid) return;

    this.loading = true;
    this.error = '';

    this.authService.verifyOtp({
      userId: this.userId,
      otp: this.otpForm.value.otp
    }).subscribe({
      next: (res: any) => {
        if (res.data === true) {
          alert('OTP Verified Successfully');
          this.router.navigate(['/auth/login']);
        } else {
          this.error = 'Invalid OTP';
        }
        this.loading = false;
      },
      error: () => {
        this.error = 'OTP verification failed';
        this.loading = false;
      }
    });
  }
}
