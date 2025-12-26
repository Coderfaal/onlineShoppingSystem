import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { AuthService } from '../../core/services/auth.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html'
})
export class RegisterComponent {

  loading = false;
  error = '';

  constructor(
  private fb: FormBuilder,
  private authService: AuthService,
  private router: Router   
) {}


  registerForm = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    phone: ['', Validators.required],
    password: ['', Validators.required]
  });

  submit() {
  if (this.registerForm.invalid) return;

  this.loading = true;
  this.error = '';

  this.authService.register(this.registerForm.value)
    .subscribe({
      next: (res: any) => {
        console.log('Register response:', res);

        // 🔴 THIS LINE WAS MISSING / NOT WORKING
        this.router.navigate(['/auth/verify-otp'], {
          queryParams: { userId: res.data }
        });

        this.loading = false;
      },
      error: err => {
        this.error = err.error?.message || 'Registration failed';
        this.loading = false;
      }
    });
}

}
